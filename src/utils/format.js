const fmtMoneda = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export function money(n) {
  return fmtMoneda.format(n);
}
