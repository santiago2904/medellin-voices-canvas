import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const videos = [
  {
    id: 1,
    title: "Voces Urbanas - Episodio 1",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Voces Urbanas - Episodio 2",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Voces Urbanas - Episodio 3",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="microdocumental" className="py-20 bg-urban-dark">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl md:text-7xl font-bold text-center mb-4 text-primary"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          MICRODOCUMENTAL: LAS VOCES URBANAS DE MEDELLÍN
        </h2>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-card border-primary/20 overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src={videos[currentIndex].embedUrl}
                title={videos[currentIndex].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>

          <div className="flex items-center justify-between mt-6">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Anterior
            </Button>

            <div className="flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Ir al video ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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

export default VideoSlider;
