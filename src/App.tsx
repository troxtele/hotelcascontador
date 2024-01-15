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

const Calendar = lazy(() => import("./components/Calendar"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingAnimation />}>
        <Calendar />
      </Suspense>
      <Gallery />
      <Room />
      <Guests />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
