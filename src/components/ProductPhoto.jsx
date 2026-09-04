import { useEffect, useState } from "react";

/* Devuelve la <img> o, si no hay ruta cargada todavía (variantes.imagen
   vacío) o el archivo no existe (foto real aún no subida a
   public/images/), un cartel de "Foto próximamente" — así ningún producto
   muestra el ícono roto del navegador mientras se completan las fotos
   reales. */
export default function ProductPhoto({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div className={`photo-placeholder ${className}`}>
        <span>Foto próximamente</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`photo-img ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
