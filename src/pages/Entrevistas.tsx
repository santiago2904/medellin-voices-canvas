import Navbar from "@/components/Navbar";
import EntrevistasSlider from "@/components/EntrevistasSlider";
import Footer from "@/components/Footer";

const Entrevistas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20"> {/* Espacio para el navbar fijo */}
        <EntrevistasSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Entrevistas;