import { TESTIMONIOS } from "../data/products.js";
import ProductPhoto from "./ProductPhoto.jsx";

/* Se oculta sola mientras TESTIMONIOS esté vacío — ver el comentario en
   src/data/products.js. Cada entrada es una foto de Instagram (si trae
   "imagen") o una reseña de texto con estrellas (si no). */
export default function Testimonials() {
  if (!TESTIMONIOS.length) return null;

  return (
    <section id="clientas" className="testimonials" aria-label="Lo que dicen nuestras clientas">
      <div className="section-inner">
        <h2 className="section-title">Lo que dicen nuestras clientas</h2>
        <div className="testimonials-grid">
          {TESTIMONIOS.map((t, i) =>
            t.imagen ? (
              <a
                key={i}
                href={`https://instagram.com/${t.autor.replace(/^@/, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-item"
              >
                <ProductPhoto src={t.imagen} alt={t.autor} />
                <span className="testimonial-autor">@{t.autor.replace(/^@/, "")}</span>
              </a>
            ) : (
              <div key={i} className="review-card">
                <span className="review-stars" aria-label={`${t.estrellas} de 5 estrellas`}>
                  {"★".repeat(t.estrellas || 5)}
                  {"☆".repeat(5 - (t.estrellas || 5))}
                </span>
                <p className="review-texto">“{t.texto}”</p>
                <span className="review-autor">{t.autor}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
