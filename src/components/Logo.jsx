import { useState } from "react";
import { CONFIG } from "../data/products.js";
import { assetUrl } from "../utils/assetUrl.js";

/* Si public/images/logo-darling-amely.png llegara a faltar (o el
   nombre del archivo cambia), cae al nombre de la marca en texto en
   vez de mostrar el ícono roto del navegador. */
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
