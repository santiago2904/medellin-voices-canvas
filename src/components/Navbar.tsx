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
        isScrolled ? "bg-urban-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              URBANO EN FRECUENCIA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("microdocumental")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Microdocumental
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("podcasts")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Podcasts
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Nosotros
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("microdocumental")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Microdocumental
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("podcasts")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Podcasts
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Nosotros
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
