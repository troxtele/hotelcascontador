
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Room from "./components/Room";
import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import Map from "./components/Map";

function App() {

  return (
    <>
      <Navbar />
      <Calendar />
      <Gallery />
      <Room />
      <Contact />
      <Map />
    </>
  );
}

export default App;
