/* ============================================================
   PRODUCTS.JS — Darling Amely
   ============================================================

   ESTE ES EL ÚNICO ARCHIVO QUE NECESITÁS TOCAR PARA:
   - Cambiar el WhatsApp, Instagram, ciudad o datos del negocio.
   - Agregar, editar o borrar productos.
   - Agregar o sacar categorías y subcategorías.

   No hace falta saber programar. Solo hay que respetar el formato
   (las comas, las comillas, las llaves { }). Si algo se rompe después
   de editar, revisá que no falte una coma "," entre un producto y el
   siguiente.

   ----------------------------------------------------------------
   ⚠️  ESTADO ACTUAL: DATOS DE RELLENO (demo con 4 productos)
   ----------------------------------------------------------------
   Las 4 fotos de producto, la foto del logo y la captura de Instagram
   con la paleta de colores de la marca NO llegaron adjuntas a la sesión
   en la que se armó este sitio. Para no inventar nombres, descripciones,
   tonos ni colores que no estaban confirmados, cada dato de producto que
   debía salir de una foto quedó marcado "TODO: confirmar con la clienta".

   Para completar el sitio con los datos reales:
   1. Subí las 4 fotos + el logo a public/images/ (ver public/images/LEEME.md).
   2. Reemplazá cada "TODO: confirmar con la clienta" de PRODUCTOS acá
      abajo por el texto tal cual aparece en la foto correspondiente
      (nombre, categoría, descripción, variantes de tono/tamaño).
   3. Actualizá la paleta de colores en src/styles/index.css con los
      colores reales extraídos de la captura de Instagram.

   ----------------------------------------------------------------
   CÓMO AGREGAR UN PRODUCTO NUEVO (una vez cargados los 4 reales)
   ----------------------------------------------------------------
   1. Copiá un producto que ya esté cargado (desde la { hasta la }, con
      la coma al final) y pegalo antes del corchete de cierre "]" de la
      categoría que corresponda dentro de PRODUCTOS.
   2. Cambiá nombre, categoria, subcategoria, descripcion y modoDeUso.
   3. Para la foto: subí el archivo a public/images/ y poné acá la ruta,
      por ejemplo: imagen: "/images/mi-foto.jpg"
   4. Si el mismo producto viene en más de un tono/tamaño, agregá
      "variantes" con una entrada por opción:
      variantes: [
        { nombre: "Tono Nude", imagen: "/images/mi-foto-nude.jpg" },
        { nombre: "Tono Rosa", imagen: "/images/mi-foto-rosa.jpg" },
      ]
      (el "imagen" de cada variante es opcional — si no la ponés, se usa
      la foto general del producto).

   Los 140+ productos que hoy están cargados en Tiendanube se migran
   agregando más objetos acá, categoría por categoría, con este mismo
   formato.
   ============================================================ */


/* ----------------------------------------------------------------
   1. CONFIGURACIÓN GENERAL DEL NEGOCIO
   ---------------------------------------------------------------- */
export const CONFIG = {
  nombre: "Darling Amely",

  // Frase corta de marca para el Hero. No vino un slogan definido por la
  // clienta — este es un texto propuesto, fácil de cambiar acá.
  tagline: "Tu beauty, a un mensaje de distancia",

  rubro: "Make up y skincare",

  // Número real, confirmado en el prompt (2920 298760, mismo código de
  // área que Viedma/Las Heras). Formato para WhatsApp: 549 + área + número.
  whatsapp: "5492920298760",
  whatsappDisplay: "2920 298760",
  whatsappVisible: true,

  // TODO: confirmar con la clienta — usuario de Instagram. La captura de
  // pantalla del perfil no llegó adjunta a esta sesión, así que no hay
  // usuario para enlazar todavía. Dejalo vacío ("") oculta el botón.
  instagram: "",

  direccion: "Las Heras",
  ciudad: "Viedma",
  provincia: "Río Negro",

  envioTodoElPais: true,
};


/* ----------------------------------------------------------------
   2. CATEGORÍAS
   Definidas a partir del rubro dado en el prompt (make up y skincare).
   TODO: confirmar con la clienta — ajustar nombres/agregar subcategorías
   según lo que realmente digan las 4 fotos de producto.
   ---------------------------------------------------------------- */
export const CATEGORIAS = {
  maquillaje: {
    nombre: "Maquillaje",
  },
  skincare: {
    nombre: "Skincare",
  },
};


/* ----------------------------------------------------------------
   3. CATÁLOGO DE PRODUCTOS (demo con 4 productos reales)
   Organizado por categoría. Cada categoría es un array de productos.

   Todos los campos de contenido de estos 4 productos están marcados
   TODO porque las fotos con nombre/categoría/descripción/tonos no
   llegaron adjuntas a esta sesión — ver la nota al principio del
   archivo. La estructura (nombre, categoria, subcategoria, descripcion,
   imagen, variantes) es la que pidió el prompt original.
   ---------------------------------------------------------------- */
export const PRODUCTOS = {

  maquillaje: [
    {
      nombre: "TODO: confirmar con la clienta (nombre — foto 1)",
      categoria: "maquillaje",
      subcategoria: "", // TODO: confirmar con la clienta
      descripcion: "TODO: confirmar con la clienta — pegar acá la descripción de 2-3 líneas tal cual figura en la foto 1.",
      modoDeUso: "", // TODO: confirmar con la clienta, si la foto lo indica
      imagen: "/images/producto-1.jpg",
      galeria: [],
      variantes: [], // TODO: confirmar con la clienta — cargar tonos/tamaños si la foto 1 los muestra
    },
    {
      nombre: "TODO: confirmar con la clienta (nombre — foto 2)",
      categoria: "maquillaje",
      subcategoria: "", // TODO: confirmar con la clienta
      descripcion: "TODO: confirmar con la clienta — pegar acá la descripción de 2-3 líneas tal cual figura en la foto 2.",
      modoDeUso: "", // TODO: confirmar con la clienta, si la foto lo indica
      imagen: "/images/producto-2.jpg",
      galeria: [],
      variantes: [], // TODO: confirmar con la clienta — cargar tonos/tamaños si la foto 2 los muestra
    },
  ],

  skincare: [
    {
      nombre: "TODO: confirmar con la clienta (nombre — foto 3)",
      categoria: "skincare",
      subcategoria: "", // TODO: confirmar con la clienta
      descripcion: "TODO: confirmar con la clienta — pegar acá la descripción de 2-3 líneas tal cual figura en la foto 3.",
      modoDeUso: "", // TODO: confirmar con la clienta — modo de uso, si la foto lo indica
      imagen: "/images/producto-3.jpg",
      galeria: [],
      variantes: [], // TODO: confirmar con la clienta — cargar tamaños si la foto 3 los muestra
    },
    {
      nombre: "TODO: confirmar con la clienta (nombre — foto 4)",
      categoria: "skincare",
      subcategoria: "", // TODO: confirmar con la clienta
      descripcion: "TODO: confirmar con la clienta — pegar acá la descripción de 2-3 líneas tal cual figura en la foto 4.",
      modoDeUso: "", // TODO: confirmar con la clienta — modo de uso, si la foto lo indica
      imagen: "/images/producto-4.jpg",
      galeria: [],
      variantes: [], // TODO: confirmar con la clienta — cargar tamaños si la foto 4 los muestra
    },
  ],

};
