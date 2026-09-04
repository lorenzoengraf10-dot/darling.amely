export function waLink(numero, texto) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

/* Mensaje precargado para "Consultar por WhatsApp" en la tarjeta y en la
   ficha de un solo producto. */
export function mensajeConsultaProducto(nombreNegocio, product, varianteNombre) {
  let texto = `Hola ${nombreNegocio}! Quiero consultar por: ${product.nombre}`;
  if (varianteNombre) texto += ` (${varianteNombre})`;
  return texto;
}

/* Mensaje agregado del carrito: una línea por producto (con su tono, si
   tiene) y la cantidad. No incluye precios — el catálogo no los muestra,
   se coordinan directo por WhatsApp. */
export function mensajePedidoCarrito(nombreNegocio, items) {
  const lineas = [`Hola ${nombreNegocio}! Quiero consultar por estos productos:`, ""];
  items.forEach((item, i) => {
    const nombreConVariante = item.variante ? `${item.nombre} (${item.variante})` : item.nombre;
    lineas.push(`${i + 1}. ${nombreConVariante} x${item.cantidad}`);
  });
  lineas.push("");
  lineas.push("¡Gracias!");
  return lineas.join("\n");
}

export function mensajeConsultaGeneral(nombreNegocio) {
  return `Hola ${nombreNegocio}! Quiero hacer una consulta.`;
}
