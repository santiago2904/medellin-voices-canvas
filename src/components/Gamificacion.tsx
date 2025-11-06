const Gamificacion = () => {
  return (
    <section id="gamificacion" className="py-20 bg-urban-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Gamificación
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sumérgete en la experiencia interactiva de Urbano en Frecuencia
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-urban-dark/50 rounded-2xl p-4 md:p-6 shadow-2xl border border-primary/20">
            <div className="w-full">
              <div className="relative pb-[65%] pt-0 h-0">
                <iframe 
                  title="· JUEGO URBANO EN FRECUENCIA" 
                  frameBorder="0" 
                  width="1200px" 
                  height="675px" 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://view.genially.com/690a71cfcc99498e40d1993c" 
                  allowFullScreen={true}
                  scrolling="yes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamificacion;