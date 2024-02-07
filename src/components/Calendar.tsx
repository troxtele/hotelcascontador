import { useState } from "react";
import MotionX from "@/ui/MotionX";
import { FaRegCalendarCheck } from "react-icons/fa";
import LoadingAnimation from "@/ui/LoadingAnimation";
import FadeIn from "@/ui/fadeIn";

export default function Calendar() {
  const [loading, setLoading] = useState(true);
  return (
    <section id="calendar" className="pt-20">
      <div className="container">
        <div className="heading">
          <MotionX>
            <h2 className="title">
              <span>C</span>alendar
            </h2>
          </MotionX>
          <div className="icon">
            <FaRegCalendarCheck />
          </div>
        </div>

        <FadeIn>
          <div className="calendar flex justify-center mt-12 h-[380px]">
            <div className="wrap w-full max-w-[580px] h-[380px] border-none">
              {loading ? <LoadingAnimation /> : <></>}
              <iframe
                title="calendar"
                className={`${loading ? "hidden" : ""}`}
                onLoad={() => setLoading(false)}
                src="https://www.avaibook.com/widgets_propietarios/loader.php?id=129563&amp;lang=en"
                width="100%"
                height="100%"
              >
                Tu navegador no soporta iframes
              </iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
