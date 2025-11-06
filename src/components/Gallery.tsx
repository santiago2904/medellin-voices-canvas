import foto1 from "@/assets/Foto_1.jpg";
import foto2 from "@/assets/Foto_2.jpg";
import foto3 from "@/assets/Foto_3.jpg";
import foto4 from "@/assets/Foto_4.jpg";
import foto5 from "@/assets/Foto_5.jpg";
import foto6 from "@/assets/Foto_6.jpg";
import foto7 from "@/assets/Foto_7.jpg";
import foto8 from "@/assets/Foto_8.jpg";
import foto9 from "@/assets/Foto_9.jpg";
import foto10 from "@/assets/Foto_10.jpg";
import foto11 from "@/assets/Foto_11.jpg";

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-foreground relative z-10"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          GALERÍA
        </h2>

        {/* Collage Container */}
        <div className="relative mx-auto h-[800px] md:h-[554px]" style={{ maxWidth: '72rem' }}>
          
          {/* Primera fila - 4 fotos distribuidas */}
          {/* Foto 1 - Top left */}
          <div className="absolute top-4 left-12 w-44 h-52 md:w-52 md:h-60 rotate-2 hover:rotate-5 transition-all duration-500 hover:scale-105 z-10 shadow-2xl">
            <img 
              src={foto1} 
              alt="Urbano en Frecuencia - Foto 1" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 2 - Top center-left */}
          <div className="absolute top-8 left-1/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 z-15 shadow-2xl">
            <img 
              src={foto2} 
              alt="Urbano en Frecuencia - Foto 2" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 3 - Top center-right */}
          <div className="absolute top-2 left-2/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 rotate-4 hover:rotate-7 transition-all duration-500 hover:scale-105 z-20 shadow-2xl">
            <img 
              src={foto3} 
              alt="Urbano en Frecuencia - Foto 3" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 4 - Top right */}
          <div className="absolute top-6 right-12 w-44 h-52 md:w-52 md:h-60 -rotate-2 hover:-rotate-5 transition-all duration-500 hover:scale-105 z-25 shadow-2xl">
            <img 
              src={foto4} 
              alt="Urbano en Frecuencia - Foto 4" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Segunda fila - 3 fotos ligeramente superpuestas */}
          {/* Foto 5 - Left overlapping */}
          <div className="absolute top-32 left-20 w-44 h-52 md:w-52 md:h-60 rotate-5 hover:rotate-2 transition-all duration-500 hover:scale-105 z-30 shadow-2xl">
            <img 
              src={foto5} 
              alt="Urbano en Frecuencia - Foto 5" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 6 - Center */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 -rotate-4 hover:-rotate-1 transition-all duration-500 hover:scale-105 z-35 shadow-2xl">
            <img 
              src={foto6} 
              alt="Urbano en Frecuencia - Foto 6" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 7 - Right overlapping */}
          <div className="absolute top-28 right-20 w-44 h-52 md:w-52 md:h-60 rotate-3 hover:rotate-6 transition-all duration-500 hover:scale-105 z-40 shadow-2xl">
            <img 
              src={foto7} 
              alt="Urbano en Frecuencia - Foto 7" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Tercera fila - 4 fotos distribuidas */}
          {/* Foto 8 - Bottom left */}
          <div className="absolute bottom-4 left-8 w-44 h-52 md:w-52 md:h-60 -rotate-1 hover:rotate-2 transition-all duration-500 hover:scale-105 z-45 shadow-2xl">
            <img 
              src={foto8} 
              alt="Urbano en Frecuencia - Foto 8" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 9 - Bottom center-left */}
          <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 rotate-6 hover:rotate-3 transition-all duration-500 hover:scale-105 z-50 shadow-2xl">
            <img 
              src={foto9} 
              alt="Urbano en Frecuencia - Foto 9" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 10 - Bottom center-right */}
          <div className="absolute bottom-2 left-2/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 rotate-20 hover:-rotate-2 transition-all duration-500 hover:scale-105 z-55 shadow-2xl">
            <img 
              src={foto10} 
              alt="Urbano en Frecuencia - Foto 10" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 11 - Bottom right */}
          <div className="absolute bottom-6 right-8 w-44 h-52 md:w-52 md:h-60 rotate-4 hover:rotate-7 transition-all duration-500 hover:scale-105 z-60 shadow-2xl">
            <img 
              src={foto11} 
              alt="Urbano en Frecuencia - Foto 11" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Versiones móvil - solo las más importantes */}
          <div className="md:hidden absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-36 h-44 rotate-1 hover:rotate-4 transition-all duration-500 hover:scale-105 z-12 shadow-2xl">
            <img 
              src={foto6} 
              alt="Urbano en Frecuencia" 
              className="w-full h-full object-cover rounded-lg border-3 border-white"
            />
          </div>

          <div className="md:hidden absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-36 h-44 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 z-18 shadow-2xl">
            <img 
              src={foto8} 
              alt="Urbano en Frecuencia" 
              className="w-full h-full object-cover rounded-lg border-3 border-white"
            />
          </div>

        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-urban-red rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-urban-yellow rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-urban-orange rounded-full opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-urban-red rounded-full opacity-15"></div>
      </div>
    </section>
  );
};

export default Gallery;
