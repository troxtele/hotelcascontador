import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Room from "./components/Room";
// import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Guests from "./components/Guests";
import { lazy, Suspense } from "react";
import LoadingAnimation from "./ui/LoadingAnimation";
import Whatsapp from "./components/Whatsapp";

const Calendar = lazy(() => import("./components/Calendar"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense
        fallback={
          <div className="container">
            <LoadingAnimation />
          </div>
        }
      >
        <Calendar />
      </Suspense>
      <Gallery />
      <Room />
      <Guests />
      <Contact />
      <Map />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;
