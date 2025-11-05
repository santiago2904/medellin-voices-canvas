import { Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-urban-dark py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3
              className="text-3xl font-bold text-primary mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              URBANO EN FRECUENCIA
            </h3>
            <p className="text-muted-foreground">
              La revolución urbana de Medellín
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com/urbanoenfrecuencia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Spotify"
            >
              <Music className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Urbano en Frecuencia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
