import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl md:text-7xl font-bold text-center mb-12 text-foreground"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          GALERÍA
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* First column */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery1} alt="Cultura urbana en las calles de Medellín" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery2} alt="Estudio de grabación profesional" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Second column */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery3} alt="Arte urbano en Medellín" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery4} alt="Joven escuchando música urbana" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Third column */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery5} alt="Producción musical moderna" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery6} alt="Medellín de noche" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Fourth column - repeat for better layout */}
          <div className="hidden md:block space-y-4">
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery1} alt="Cultura urbana" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg hover-scale">
              <img src={gallery3} alt="Graffiti urbano" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
