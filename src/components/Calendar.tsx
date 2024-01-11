import { FaRegCalendarCheck } from "react-icons/fa";

export default function Calendar() {
  return (
    <section id="calendar" className="py-20">
      <div className="container">
        <div className="heading">
          <h2 className="title">
            <span>C</span>alendar
          </h2>
          <div className="icon">
            <FaRegCalendarCheck />
          </div>
        </div>

        <div className="calendar flex justify-center mt-10">
          <iframe
            src="https://www.avaibook.com/widgets_propietarios/loader.php?id=129563&amp;lang=en"
            style={{ width: "580px", height: "380px", border: "0" }}
          >
            Tu navegador no soporta iframes
          </iframe>
        </div>

        <div className="crads">
          <iframe
            src="https://bookonline.pro/es/properties/6835?unidades=1&amp;iframe=1"
            width="100%"
            height="1500px"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
