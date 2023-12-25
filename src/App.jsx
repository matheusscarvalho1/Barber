import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Appointment from "./Components/Appointment/Appointment";
import Gallery from "./Components/Gallery/Gallery";
import Map from "./Components/Map/Map";
import Footer from "./Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Homepage />
      <About />
      <Services />
      <Appointment />
      <Gallery />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
