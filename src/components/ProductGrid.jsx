import ProductCard from "./ProductCard.jsx";
import { CATALOGO } from "../utils/catalog.js";

export default function ProductGrid({ activeCategory, onOpenProduct }) {
  const productos = activeCategory ? CATALOGO.filter((e) => e.catKey === activeCategory) : CATALOGO;

  return (
    <section id="catalogo" className="catalogo" aria-label="Catálogo de productos">
      <div className="section-inner">
        {productos.length ? (
          <div className="grid">
            {productos.map((entry) => (
              <ProductCard key={`${entry.catKey}:${entry.slug}`} entry={entry} onOpen={onOpenProduct} />
            ))}
          </div>
        ) : (
          <p className="catalogo-vacio">Todavía no hay productos cargados en esta categoría.</p>
        )}
      </div>
    </section>
  );
}
