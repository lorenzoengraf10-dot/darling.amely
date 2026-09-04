import ProductPhoto from "./ProductPhoto.jsx";
import { CONFIG } from "../data/products.js";
import { waLink, mensajeConsultaProducto } from "../utils/whatsapp.js";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

const MAX_VARIANTES_EN_TARJETA = 4;

export default function ProductCard({ entry, onOpen }) {
  const { catKey, catNombre, slug, product } = entry;
  const { addItem } = useCart();
  const { showToast } = useToast();
  const tieneVariantes = Boolean(product.variantes?.length);

  function handleAgregar() {
    // Con variantes (tono/tamaño) hay que elegir una primero — se abre la
    // ficha en vez de agregar una al azar.
    if (tieneVariantes) {
      onOpen(catKey, slug);
      return;
    }
    addItem(catKey, slug, 1);
    showToast("Agregado al pedido");
  }

  return (
    <article className="card">
      <button
        type="button"
        className="card-photo"
        aria-label={`Ver detalle de ${product.nombre}`}
        onClick={() => onOpen(catKey, slug)}
      >
        <ProductPhoto src={product.imagen} alt={product.nombre} />
      </button>

      <div className="card-body">
        <span className="card-cat">{catNombre}</span>
        <h3 className="card-name">
          <button type="button" className="card-name-btn" onClick={() => onOpen(catKey, slug)}>
            {product.nombre}
          </button>
        </h3>

        {product.descripcion && <p className="card-desc">{product.descripcion}</p>}

        {tieneVariantes && (
          <div className="card-variantes" aria-label="Opciones disponibles">
            {product.variantes.slice(0, MAX_VARIANTES_EN_TARJETA).map((v) => (
              <button
                key={v.nombre}
                type="button"
                className="pill pill-sm"
                onClick={() => onOpen(catKey, slug, v.nombre)}
              >
                {v.nombre}
              </button>
            ))}
            {product.variantes.length > MAX_VARIANTES_EN_TARJETA && (
              <button type="button" className="card-muchos-colores" onClick={() => onOpen(catKey, slug)}>
                + opciones
              </button>
            )}
          </div>
        )}

        <div className="card-actions">
          <button type="button" className="btn btn-add" onClick={handleAgregar}>
            Agregar al pedido
          </button>
          {CONFIG.whatsappVisible && (
            <a
              href={waLink(CONFIG.whatsapp, mensajeConsultaProducto(CONFIG.nombre, product))}
              target="_blank"
              rel="noopener noreferrer"
              className="card-wa-link"
            >
              Consultar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
