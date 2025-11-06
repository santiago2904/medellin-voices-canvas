import { Card } from "@/components/ui/card";

// Video de microdocumental - configurable con ID de YouTube
// Para obtener el ID de YouTube: en la URL de YouTube (ej: https://www.youtube.com/watch?v=dQw4w9WgXcQ)
// el ID es la parte después de "v=" (en este ejemplo: dQw4w9WgXcQ)
const microdocumental = {
  title: "Microdocuemntal",
  youtubeId: "oTBY4pIyv9M", // Reemplazar con el ID real de YouTube del microdocumental
  description: "Microdocumental completo sobre las voces urbanas de Medellín",
};

const VideoSlider = () => {

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
              {/* Video de YouTube embebido */}
              <iframe
                src={`https://www.youtube.com/embed/${microdocumental.youtubeId}`}
                title={microdocumental.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
            <div className="p-4 bg-urban-dark border-t border-urban-orange">
              <div className="text-center">
                <h3 className="text-xl text-white font-normal" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {microdocumental.title}
                </h3>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
