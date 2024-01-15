import { useState } from "react";
import MotionX from "@/ui/MotionX";
import { FaRegCalendarCheck } from "react-icons/fa";
import LoadingAnimation from "@/ui/LoadingAnimation";
import FadeIn from "@/ui/fadeIn";

export default function Calendar() {
  const [loading, setLoading] = useState(true);
  const [loadBooking, setLoadBooking] = useState(true);
  return (
    <section id="calendar" className="pt-20">
      <div className="container">
        <MotionX delay={0.2}>
          <div className="heading">
            <h2 className="title">
              <span>C</span>alendar
            </h2>
            <div className="icon">
              <FaRegCalendarCheck />
            </div>
          </div>
        </MotionX>

        <FadeIn>
          <div className="calendar flex justify-center mt-12">
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

      <FadeIn>
        <div id="book-now" className="crads pt-16">
          <div className="h-[2600px] xs:h-[2000px] md:h-[1500px]">
            {loadBooking ? <LoadingAnimation /> : <></>}
            <iframe
              title="book-now"
              className={`${loadBooking ? "hidden" : ""}`}
              onLoad={() => setLoadBooking(false)}
              src="https://bookonline.pro/es/properties/6835?unidades=1&amp;iframe=1"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
