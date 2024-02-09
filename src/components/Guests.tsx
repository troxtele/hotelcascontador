import { useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import bookingImg from "@/assets/images/guests/bookinglogo-150x142.webp";
import airbnbImg from "@/assets/images/guests/airbnblogo-150x142.webp";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDoubleQuotesR } from "react-icons/ri";
import MotionX from "@/ui/MotionX";
// import LoadingAnimation from "@/ui/LoadingAnimation";
import FadeIn from "@/ui/fadeIn";
export default function Guests() {
  // const [loading, setLoading] = useState(false);

  const [toggle, setToggle] = useState("booking"); // ["booking", "airbnb"]

  return (
    <section id="guests" className="guests pt-20 overflow-hidden">
      <div className="container">
        <div className="heading">
          <MotionX>
            <h2 className="title">
              <span>G</span>uests
            </h2>
          </MotionX>
          <div className="icon">
            <RiDoubleQuotesR />
          </div>
        </div>

        {/* rating */}
        <FadeIn>
          <div className="rating mt-12">
            <div className="toggle-btn flex gap-12 justify-center">
              <div className="wrap flex gap-12 relative">
                <button
                  className="booking"
                  onClick={() => setToggle("booking")}
                >
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

            {/* <div className="loading-animation h-20">
              {loading ? <LoadingAnimation /> : <></>}
            </div> */}
            {/* widgets */}
            <div className={`widgets mt-12 relative`}>
              <div
                className={`booking transition-all w-full top-0 left-0 right-0 duration-300 ${
                  toggle === "booking"
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none absolute"
                }`}
              >
                <ElfsightWidget
                  widgetId="471c2567-fc50-4d8b-b46c-0aef6e8f5276"
                  lazy
                  modern
                />
              </div>
              <div
                className={`airbnb transition-all w-full top-0 left-0 right-0 duration-300${
                  toggle === "airbnb"
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none absolute"
                }`}
              >
                <ElfsightWidget
                  widgetId="0842e0c0-7524-46d9-b4ef-daae89153573"
                  lazy
                  modern
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
