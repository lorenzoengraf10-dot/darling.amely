import { CATALOGO } from "../utils/catalog.js";
import { CONFIG } from "../data/products.js";
import { WhatsAppIcon } from "./icons.jsx";
import { waLink, mensajeConsultaGeneral } from "../utils/whatsapp.js";
import ProductPhoto from "./ProductPhoto.jsx";

export default function Hero() {
  const destacado = CATALOGO[0]?.product;

  return (
    <section id="inicio" className="hero">
      <div className="hero-media">
        <ProductPhoto src={destacado?.imagen} alt={destacado?.nombre || CONFIG.nombre} className="hero-photo" />
      </div>
      <div className="hero-copy">
        <p className="hero-eyebrow">{CONFIG.rubro} · {CONFIG.direccion}, {CONFIG.ciudad}</p>
        <h1 className="hero-title">{CONFIG.tagline}</h1>
        <p className="hero-sub">Envíos a todo el país. Coordinás tu compra directo por WhatsApp.</p>
        <div className="hero-actions">
          <a href="#categorias" className="btn btn-primary">
            Ver categorías
          </a>
          <a
            href={waLink(CONFIG.whatsapp, mensajeConsultaGeneral(CONFIG.nombre))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon width="18" height="18" />
            Escribinos
          </a>
        </div>
      </div>
    </section>
  );
}
