import { useEffect, useMemo, useState } from "react";
import ProductPhoto from "./ProductPhoto.jsx";
import { ChevronIcon, CloseIcon, WhatsAppIcon } from "./icons.jsx";
import { CONFIG } from "../data/products.js";
import { findEntry } from "../utils/catalog.js";
import { waLink, mensajeConsultaProducto } from "../utils/whatsapp.js";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

/* Ficha de producto ampliada: galería de fotos, selector de tono/tamaño,
   modo de uso, cantidad y las 3 acciones (agregar al pedido, consultar
   por WhatsApp, copiar link). Queda deep-linkeable vía #producto=cat:slug,
   igual que en roar. */
export default function ProductModal({ catKey, slug, varianteInicial, onClose }) {
  const entry = findEntry(catKey, slug);
  const product = entry?.product;
  const { addItem } = useCart();
  const { showToast } = useToast();

  const variantes = product?.variantes?.length ? product.variantes : null;

  const [varianteActual, setVarianteActual] = useState(() => {
    if (!variantes) return 0;
    const idx = variantes.findIndex((v) => v.nombre === varianteInicial);
    return idx !== -1 ? idx : 0;
  });
  const [fotoActual, setFotoActual] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("no-scroll");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [onClose]);

  useEffect(() => {
    const hash = `#producto=${catKey}:${slug}`;
    if (location.hash !== hash) history.replaceState(null, "", hash);
    return () => {
      if (location.hash.indexOf("#producto=") === 0) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    };
  }, [catKey, slug]);

  const varianteObj = variantes ? variantes[varianteActual] : null;

  const fotos = useMemo(() => {
    if (!product) return [];
    const principal = varianteObj?.imagen || product.imagen;
    const extra = product.galeria || [];
    return [principal, ...extra].filter(Boolean);
  }, [product, varianteObj]);

  if (!entry || !product) return null;
  const { catNombre } = entry;

  function irAFoto(i) {
    if (fotos.length < 2) return;
    setFotoActual(((i % fotos.length) + fotos.length) % fotos.length);
  }

  function elegirVariante(i) {
    setVarianteActual(i);
    setFotoActual(0);
  }

  const nombreVariante = varianteObj?.nombre;
  const waTexto = mensajeConsultaProducto(CONFIG.nombre, product, nombreVariante);
  const todasSonTono = variantes?.every((v) => /tono|color/i.test(v.nombre));

  function handleAgregar() {
    addItem(catKey, slug, qty, nombreVariante);
    showToast("Agregado al pedido");
    onClose();
  }

  function handleCopiarLink() {
    const url = `${location.origin}${location.pathname}#producto=${catKey}:${slug}`;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(
        () => showToast("¡Link copiado!"),
        () => showToast(`No se pudo copiar. Copiá manualmente: ${url}`)
      );
    } else {
      showToast(`No se pudo copiar. Copiá manualmente: ${url}`);
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" aria-label="Cerrar" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="modal-photo">
          <ProductPhoto src={fotos[fotoActual]} alt={product.nombre} />
          {fotos.length > 1 && (
            <>
              <button
                type="button"
                className="modal-arrow modal-arrow-left"
                aria-label="Foto anterior"
                onClick={() => irAFoto(fotoActual - 1)}
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                className="modal-arrow modal-arrow-right"
                aria-label="Foto siguiente"
                onClick={() => irAFoto(fotoActual + 1)}
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}
        </div>

        {fotos.length > 1 && (
          <div className="modal-dots">
            {fotos.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`modal-dot${i === fotoActual ? " modal-dot-active" : ""}`}
                aria-label={`Ver foto ${i + 1}`}
                onClick={() => irAFoto(i)}
              />
            ))}
          </div>
        )}

        <div className="modal-body">
          <span className="card-cat">{catNombre}</span>
          <h2 className="modal-nombre">{product.nombre}</h2>
          {product.subcategoria && <p className="modal-subcat">{product.subcategoria}</p>}

          {variantes && (
            <div className="modal-variant-row">
              <span className="modal-qty-label">{todasSonTono ? "Tono" : "Opción"}</span>
              <div className="variant-pills">
                {variantes.map((v, i) => (
                  <button
                    key={v.nombre}
                    type="button"
                    className={`variant-pill${i === varianteActual ? " variant-pill-active" : ""}`}
                    onClick={() => elegirVariante(i)}
                  >
                    {v.nombre}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.descripcion && <p className="modal-desc">{product.descripcion}</p>}

          {product.modoDeUso && (
            <div className="modal-modo-uso">
              <strong>Modo de uso</strong>
              <p>{product.modoDeUso}</p>
            </div>
          )}

          <div className="modal-qty-row">
            <span className="modal-qty-label">Cantidad</span>
            <div className="qty-stepper">
              <button
                type="button"
                className="qty-btn"
                aria-label="Restar"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="qty-value">{qty}</span>
              <button type="button" className="qty-btn" aria-label="Sumar" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-add btn-block" onClick={handleAgregar}>
              Agregar al pedido
            </button>
            {CONFIG.whatsappVisible && (
              <a
                href={waLink(CONFIG.whatsapp, waTexto)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                <WhatsAppIcon width="18" height="18" />
                Consultar por WhatsApp
              </a>
            )}
            <button type="button" className="btn btn-link" onClick={handleCopiarLink}>
              Copiar link de este producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
