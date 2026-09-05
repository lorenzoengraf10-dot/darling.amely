import { useCallback, useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CategoryNav from "./components/CategoryNav.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductModal from "./components/ProductModal.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import { findEntry } from "./utils/catalog.js";

function parseHash() {
  const m = /^#producto=([^:]+):(.+)$/.exec(location.hash);
  if (!m) return null;
  const [, catKey, slug] = m;
  return findEntry(catKey, slug) ? { catKey, slug } : null;
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeEntry, setActiveEntry] = useState(null);

  useEffect(() => {
    setActiveEntry(parseHash());
    function onHashChange() {
      setActiveEntry(parseHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const openProduct = useCallback((catKey, slug, varianteInicial) => {
    setActiveEntry({ catKey, slug, varianteInicial });
  }, []);

  const closeProduct = useCallback(() => setActiveEntry(null), []);

  const selectCategory = useCallback((key) => {
    setActiveCategory(key);
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <ToastProvider>
      <CartProvider>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">
          <Hero />
          <CategoryNav activeCategory={activeCategory} onChange={setActiveCategory} />
          <ProductGrid activeCategory={activeCategory} onOpenProduct={openProduct} />
          <Testimonials />
          <TrustStrip />
        </main>
        <Footer onSelectCategory={selectCategory} />
        <WhatsAppFloat />
        <CartDrawer />
        {activeEntry && (
          <ProductModal
            key={`${activeEntry.catKey}:${activeEntry.slug}`}
            catKey={activeEntry.catKey}
            slug={activeEntry.slug}
            varianteInicial={activeEntry.varianteInicial}
            onClose={closeProduct}
          />
        )}
      </CartProvider>
    </ToastProvider>
  );
}
