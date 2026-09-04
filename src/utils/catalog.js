import { CATEGORIAS, PRODUCTOS } from "../data/products.js";
import { slugify } from "./slugify.js";

/* Índice plano de productos: [{ catKey, catNombre, slug, product }].
   Sirve para buscar un producto por categoría + slug (deep link del
   modal, ítems del carrito) sin recorrer PRODUCTOS a mano cada vez. */
export const CATALOGO = Object.keys(PRODUCTOS).flatMap((catKey) =>
  (PRODUCTOS[catKey] || []).map((product) => ({
    catKey,
    catNombre: CATEGORIAS[catKey]?.nombre || catKey,
    slug: slugify(product.nombre),
    product,
  }))
);

export function findEntry(catKey, slug) {
  return CATALOGO.find((entry) => entry.catKey === catKey && entry.slug === slug) || null;
}

export function categoriasConProductos() {
  return Object.keys(CATEGORIAS).filter((key) => (PRODUCTOS[key] || []).length > 0);
}

/* Precio/foto por variante: si el producto tiene variantes (tonos,
   tamaños) y la variante elegida trae su propia foto, se usa esa; si no,
   la foto general del producto. */
export function fotoDeItem(product, varianteNombre) {
  if (varianteNombre && product.variantes?.length) {
    const variante = product.variantes.find((v) => v.nombre === varianteNombre);
    if (variante?.imagen) return variante.imagen;
  }
  return product.imagen;
}
