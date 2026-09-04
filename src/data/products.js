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
   ⚠️  ESTADO ACTUAL
   ----------------------------------------------------------------
   Se cargaron los 5 productos reales a partir de las fotos recibidas
   (nombre, marca y descripción tal como se leen en cada foto/envase).
   Todavía faltan, porque no llegaron adjuntas a ninguna sesión:
   - El logo de la marca (public/images/LEEME.md) — el sitio muestra
     un wordmark de texto mientras tanto.
   - La captura de Instagram con la paleta de colores real — la paleta
     de src/styles/index.css sigue siendo provisoria (ver el comentario
     al principio de ese archivo).
   - El usuario de Instagram (CONFIG.instagram, más abajo).

   Quedan marcados "TODO: confirmar con la clienta" un puñado de datos
   puntuales que no se leían con claridad en la foto (ver cada producto).

   ----------------------------------------------------------------
   CÓMO AGREGAR UN PRODUCTO NUEVO
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
   Definidas a partir del rubro dado en el prompt (make up y skincare)
   y confirmadas con los 5 productos reales.
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
   3. CATÁLOGO DE PRODUCTOS (5 productos reales)
   Organizado por categoría. Cada categoría es un array de productos.
   ---------------------------------------------------------------- */
export const PRODUCTOS = {

  maquillaje: [
    {
      // Único producto de los 5 con texto de marca ya escrito sobre la
      // foto ("Lip combo Dulce de leche"), tal cual pedía el prompt.
      nombre: "Lip Combo Dulce de Leche",
      categoria: "maquillaje",
      subcategoria: "Labios",
      descripcion: "Combo de labios PINK21: labial líquido The Lip Glaze + delineador Lip Liner Matte (tono 07), en tono dulce de leche.",
      modoDeUso: "",
      imagen: "/images/producto-3-lip-combo-dulce-de-leche.jpg",
      galeria: [],
      variantes: [],
    },
    {
      nombre: "Last Touch Waterproof Powder",
      categoria: "maquillaje",
      subcategoria: "Rostro",
      descripcion: "Polvo compacto matificante resistente al agua, línea Last Touch de PINK21.",
      modoDeUso: "",
      imagen: "/images/producto-2-last-touch-pink21.jpg",
      galeria: [],
      // TODO: confirmar con la clienta — en la foto se ven 2 unidades del
      // compacto con el polvo levemente bitono; no se leen nombres de tono
      // en el envase. Si son 2 tonos distintos, cargarlos acá como
      // variantes (ej. { nombre: "Claro", imagen: "..." }).
      variantes: [],
    },
    {
      // TODO: confirmar con la clienta — en el envase solo se lee "Gege
      // Bear" y "Lucky"; no hay ningún texto que diga qué tipo de producto
      // es (polvo, rubor, iluminador, bálsamo). Confirmar antes de publicar.
      nombre: "Gege Bear",
      categoria: "maquillaje",
      subcategoria: "Rostro",
      descripcion: "Compacto redondo ilustrado de la línea Gege Bear (osito, fresa, corazón, huellitas) con el detalle \"Lucky\".",
      modoDeUso: "",
      imagen: "/images/producto-1-gege-bear.jpg",
      galeria: [],
      variantes: [],
    },
    {
      nombre: "Style Brow",
      categoria: "maquillaje",
      subcategoria: "Cejas",
      descripcion: "Estuche para peinar cejas de la línea Style Brow de TEI, con cepillo angulado incluido. Presentación edición sandía.",
      modoDeUso: "",
      imagen: "/images/producto-5-style-tei-brow.jpg",
      galeria: [],
      variantes: [],
    },
  ],

  skincare: [
    {
      // TODO: confirmar con la clienta — el envase no trae un nombre
      // comercial propio, solo la marca TEI + ingredientes (Candelilla Wax,
      // Petrolatum) que indican que es un bálsamo labial. Confirmar si
      // tiene un nombre/sabor específico.
      nombre: "Bálsamo Labial Osito (TEI)",
      categoria: "skincare",
      subcategoria: "Labios",
      descripcion: "Bálsamo labial en envase con forma de osito, marca TEI.",
      modoDeUso: "",
      imagen: "/images/producto-4-tei-bear-lip-balm.jpg",
      galeria: [],
      // TODO: confirmar con la clienta — la foto muestra 3 unidades que
      // podrían ser 3 sabores/tonos distintos; el envase no trae una
      // etiqueta que los distinga. Si son variantes, cargarlas acá.
      variantes: [],
    },
  ],

};
