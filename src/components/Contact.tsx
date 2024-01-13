import { FiMail } from "react-icons/fi";
import image from "@/assets/images/contact/contact.webp";
import { TypeAnimation } from "react-type-animation";
import MotionX from "@/ui/MotionX";
export default function Contact() {
  return (
    <section id="contact" className=" overflow-hidden py-20">
      <div className="container">
        <MotionX delay={0.2}>
          <div className="heading">
            <h2 className="title">
              <span>C</span>ontact
            </h2>
            <div className="icon">
              <FiMail />
            </div>
          </div>
        </MotionX>

        {/* contact info */}
        <div className="contact-info max-w-[70rem] m-auto grid md:grid-cols-2 gap-10 mt-10">
          <div className="left">
            <div className="img">
              <img className="w-full h-full" src={image} alt="image" />
            </div>

            <div className="text text-center text-2xl mt-4">
              <h4>
                <span>H</span>ello
              </h4>

              <div className="type-text font-semibold">
                <TypeAnimation
                  sequence={[
                    500,
                    "I'm Pedro",
                    1700,
                    "¿How Can I Help You?",
                    1700,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="right flex flex-col gap-10 uppercase text-xs text-center">
            {/* address */}
            <div className="address">
              <div className="title">
                <span>A</span>dress – <span>C</span>as <span>C</span>ontador
              </div>
              <div className="text">
                <span>P</span>oligono <span>7</span>, <span>P</span>arcela{" "}
                <span>119</span>, <span>07210</span> <span>A</span>lgaida,{" "}
                <br /> <span>B</span>alearic <span>I</span>slands
              </div>
            </div>

            {/* telephone */}
            <div className="telephone">
              <div className="title">
                <span>T</span>elephone
              </div>
              <div className="numbers grid gap-4 text-base">
                <div>(+34) 610 223 701</div>
                <div>(+34) 609 332 280</div>
              </div>
            </div>

            {/* email */}
            <div className="email">
              <div className="title">
                <span>E</span>mail
              </div>

              <div className="emails grid gap-1">
                <a href="mailto: bookings@hotelcascontador.com">
                  bookings<span>@</span>hotelcascontador.com
                </a>
                <a href="mailto: pedrojanersl@hotmail.es">
                  pedrojanersl<span>@</span>hotmail.es
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
