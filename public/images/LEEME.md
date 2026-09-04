# Fotos

## Ya cargadas (10 productos)

```
producto-1-gege-bear.jpg
producto-2-last-touch-pink21.jpg
producto-3-lip-combo-dulce-de-leche.jpg
producto-4-tei-bear-lip-balm.jpg
producto-5-style-tei-brow.jpg
producto-6-iman-noble-lip-stick.jpg
producto-7-pink-fix-eyebrow-gel.jpg
producto-8-cepillo-paddle.jpg
producto-9-labial-liquido-mate.jpg
producto-10-banana-loose-powder.jpg
```

## Todavía falta

- `logo-darling-amely.png` — el logo/isotipo de la marca. Mientras no
  esté, el sitio muestra el nombre "Darling Amely" en texto estilizado
  en vez del logo (fallback automático — con solo subir el archivo con
  ese nombre exacto, aparece solo, sin tocar código).
- La captura del perfil de Instagram con la paleta de colores de la
  marca, para reemplazar los colores provisorios de
  `src/styles/index.css` (están marcados con un TODO grande al
  principio del archivo).
- El usuario de Instagram, para cargarlo en `CONFIG.instagram` de
  `src/data/products.js` y que aparezca el botón en el footer.

## Datos puntuales a confirmar

`src/data/products.js` tiene un par de `TODO: confirmar con la clienta`
puntuales (no genéricos) donde el envase no aclaraba algo:

- **Gege Bear**: no se lee en el envase qué tipo de producto es
  (¿polvo? ¿rubor? ¿iluminador?), solo la marca y "Lucky".
- **Last Touch Waterproof Powder**: se ven 2 unidades del compacto —
  no está claro si son 2 tonos distintos o la misma unidad.
- **Bálsamo Labial Osito (TEI)**: el envase no trae un nombre propio
  (solo la marca TEI), y se ven 3 unidades que podrían ser 3
  sabores/tonos sin etiqueta que los distinga.
- **Lápiz Labial Iman of Noble**: se ven 2 estuches (blanco/menta y
  azul) sin nombre de tono legible — los variantes están puestos por
  color de tapa, a confirmar.
- **Pink Fix Eyebrow Gel**: se ven 2 tamaños (grande y mini), no está
  claro si es el mismo producto en 2 presentaciones.
- **Labial Líquido Mate**: 3 tonos sin nombre legible — puestos como
  "Vino", "Ciruela" y "Nude" por el color del líquido, a confirmar.
- **Cepillo Paddle**: no tiene marca ni nombre visible; se agregó una
  categoría nueva "Accesorios" porque no es maquillaje ni skincare — si
  preferís otro nombre de categoría, es un cambio de una línea en
  `CATEGORIAS` dentro de `src/data/products.js`.

Si tenés esos datos, pasámelos y los cargo.
