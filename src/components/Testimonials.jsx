import { TESTIMONIOS } from "../data/products.js";
import ProductPhoto from "./ProductPhoto.jsx";

/* Se oculta sola mientras TESTIMONIOS esté vacío — ver el comentario en
   src/data/products.js. */
export default function Testimonials() {
  if (!TESTIMONIOS.length) return null;

  return (
    <section id="clientas" className="testimonials" aria-label="Nuestras clientas">
      <div className="section-inner">
        <h2 className="section-title">Nuestras clientas</h2>
        <div className="testimonials-grid">
          {TESTIMONIOS.map((t) => {
            const usuario = t.autor.replace(/^@/, "");
            return (
              <a
                key={t.autor}
                href={`https://instagram.com/${usuario}`}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-item"
              >
                <ProductPhoto src={t.imagen} alt={t.autor} />
                <span className="testimonial-autor">@{usuario}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
