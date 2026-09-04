import { WhatsAppIcon } from "./icons.jsx";
import { CONFIG } from "../data/products.js";
import { waLink, mensajeConsultaGeneral } from "../utils/whatsapp.js";

export default function WhatsAppFloat() {
  if (!CONFIG.whatsappVisible || !CONFIG.whatsapp) return null;

  return (
    <a
      href={waLink(CONFIG.whatsapp, mensajeConsultaGeneral(CONFIG.nombre))}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Consultar por WhatsApp"
    >
      <WhatsAppIcon width="26" height="26" />
    </a>
  );
}
