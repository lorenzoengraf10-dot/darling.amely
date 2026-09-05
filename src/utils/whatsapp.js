import { money } from "./format.js";

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
   tiene), la cantidad y el subtotal, más el total al final. */
export function mensajePedidoCarrito(nombreNegocio, items, total) {
  const lineas = [`Hola ${nombreNegocio}! Quiero hacer este pedido:`, ""];
  items.forEach((item, i) => {
    const nombreConVariante = item.variante ? `${item.nombre} (${item.variante})` : item.nombre;
    const subtotalTxt = item.precio != null ? money(item.precio * item.cantidad) : "a consultar";
    lineas.push(`${i + 1}. ${nombreConVariante} x${item.cantidad} — ${subtotalTxt}`);
  });
  lineas.push("");
  lineas.push(`Total: ${money(total)}`);
  lineas.push("");
  lineas.push("¡Gracias!");
  return lineas.join("\n");
}

export function mensajeConsultaGeneral(nombreNegocio) {
  return `Hola ${nombreNegocio}! Quiero hacer una consulta.`;
}
