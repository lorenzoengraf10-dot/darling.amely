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

/* Precio real de un producto según el tono/tamaño elegido: si esa
   variante puntual trae su propio "precio", se usa ese; si no, el precio
   general del producto. */
export function precioDeItem(product, varianteNombre) {
  if (varianteNombre && product.variantes?.length) {
    const variante = product.variantes.find((v) => v.nombre === varianteNombre);
    if (variante?.precio != null) return variante.precio;
  }
  return product.precio;
}

/* Para la tarjeta del catálogo, antes de elegir un tono: el precio más
   bajo entre las variantes (o el precio general si ninguna variante trae
   uno propio). */
export function precioDesde(product) {
  if (!product.variantes?.length) return product.precio;
  const precios = product.variantes
    .map((v) => (v.precio != null ? v.precio : product.precio))
    .filter((p) => p != null);
  return precios.length ? Math.min(...precios) : product.precio;
}

export function variantesConPrecioDistinto(product) {
  if (!product.variantes?.length) return false;
  const precios = product.variantes.map((v) => (v.precio != null ? v.precio : product.precio));
  return precios.some((p) => p !== precios[0]);
}
