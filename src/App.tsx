import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Room from "./components/Room";
import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Calendar />
      <Gallery />
      <Room />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
