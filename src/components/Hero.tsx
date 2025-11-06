import { Instagram, Facebook, Twitter } from "lucide-react";

// Función para convertir URL de Google Drive a enlace directo
const getGoogleDriveImageUrl = (fileId: string) => {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-urban-dark"
    >
      <div className="absolute inset-0 bg-urban-dark"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="animate-fade-in space-y-6">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              La Revolución
              <br />
              Urbana
            </h1>

            <div className="w-32 h-1 bg-urban-red"></div>

            <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
              historias reales de jóvenes cuyas vidas han sido moldeadas por
              estos ritmos urbanos, explorando cómo la música trasciende el
              entretenimiento para convertirse en filosofía de vida que
              permanece en su forma de vestir, hablar y relacionarse.
            </p>

            <div className="pt-4">
              <p className="text-white text-lg mb-3">@Urbanoenfrecuencia</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/urbanoenfrecuencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-urban-orange transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-urban-orange transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-urban-orange transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Logo */}
          <div className="animate-fade-in flex flex-col items-center justify-center">
            <img
              src={getGoogleDriveImageUrl("17Eonz38MncuniXoWR5X0rQ7GMJV86yfX")}
              alt="Urbano en Frecuencia Logo"
              className="w-full max-w-md mb-6"
            />
            <h2
              className="text-6xl md:text-7xl font-bold text-white text-center"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              URBANO
            </h2>
            <h3
              className="text-5xl md:text-6xl font-bold text-urban-yellow text-center"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              EN FRECUENCIA
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
