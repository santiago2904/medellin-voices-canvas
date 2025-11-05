import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-urban-dark/80 via-urban-dark/60 to-urban-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-primary drop-shadow-2xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            La Revolución Urbana
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Historias reales de jóvenes cuyas vidas han sido moldeadas por estos ritmos urbanos, explorando cómo la
            música trasciende el entretenimiento para convertirse en filosofía de vida que permea su forma de vestir,
            hablar y relacionarse.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent text-lg md:text-xl">
            <span className="text-2xl">@</span>
            <span className="font-semibold">Urbanoenfrecuencia</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
