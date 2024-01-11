import video from "@/assets/video/hero.mp4";

import { RiArrowDownDoubleLine } from "react-icons/ri";

export default function Hero() {
  return (
    <main id="hero" className="hero relative">
      {/* background */}
      <div className="bg-video after:absolute after:bg-black/50 after:h-full after:w-full after:inset-0">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="container">
        <div className="content absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white w-full flex flex-col justify-center items-center uppercase">
          <h1>
            <span>H</span>oliday <span>C</span>ottage <span>I</span>n{" "}
            <span>M</span>allorca
          </h1>

          <a href="/#gallery" className="arrow mt-6">
            <RiArrowDownDoubleLine />
          </a>
        </div>
      </div>

      {/* wave */}
      <div className="wave absolute bottom-0 left-0 right-0"></div>
    </main>
  );
}
