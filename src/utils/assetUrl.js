/* Las fotos de public/images/ se referencian en products.js con rutas
   simples ("/images/foo.jpg") para que sea fácil de editar sin saber
   programar. Pero como el sitio no vive en la raíz del dominio (GitHub
   Pages lo sirve en /darling.amely/), hay que anteponerle la base real —
   Vite no lo hace solo para rutas que están adentro de un string de JS,
   solo para las que él mismo procesa (imports, index.html). */
export function assetUrl(path) {
  if (!path) return path;
  return import.meta.env.BASE_URL + path.replace(/^\/+/, "");
}
