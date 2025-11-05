import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-urban-dark/95 backdrop-blur-md shadow-lg" : "bg-urban-dark/80"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("hero")}
              variant="ghost"
              className="text-urban-orange hover:text-urban-orange/80"
            >
              <span className="text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>🏠</span>
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("microdocumental")}
              className="px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full hover:bg-urban-orange/90 transition-colors uppercase text-sm"
            >
              Microdocumental
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full hover:bg-urban-orange/90 transition-colors uppercase text-sm"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("podcasts")}
              className="px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full hover:bg-urban-orange/90 transition-colors uppercase text-sm"
            >
              Podcast
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full hover:bg-urban-orange/90 transition-colors uppercase text-sm"
            >
              Story Map
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full hover:bg-urban-orange/90 transition-colors uppercase text-sm"
            >
              Gamificación
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full hover:bg-urban-orange/90 transition-colors uppercase text-sm whitespace-nowrap"
            >
              Realidad Aumentada
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-urban-orange"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 space-y-2">
            <button
              onClick={() => scrollToSection("microdocumental")}
              className="block w-full px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full uppercase text-sm"
            >
              Microdocumental
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full uppercase text-sm"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("podcasts")}
              className="block w-full px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full uppercase text-sm"
            >
              Podcast
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full px-6 py-2 bg-urban-orange text-urban-dark font-bold rounded-full uppercase text-sm"
            >
              Story Map
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
