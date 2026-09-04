import { useEffect } from "react";
import ProductPhoto from "./ProductPhoto.jsx";
import { CloseIcon } from "./icons.jsx";
import { CONFIG } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";
import { fotoDeItem } from "../utils/catalog.js";
import { waLink, mensajePedidoCarrito } from "../utils/whatsapp.js";

export default function CartDrawer() {
  const { items, isOpen, closeCart, setItemQty, clearCart } = useCart();
  const { showToast } = useToast();

  useEffect(() => {
    if (!isOpen) return undefined;
    function onKeyDown(e) {
      if (e.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("no-scroll");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, closeCart]);

  function enviarPedido() {
    if (!items.length) return;
    const lineas = items.map((item) => ({
      nombre: item.product.nombre,
      variante: item.variante,
      cantidad: item.cantidad,
    }));
    window.open(waLink(CONFIG.whatsapp, mensajePedidoCarrito(CONFIG.nombre, lineas)), "_blank");
    clearCart();
    closeCart();
    showToast("¡Pedido enviado! Te vamos a confirmar por WhatsApp.");
  }

  return (
    <>
      <div
        className={`cart-backdrop${isOpen ? " cart-backdrop-visible" : ""}`}
        onClick={closeCart}
      />
      <div className={`cart-drawer${isOpen ? " cart-drawer-open" : ""}`} aria-hidden={!isOpen} inert={!isOpen ? "" : undefined}>
        <div className="cart-inner">
          <div className="cart-header">
            <h2>Tu pedido</h2>
            <button type="button" className="modal-close" aria-label="Cerrar carrito" onClick={closeCart}>
              <CloseIcon />
            </button>
          </div>

          {items.length ? (
            <>
              <div className="cart-items">
                {items.map((item) => {
                  const nombreConVariante = item.variante
                    ? `${item.product.nombre} — ${item.variante}`
                    : item.product.nombre;
                  return (
                    <div className="cart-item" key={`${item.catKey}:${item.slug}:${item.variante || ""}`}>
                      <div className="cart-item-photo">
                        <ProductPhoto src={fotoDeItem(item.product, item.variante)} alt={nombreConVariante} />
                      </div>
                      <div className="cart-item-info">
                        <span className="cart-item-name">{nombreConVariante}</span>
                        <div className="qty-stepper qty-stepper-sm">
                          <button
                            type="button"
                            className="qty-btn"
                            aria-label="Restar"
                            onClick={() => setItemQty(item.catKey, item.slug, item.variante, item.cantidad - 1)}
                          >
                            −
                          </button>
                          <span className="qty-value">{item.cantidad}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            aria-label="Sumar"
                            onClick={() => setItemQty(item.catKey, item.slug, item.variante, item.cantidad + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="cart-item-remove"
                        aria-label="Quitar del pedido"
                        onClick={() => setItemQty(item.catKey, item.slug, item.variante, 0)}
                      >
                        <CloseIcon width="14" height="14" />
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="cart-footer">
                {CONFIG.whatsappVisible && CONFIG.whatsapp ? (
                  <button type="button" className="btn btn-whatsapp btn-block" onClick={enviarPedido}>
                    Enviar pedido por WhatsApp
                  </button>
                ) : (
                  <p className="cart-wa-pendiente">El WhatsApp todavía no está configurado.</p>
                )}
              </div>
            </>
          ) : (
            <div className="cart-empty">
              <p>Tu pedido está vacío.</p>
              <button type="button" className="btn btn-primary" onClick={closeCart}>
                Ver catálogo
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
