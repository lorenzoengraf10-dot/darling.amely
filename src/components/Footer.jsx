import Logo from "./Logo.jsx";
import { CONFIG, CATEGORIAS } from "../data/products.js";
import { categoriasConProductos } from "../utils/catalog.js";
import { waLink, mensajeConsultaGeneral } from "../utils/whatsapp.js";

export default function Footer({ onSelectCategory }) {
  const claves = categoriasConProductos();

  return (
    <footer id="contacto" className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <span>
            {CONFIG.nombre} · {CONFIG.rubro}
          </span>
        </div>

        <div className="footer-col">
          <h3>Categorías</h3>
          <ul>
            {claves.map((key) => (
              <li key={key}>
                <button type="button" className="footer-link" onClick={() => onSelectCategory(key)}>
                  {CATEGORIAS[key].nombre}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <p>
            {CONFIG.direccion}, {CONFIG.ciudad}
          </p>
          <p>{CONFIG.provincia}</p>
          <div className="footer-socials">
            {CONFIG.whatsappVisible && CONFIG.whatsapp && (
              <a
                href={waLink(CONFIG.whatsapp, mensajeConsultaGeneral(CONFIG.nombre))}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                WhatsApp
              </a>
            )}
            {CONFIG.instagram ? (
              <a
                href={`https://instagram.com/${CONFIG.instagram.replace(/^@/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
              >
                Instagram
              </a>
            ) : (
              // TODO: confirmar con la clienta — usuario de Instagram (la
              // captura del perfil no llegó adjunta a esta sesión).
              <span className="footer-social footer-social-todo">Instagram (a confirmar)</span>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {CONFIG.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
