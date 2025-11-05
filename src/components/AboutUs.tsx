import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl md:text-7xl font-bold text-center mb-12 text-foreground"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          QUIÉNES SOMOS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold text-primary text-2xl">Urbano en Frecuencia</span> es un proyecto
              transmedia que explora la cultura urbana de Medellín a través de documentales, podcasts y contenido
              multimedia.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nos dedicamos a contar las historias de jóvenes cuyas vidas están profundamente conectadas con la
              música urbana, el hip hop, el trap y otros géneros que definen la identidad cultural de nuestra
              ciudad.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Desde las calles de Medellín hasta el mundo, documentamos cómo la música urbana se ha convertido en
              un movimiento cultural que trasciende fronteras y genera oportunidades.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <MapPin className="h-6 w-6" />
              <span className="text-xl font-semibold">Medellín, Colombia</span>
            </div>
          </div>

          <Card className="overflow-hidden border-primary/20">
            <div className="aspect-video bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127374.5939856548!2d-75.64087494999999!3d6.244203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Medellín"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
