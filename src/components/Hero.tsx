import { useRef } from "react";
import video from "@/assets/video/hero.mp4";
import poster from "@/assets/video/poster.webp";
import { RiArrowDownDoubleLine } from "react-icons/ri";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null!);
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // useEffect(() => {
  //   console.log(videoRef.current);
  //   videoRef.current.onloadeddata = () => {
  //     setIsVideoPlaying(true);
  //   };
  // }, [videoRef]);

  return (
    <section id="hero" className="hero relative overflow-hidden">
      {/* background */}
      <div className="bg-video after:absolute after:bg-black/50 after:h-full after:w-full after:inset-0 h-screen">
        <video
          className="h-full w-full object-cover"
          poster={poster}
          ref={videoRef}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="container">
        <div className="content absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold text-white w-full flex flex-col justify-center items-center max-w-screen px-5 font-Montserrat">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="large-text text-center shadow-text"
          >
            Holiday Cottage In Mallorca
          </h1>

          <a href="/#gallery" aria-label="arrow" className="arrow mt-6">
            <RiArrowDownDoubleLine />
          </a>
        </div>
      </div>

      {/* wave */}
      <div className="wave absolute -bottom-10 left-0 right-0"></div>
    </section>
  );
}
