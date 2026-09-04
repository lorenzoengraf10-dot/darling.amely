import { CATEGORIAS } from "../data/products.js";
import { categoriasConProductos } from "../utils/catalog.js";

export default function CategoryNav({ activeCategory, onChange }) {
  const claves = categoriasConProductos();

  return (
    <nav id="categorias" className="category-nav" aria-label="Filtrar por categoría">
      <button
        type="button"
        className={`pill${activeCategory === null ? " pill-active" : ""}`}
        onClick={() => onChange(null)}
      >
        Todas
      </button>
      {claves.map((key) => (
        <button
          key={key}
          type="button"
          className={`pill${activeCategory === key ? " pill-active" : ""}`}
          onClick={() => onChange(key)}
        >
          {CATEGORIAS[key].nombre}
        </button>
      ))}
    </nav>
  );
}
