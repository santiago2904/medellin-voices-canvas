import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import podcast1 from "@/assets/podcast-1.jpg";
import podcast2 from "@/assets/podcast-2.jpg";
import podcast3 from "@/assets/podcast-3.jpg";
import podcast4 from "@/assets/podcast-4.jpg";
import podcast5 from "@/assets/podcast-5.jpg";
import podcast6 from "@/assets/podcast-6.jpg";

const podcasts = [
  {
    id: 1,
    title: "Construyendo Imperios Musicales",
    image: podcast1,
  },
  {
    id: 2,
    title: "Secretos de Beats-Trap",
    image: podcast2,
  },
  {
    id: 3,
    title: "Drill del Valle al Mundo",
    image: podcast3,
  },
  {
    id: 4,
    title: "Vida de Hellcat Urbana",
    image: podcast4,
  },
  {
    id: 5,
    title: "De las Calles a Hits en Ocean",
    image: podcast5,
  },
  {
    id: 6,
    title: "Venezuela, Donde el Sueño Nunca se Apagó",
    image: podcast6,
  },
];

const Podcasts = () => {
  return (
    <section id="podcasts" className="py-20 bg-urban-dark">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl md:text-7xl font-bold text-center mb-12 text-primary"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          PODCASTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {podcasts.map((podcast) => (
            <Card
              key={podcast.id}
              className="bg-card border-primary/20 overflow-hidden hover-scale group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-urban-dark/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  #{podcast.id} {podcast.title}
                </h3>
                <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
                  Escuchar Ahora
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
