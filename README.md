# Darling Amely — Catálogo

Sitio de catálogo de Darling Amely (make up y skincare, Las Heras, Viedma).
Sin backend, sin checkout ni pasarela de pago — el pedido se arma en el
sitio (con carrito) y se termina de coordinar por WhatsApp. Deploy en
Vercel.

Esta es una **demo con 4 productos** para mostrar el contraste contra la
tienda actual en Tiendanube (fotos rotas, plantilla genérica). La idea es
migrar el catálogo completo (140+ productos) a esta misma estructura.

## ⚠️ Estado actual: faltan los datos reales

Las 4 fotos de producto, la foto del logo y la captura de Instagram con la
paleta de colores de la marca **no llegaron adjuntas a la sesión** en la
que se armó este sitio, así que:

- Los 4 productos de `src/data/products.js` tienen nombre, categoría,
  descripción y variantes marcados `TODO: confirmar con la clienta` — no
  se inventó ningún dato de producto.
- El logo se muestra como texto ("Darling Amely" estilizado) hasta que se
  suba el archivo real — ver `public/images/LEEME.md`.
- Los colores de `src/styles/index.css` son una paleta PROVISORIA (tono
  femenino/luminoso pedido, pero no extraída de ninguna captura real) —
  está marcada con un comentario `TODO` grande al principio del archivo.
- El usuario de Instagram no está cargado (`CONFIG.instagram` vacío en
  `src/data/products.js`), así que el botón queda oculto en el footer.

Para completar el sitio con los datos reales, ver el punto 1 de
"Cómo cargar los datos reales" más abajo.

## Estructura

```
index.html                    Entry HTML de Vite
src/
  data/products.js            Datos del negocio y del catálogo — EDITAR ACÁ
  context/                    Carrito (CartContext) y notificaciones (ToastContext)
  utils/                      Helpers: catálogo, slugs, mensajes de WhatsApp
  components/                 Header, Hero, grilla, ficha de producto, carrito, footer, etc.
  styles/index.css            Toda la hoja de estilos (paleta, tipografía, layout)
public/images/                Fotos de producto y logo
```

## Cómo cargar los datos reales

1. Subí las 4 fotos de producto + el logo a `public/images/` (nombres
   sugeridos en `public/images/LEEME.md`).
2. Abrí `src/data/products.js` y reemplazá cada `TODO: confirmar con la
   clienta` por el texto tal cual aparece en la foto correspondiente
   (nombre, categoría, descripción, variantes de tono/tamaño). El archivo
   tiene instrucciones en español arriba de todo.
3. Cargá el usuario de Instagram en `CONFIG.instagram` (sin la `@`).
4. Una vez que tengas la captura de Instagram con la paleta de la marca,
   reemplazá los valores de `:root` en `src/styles/index.css` (están
   agrupados arriba de todo, con un comentario que explica cada uno).

Los 140+ productos de Tiendanube se migran agregando más objetos dentro
de `PRODUCTOS` en `src/data/products.js`, categoría por categoría, con el
mismo formato que los 4 de la demo.

## Correr el sitio en tu computadora

Necesitás [Node.js](https://nodejs.org/) instalado. Después:

```bash
npm install
npm run dev
```

Y abrís la URL que muestra la terminal (por defecto
`http://localhost:5173`).

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para deployar. `npm run preview` la sirve
localmente para revisarla antes de subir.

## Deploy en Vercel

Importar el repositorio en Vercel — detecta Vite automáticamente
(`npm run build`, carpeta de salida `dist`). No hace falta configurar
variables de entorno: no hay backend ni claves.

## Carrito y WhatsApp

El carrito es 100% del lado del navegador (persistido en `localStorage`,
sin servidor). No muestra precios — el catálogo no los carga, se
consultan y coordinan directo por WhatsApp. Al enviar el pedido se arma
un mensaje de WhatsApp con la lista de productos, tono/variante y
cantidad elegida.
