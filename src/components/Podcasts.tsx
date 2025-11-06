import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AudioPlayer from "@/components/AudioPlayer";
import podcast1 from "@/assets/podcast-1.jpg";
import podcast2 from "@/assets/podcast-2.jpg";
import podcast3 from "@/assets/podcast-3.jpg";
import podcast4 from "@/assets/podcast-4.jpg";
import podcast5 from "@/assets/podcast-5.jpg";
import podcast6 from "@/assets/podcast-6.jpg";
// Import audio files
import podcast1Audio from "@/assets/podcast-1.mp3";
import podcast2Audio from "@/assets/podcast-2.mp3";
import podcast3Audio from "@/assets/podcast-3.mp3";
import podcast4Audio from "@/assets/podcast-4.mp3";
import podcast5Audio from "@/assets/podcast-5.mp3";
import podcast6Audio from "@/assets/podcast-6.mp3"; 

const podcasts = [
  {
    id: 1,
    title: "Construyendo Imperios Musicales",
    image: podcast1,
    audioSrc: podcast1Audio,
    hasAudio: true,
  },
  {
    id: 2,
    title: "Secretos de Beats-Trap",
    image: podcast2,
    audioSrc: podcast2Audio,
    hasAudio: true,
  },
  {
    id: 3,
    title: "Drill del Valle al Mundo",
    image: podcast3,
    audioSrc: podcast3Audio,
    hasAudio: true,
  },
  {
    id: 4,
    title: "Vida de Hellcat Urbana",
    image: podcast4,
    audioSrc: podcast4Audio,
    hasAudio: true,
  },
  {
    id: 5,
    title: "De las Calles a Hits en Ocean",
    image: podcast5,
    audioSrc: podcast5Audio,
    hasAudio: true,
  },
  {
    id: 6,
    title: "Venezuela, Donde el Sueño Nunca se Apagó",
    image: podcast6,
    audioSrc: podcast6Audio,
    hasAudio: true,
  },
];

const Podcasts = () => {
  const [selectedPodcast, setSelectedPodcast] = useState<typeof podcasts[0] | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlayPodcast = (podcast: typeof podcasts[0]) => {
    console.log("Opening podcast:", podcast.title);
    console.log("Audio source:", podcast.audioSrc);
    setSelectedPodcast(podcast);
    setIsPlayerOpen(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setSelectedPodcast(null);
  };

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
                {podcast.hasAudio ? (
                  <Button 
                    variant="default" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => handlePlayPodcast(podcast)}
                  >
                    Escuchar Ahora
                  </Button>
                ) : (
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    disabled
                  >
                    Próximamente
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Audio Player Modal */}
        {selectedPodcast && (
          <AudioPlayer
            isOpen={isPlayerOpen}
            onClose={handleClosePlayer}
            podcast={selectedPodcast}
          />
        )}
      </div>
    </section>
  );
};

export default Podcasts;
