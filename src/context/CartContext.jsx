import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { findEntry } from "../utils/catalog.js";

const CART_KEY = "darling_amely_cart_v1";
const CartContext = createContext(null);

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/* Carrito 100% client-side (sin backend), persistido en localStorage.
   Cada ítem es { catKey, slug, cantidad, variante }. No maneja precios:
   el catálogo no los muestra, el pedido se termina de cerrar por
   WhatsApp — ver src/utils/whatsapp.js. */
export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      /* localStorage no disponible (modo privado, etc.): el carrito no
         persiste entre visitas, pero el sitio sigue funcionando igual. */
    }
  }, [cart]);

  const addItem = useCallback((catKey, slug, cantidad = 1, variante) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (i) => i.catKey === catKey && i.slug === slug && i.variante === variante
      );
      if (idx !== -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], cantidad: next[idx].cantidad + cantidad };
        return next;
      }
      return [...prev, { catKey, slug, cantidad, variante }];
    });
    setIsOpen(true);
  }, []);

  const setItemQty = useCallback((catKey, slug, variante, cantidad) => {
    setCart((prev) => {
      if (cantidad <= 0) {
        return prev.filter(
          (i) => !(i.catKey === catKey && i.slug === slug && i.variante === variante)
        );
      }
      return prev.map((i) =>
        i.catKey === catKey && i.slug === slug && i.variante === variante
          ? { ...i, cantidad }
          : i
      );
    });
  }, []);

  const removeItem = useCallback(
    (catKey, slug, variante) => setItemQty(catKey, slug, variante, 0),
    [setItemQty]
  );

  const clearCart = useCallback(() => setCart([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = useMemo(() => cart.reduce((sum, i) => sum + i.cantidad, 0), [cart]);

  /* Ítems del carrito ya resueltos contra el catálogo (con el producto
     completo adentro), listos para pintar en el drawer. Si un producto
     fue sacado de products.js después de agregarlo al carrito, se
     descarta acá en vez de romper el render. */
  const items = useMemo(
    () =>
      cart
        .map((i) => {
          const entry = findEntry(i.catKey, i.slug);
          if (!entry) return null;
          return { ...i, product: entry.product, catNombre: entry.catNombre };
        })
        .filter(Boolean),
    [cart]
  );

  const value = {
    items,
    count,
    addItem,
    setItemQty,
    removeItem,
    clearCart,
    isOpen,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
