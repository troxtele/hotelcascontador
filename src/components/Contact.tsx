import { FiMail } from "react-icons/fi";
import image from "@/assets/images/contact/contact.jpg";
export default function Contact() {
  return (
    <section id="contact" className="max-w-screen overflow-hidden py-20">
      <div className="container">
        <div className="heading">
          <h2 className="title">
            <span>C</span>ontact
          </h2>
          <div className="icon">
            <FiMail />
          </div>
        </div>

        {/* contact info */}
        <div className="contact-info grid xs:grid-cols-2 gap-10 mt-10">
          <div className="left">
            <div className="img">
              <img className="w-[34rem]" src={image} alt="image" />
            </div>
          </div>

          {/* right */}
          <div className="right flex flex-col gap-10">
            {/* address */}
            <div className="address">
              <div className="title">
                <span>A</span>dress – <span>C</span>as <span>C</span>ontador
              </div>
              <div className="text">
                <span>P</span>oligono 7, <span>P</span>arcela 119, 07210{" "}
                <span>A</span>lgaida, <br /> <span>B</span>alearic{" "}
                <span>I</span>slands
              </div>
            </div>

            {/* telephone */}
            <div className="telephone">
              <div className="title">
                <span>T</span>elephone
              </div>
              <div className="numbers grid gap-4 text-base">
                <span>(+34) 610 223 701</span>
                <span>(+34) 609 332 280</span>
              </div>
            </div>

            {/* email */}
            <div className="email">
              <div className="title">Email</div>

              <div className="emails">
                <a href="mailto: bookings@hotelcascontador.com">
                  bookings@hotelcascontador.com
                </a>
                <a href="mailto: pedrojanersl@hotmail.es">
                  pedrojanersl@hotmail.es
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
