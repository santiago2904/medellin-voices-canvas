// Función para convertir URL de Google Drive a enlace directo
// Nota: Los archivos de Google Drive deben estar configurados como públicos
// (Compartir > Cualquier persona con el enlace)
const getGoogleDriveImageUrl = (fileId: string) => {
  // Usar formato de thumbnail que funciona mejor para archivos públicos
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
};

// URLs de las imágenes de Google Drive
const fotos = {
  foto1: getGoogleDriveImageUrl("1-7yDXyZPDUN7QNxXb2WypBfbYSl-yfJY"), // Foto_1.jpg
  foto2: getGoogleDriveImageUrl("1-FewJvp3Odo6mifZb1H8Pkk03T0Ol718"), // Foto_2.jpg
  foto3: getGoogleDriveImageUrl("1T_HaYb3p6ez0NuBUni-Tkpva6UHLvDOo"), // Foto_3.jpg
  foto4: getGoogleDriveImageUrl("185mK0UN4unioIZZwRnvQ3gIhTvNK3S_v"), // Foto_4.jpg
  foto5: getGoogleDriveImageUrl("18d72U4zcfjsoVNw3wAmwk647ASfcz3TO"), // Foto_5.jpg
  foto6: getGoogleDriveImageUrl("1frcWcS_9loEmQ66_B798UDLO_70FV1ll"), // Foto_6.jpg
  foto7: getGoogleDriveImageUrl("1RKCd2muzjH4ObSxXFLFn1B6KAxifjNKx"), // Foto_7.jpg
  foto8: getGoogleDriveImageUrl("1c-8KISJZjAcjgubHsvjTy9seUhm6KB9q"), // Foto_8.jpg
  foto9: getGoogleDriveImageUrl("1W4vISI-hh0b1CtCSfMbIzNL2Krk-4-Kk"), // Foto_9.jpg
  foto10: getGoogleDriveImageUrl("1R51FW-iDG0Yz7w6iW5qLoWTTCFZeGhvq"), // Foto_10.jpg
  foto11: getGoogleDriveImageUrl("1_T3GctZqy0cFR859c78cLRIG_kdT-ty5"), // Foto_11.jpg
};

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
              src={fotos.foto1} 
              alt="Urbano en Frecuencia - Foto 1" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 2 - Top center-left */}
          <div className="absolute top-8 left-1/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 z-15 shadow-2xl">
            <img 
              src={fotos.foto2} 
              alt="Urbano en Frecuencia - Foto 2" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 3 - Top center-right */}
          <div className="absolute top-2 left-2/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 rotate-4 hover:rotate-7 transition-all duration-500 hover:scale-105 z-20 shadow-2xl">
            <img 
              src={fotos.foto3} 
              alt="Urbano en Frecuencia - Foto 3" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 4 - Top right */}
          <div className="absolute top-6 right-12 w-44 h-52 md:w-52 md:h-60 -rotate-2 hover:-rotate-5 transition-all duration-500 hover:scale-105 z-25 shadow-2xl">
            <img 
              src={fotos.foto4} 
              alt="Urbano en Frecuencia - Foto 4" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Segunda fila - 3 fotos ligeramente superpuestas */}
          {/* Foto 5 - Left overlapping */}
          <div className="absolute top-32 left-20 w-44 h-52 md:w-52 md:h-60 rotate-5 hover:rotate-2 transition-all duration-500 hover:scale-105 z-30 shadow-2xl">
            <img 
              src={fotos.foto5} 
              alt="Urbano en Frecuencia - Foto 5" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 6 - Center */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 -rotate-4 hover:-rotate-1 transition-all duration-500 hover:scale-105 z-35 shadow-2xl">
            <img 
              src={fotos.foto6} 
              alt="Urbano en Frecuencia - Foto 6" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 7 - Right overlapping */}
          <div className="absolute top-28 right-20 w-44 h-52 md:w-52 md:h-60 rotate-3 hover:rotate-6 transition-all duration-500 hover:scale-105 z-40 shadow-2xl">
            <img 
              src={fotos.foto7} 
              alt="Urbano en Frecuencia - Foto 7" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Tercera fila - 4 fotos distribuidas */}
          {/* Foto 8 - Bottom left */}
          <div className="absolute top-28 right-20 w-44 h-52 md:w-52 md:h-60 rotate-3 hover:rotate-6 transition-all duration-500 hover:scale-105 z-40 shadow-2xl">
            <img 
              src={fotos.foto8} 
              alt="Urbano en Frecuencia - Foto 7" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 9 - Bottom center-left */}
          <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 rotate-6 hover:rotate-3 transition-all duration-500 hover:scale-105 z-50 shadow-2xl">
            <img 
              src={fotos.foto9} 
              alt="Urbano en Frecuencia - Foto 9" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 10 - Bottom center-right */}
          <div className="absolute bottom-2 left-2/3 transform -translate-x-1/2 w-44 h-52 md:w-52 md:h-60 rotate-20 hover:-rotate-2 transition-all duration-500 hover:scale-105 z-55 shadow-2xl">
            <img 
              src={fotos.foto10} 
              alt="Urbano en Frecuencia - Foto 10" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Foto 11 - Bottom right */}
          <div className="absolute bottom-6 right-8 w-44 h-52 md:w-52 md:h-60 rotate-4 hover:rotate-7 transition-all duration-500 hover:scale-105 z-60 shadow-2xl">
            <img 
              src={fotos.foto11} 
              alt="Urbano en Frecuencia - Foto 11" 
              className="w-full h-full object-cover rounded-lg border-4 border-white"
            />
          </div>

          {/* Versiones móvil - solo las más importantes */}
          <div className="md:hidden absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-36 h-44 rotate-1 hover:rotate-4 transition-all duration-500 hover:scale-105 z-12 shadow-2xl">
            <img 
              src={fotos.foto6} 
              alt="Urbano en Frecuencia" 
              className="w-full h-full object-cover rounded-lg border-3 border-white"
            />
          </div>

          <div className="md:hidden absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-36 h-44 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 z-18 shadow-2xl">
            <img 
              src={fotos.foto8} 
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
