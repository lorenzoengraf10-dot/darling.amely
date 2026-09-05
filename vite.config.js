import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages sirve este sitio en /darling.amely/, no en la raíz del
// dominio — sin este "base", todos los archivos (JS, CSS) se pedirían mal
// y la página quedaría en blanco.
export default defineConfig({
  base: "/darling.amely/",
  plugins: [react()],
});
