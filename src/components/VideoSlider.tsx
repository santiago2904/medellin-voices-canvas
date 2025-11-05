import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Importar videos locales cuando estén disponibles
// import video1 from "@/assets/video1.mp4";
// import video2 from "@/assets/video2.mp4";
// import video3 from "@/assets/video3.mp4";

const videos = [
  {
    id: 1,
    title: "Voces Urbanas - Episodio 1",
    // Placeholder - reemplazar con: videoUrl: video1
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    title: "Voces Urbanas - Episodio 2",
    // Placeholder - reemplazar con: videoUrl: video2
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    title: "Voces Urbanas - Episodio 3",
    // Placeholder - reemplazar con: videoUrl: video3
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-urban-orange uppercase"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Microdocumental: Las Voces Urbanas de Medellín
        </h2>

        <div className="max-w-5xl mx-auto mt-12">
          <Card className="bg-black border-urban-orange overflow-hidden">
            <div className="relative aspect-video bg-black">
              <video
                key={videos[currentIndex].id}
                controls
                className="w-full h-full"
                autoPlay
              >
                <source src={videos[currentIndex].videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <div className="p-4 bg-urban-dark border-t border-urban-orange">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {videos[currentIndex].title}
              </h3>
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
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-urban-orange w-8" : "bg-muted hover:bg-urban-orange/50"
                  }`}
                  aria-label={`Ir al video ${index + 1}`}
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

export default VideoSlider;
