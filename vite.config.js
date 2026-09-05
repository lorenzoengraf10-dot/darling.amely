import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages sirve este sitio en /darling.amely/, no en la raíz del
// dominio — sin este "base", todos los archivos (JS, CSS) se pedirían mal
// y la página quedaría en blanco.
export default defineConfig({
  base: "/darling.amely/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Nombres de archivo fijos (sin hash). Si el celular de alguien
        // guardó en caché el HTML de una versión anterior del sitio, los
        // archivos que ese HTML pide siguen existiendo después del
        // próximo deploy (se pisan con el contenido nuevo en vez de
        // desaparecer), así que no se queda con la pantalla en blanco.
        entryFileNames: "assets/app.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});
