# Fotos que faltan subir acá

Las 4 fotos de producto, la foto del logo y la captura de Instagram con la
paleta de colores **no llegaron adjuntas a esta sesión** — por eso el sitio
está armado con datos de relleno marcados `// TODO: confirmar con la
clienta`. Ver la nota completa en la respuesta de esta sesión y en el
`README.md` de la raíz del proyecto.

Cuando tengas las fotos reales, subilas acá con estos nombres exactos (o
cambiá las rutas en `src/data/products.js` si preferís otros nombres):

```
public/images/logo-darling-amely.png   → logo / isotipo de la marca
public/images/producto-1.jpg           → foto 1 (con nombre, categoría, descripción)
public/images/producto-2.jpg           → foto 2
public/images/producto-3.jpg           → foto 3
public/images/producto-4.jpg           → foto 4
```

Si algún producto tiene más de una foto (por ejemplo, distintos tonos),
agregá archivos como `producto-1-tono-nude.jpg` y enlazalos desde el campo
`imagen` de cada variante en `src/data/products.js`.

Ni bien subas las fotos reales, avisá para reemplazar los `// TODO` de
`src/data/products.js` (nombre, categoría, descripción y variantes) por el
texto tal cual aparece en cada foto, y los colores de
`src/styles/index.css` por los extraídos de la captura de Instagram.
