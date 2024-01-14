import { useEffect, useRef, useState } from "react";
import bookingImg from "@/assets/images/guests/bookinglogo-150x142.webp";
import airbnbImg from "@/assets/images/guests/airbnblogo-150x142.webp";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDoubleQuotesR } from "react-icons/ri";
import MotionX from "@/ui/MotionX";
import LoadingAnimation from "@/ui/LoadingAnimation";
export default function Guests() {
  const [isMounted, setIsMounted] = useState(true);
  const [loading, setLoading] = useState(true);

  const [toggle, setToggle] = useState("booking"); // ["booking", "airbnb"

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookingRef = useRef(null) as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const airbnbRef = useRef(null) as any;

  useEffect(() => {
    setIsMounted((prev) => {
      if (prev) {
        const bookingScript = document.createElement("script");
        const airbnbScript = document.createElement("script");
        bookingScript.setAttribute(
          "src",
          "https://cdn.trustindex.io/loader.js?8acea89240201842ad966ec69fe"
        );
        airbnbScript.setAttribute(
          "src",
          "https://cdn.trustindex.io/loader.js?8acea89240201842ad966ec69fe"
        );

        bookingScript.async = true;
        bookingScript.defer = true;

        airbnbScript.async = true;
        airbnbScript.defer = true;

        bookingScript.onload = () => {
          setLoading(false);
        };

        bookingRef.current.appendChild(bookingScript);
        airbnbRef.current.appendChild(airbnbScript);
      }
      return false;
    });
  }, [isMounted]);

  return (
    <section id="guests" className="guests pt-20">
      <div className="container">
        <MotionX delay={0.2}>
          <div className="heading">
            <h2 className="title">
              <span>G</span>uests
            </h2>
            <div className="icon">
              <RiDoubleQuotesR />
            </div>
          </div>
        </MotionX>

        {/* rating */}
        <div className="rating">
          <div className="toggle-btn  flex gap-12 justify-center">
            <div className="wrap flex gap-12 relative">
              <button className="booking" onClick={() => setToggle("booking")}>
                <img src={bookingImg} alt="booking" />
              </button>
              <button className="airbnb" onClick={() => setToggle("airbnb")}>
                <img src={airbnbImg} alt="airbnb" />
              </button>

              {/* arrow */}
              <div
                className={`arrow w-full transition-all duration-500 absolute top-[110%]  text-4xl ${
                  toggle === "booking"
                    ? "left-[10%] text-[#004683]"
                    : "left-[73%] text-[#ff5b67]"
                }`}
              >
                <TiArrowSortedDown />
              </div>
            </div>
          </div>

          <div className="loading-animation h-20">
            {loading ? <LoadingAnimation /> : <></>}
          </div>
          {/* widgets */}
          <div className={`widgets mt-12 ${loading ? "hidden" : ""}`}>
            <div
              ref={bookingRef}
              className={`booking transition-all duration-300 ${
                toggle === "booking"
                  ? "block opacity-100"
                  : "hidden opacity-0 pointer-events-none"
              }`}
            ></div>
            <div
              ref={airbnbRef}
              className={`airbnb transition-all duration-300 ${
                toggle === "airbnb"
                  ? "block opacity-100"
                  : "hidden opacity-0 pointer-events-none"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
