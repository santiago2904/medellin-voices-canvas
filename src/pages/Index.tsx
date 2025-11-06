import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSlider from "@/components/VideoSlider";
import Gallery from "@/components/Gallery";
import Podcasts from "@/components/Podcasts";
import Gamificacion from "@/components/Gamificacion";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSlider />
      <Gallery />
      <Podcasts />
      <Gamificacion />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
