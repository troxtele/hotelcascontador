import MotionX from "@/ui/MotionX";
import { FaRegCalendarCheck } from "react-icons/fa";

export default function Calendar() {
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

        <div className="calendar flex justify-center mt-12">
          <iframe
            src="https://www.avaibook.com/widgets_propietarios/loader.php?id=129563&amp;lang=en"
            style={{
              width: "100%",
              maxWidth: "580px",
              height: "380px",
              border: "0",
            }}
          >
            Tu navegador no soporta iframes
          </iframe>
        </div>
      </div>
      <div id="book-now" className="crads pt-16">
        <iframe
          src="https://bookonline.pro/es/properties/6835?unidades=1&amp;iframe=1"
          width="100%"
          className="h-[2600px] xs:h-[2000px] md:h-[1500px]"
        ></iframe>
      </div>
    </section>
  );
}
