import Logo from "./Logo.jsx";
import { CartIcon } from "./icons.jsx";
import { useCart } from "../context/CartContext.jsx";
import { CONFIG } from "../data/products.js";

export default function Header() {
  const { count, openCart } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label={`${CONFIG.nombre} — inicio`}>
          <Logo />
          <span className="brand-text">
            <strong>{CONFIG.nombre}</strong>
            <small>{CONFIG.rubro}</small>
          </span>
        </a>
        <button type="button" className="cart-btn" aria-label="Ver carrito de pedido" onClick={openCart}>
          <CartIcon />
          <span className="cart-count">{count}</span>
        </button>
      </div>
    </header>
  );
}
