import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Room from "./components/Room";
import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Guests from "./components/Guests";
import Whatsapp from "./components/Whatsapp";
import BookNow from "./components/BookNow";

function App() {
  const sections = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Navbar sections={sections} />
      <Hero />
      <div ref={sections}>
        <Calendar />
        <BookNow />

        <Gallery />
        <Room />
        <Guests />
        <Contact />
      </div>
      <Map />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;
