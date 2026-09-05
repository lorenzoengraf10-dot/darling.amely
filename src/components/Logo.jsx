import { useState } from "react";
import { CONFIG } from "../data/products.js";
import { assetUrl } from "../utils/assetUrl.js";

/* TODO: confirmar con la clienta — reemplazar por el isotipo/wordmark real
   (la foto del logo no llegó adjunta a esta sesión). En cuanto se suba
   public/images/logo-darling-amely.png, este componente lo usa solo —
   no hace falta tocar código. Mientras tanto muestra el nombre de la
   marca en texto, con la tipografía de la marca. */
export default function Logo({ className = "" }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return <span className={`brand-wordmark ${className}`}>{CONFIG.nombre}</span>;
  }

  return (
    <img
      src={assetUrl("/images/logo-darling-amely.png")}
      alt={CONFIG.nombre}
      className={`brand-logo-img ${className}`}
      width="48"
      height="48"
      onError={() => setImgFailed(true)}
    />
  );
}
