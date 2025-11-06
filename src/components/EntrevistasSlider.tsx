import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Videos de entrevistas - configurable con IDs de YouTube
// Para obtener el ID de YouTube: en la URL de YouTube (ej: https://www.youtube.com/watch?v=dQw4w9WgXcQ)



const entrevistas = [
  {
    id: 1,
    title: "Construyendo Imperios Musicales",
    youtubeId: "4UWEUEOKFHs",
  },
  {
    id: 2,
    title: "Secretos de Beats-Trap",
    youtubeId: "DozSaqcg-qM",
  },
  {
    id: 3,
    title: "Drill del Valle al Mundo",
    youtubeId: "NwyXWbifGIs",
  },
  {
    id: 4,
    title: "Vida de Hellcat Urbana",
    youtubeId: "Yjl2z0qS6m4",
  },
  {
    id: 5,
    title: "De las Calles a Hits en Ocean",
    youtubeId: "yafTK_wRctI",
  },
  {
    id: 6,
    title: "Venezuela, Donde el Sueño Nunca se Apagó",
    youtubeId: "53Kk-455g70",
  },
];

const EntrevistasSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? entrevistas.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === entrevistas.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-urban-dark">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-urban-orange uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Entrevistas: Urbano en Frecuencia
        </h2>
        
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Conoce las historias detrás de la música urbana de Medellín a través de entrevistas exclusivas
        </p>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-black border-urban-orange overflow-hidden">
            <div className="relative aspect-video bg-black">
              {/* Video de YouTube embebido */}
              <iframe
                key={entrevistas[currentIndex].id}
                src={`https://www.youtube.com/embed/${entrevistas[currentIndex].youtubeId}`}
                title={entrevistas[currentIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
            <div className="p-4 bg-urban-dark border-t border-urban-orange">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl text-white font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {currentIndex + 1} de {entrevistas.length}
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <h3 className="text-xl text-white font-normal" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {entrevistas[currentIndex].title}
                  </h3>
                </div>
                <div className="w-20"></div>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-between mt-6">
            <Button
              onClick={goToPrevious}
              size="lg"
              className="bg-urban-orange text-urban-dark font-bold hover:bg-urban-orange/90 uppercase"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Anterior
            </Button>

            <div className="flex gap-2">
              {entrevistas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-urban-orange w-8" : "bg-muted hover:bg-urban-orange/50"
                  }`}
                  aria-label={`Ir a la entrevista ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              size="lg"
              className="bg-urban-orange text-urban-dark font-bold hover:bg-urban-orange/90 uppercase"
            >
              Siguiente
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntrevistasSlider;