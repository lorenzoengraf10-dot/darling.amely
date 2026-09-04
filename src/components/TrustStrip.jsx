import { ChatIcon, PinIcon, TruckIcon } from "./icons.jsx";
import { CONFIG } from "../data/products.js";

export default function TrustStrip() {
  const items = [
    {
      icon: <TruckIcon />,
      titulo: "Envíos a todo el país",
      texto: "Coordinado directo por WhatsApp, a domicilio en cualquier provincia.",
    },
    {
      icon: <ChatIcon />,
      titulo: "Atención personalizada",
      texto: "Elegís tus productos y coordinás el pedido charlando directo con nosotras.",
    },
    {
      icon: <PinIcon />,
      titulo: `Showroom en ${CONFIG.ciudad}`,
      texto: `${CONFIG.direccion}, ${CONFIG.provincia}`,
    },
  ];

  return (
    <section id="por-que-elegirnos" className="trust-strip" aria-label="Por qué elegir Darling Amely">
      <div className="section-inner">
        <h2 className="section-title">Por qué comprarnos</h2>
        <div className="trust-grid">
          {items.map((item) => (
            <div className="trust-item" key={item.titulo}>
              <div className="trust-icon">{item.icon}</div>
              <div className="trust-copy">
                <strong>{item.titulo}</strong>
                <span>{item.texto}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
