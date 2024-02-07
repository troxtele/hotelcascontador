import { useState } from "react";
import { FiMail } from "react-icons/fi";
import image from "@/assets/images/contact/contact.webp";
import { TypeAnimation } from "react-type-animation";
import MotionX from "@/ui/MotionX";
import ImageLoading from "@/ui/ImageLoading";
import FadeIn from "@/ui/fadeIn";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  return (
    <section id="contact" className=" overflow-hidden py-20">
      <div className="container">
        <div className="heading">
          <MotionX>
            <h2 className="title">Contact</h2>
          </MotionX>
          <div className="icon">
            <FiMail />
          </div>
        </div>

        {/* contact info */}

        <div className="contact-info max-w-[70rem] m-auto grid md:grid-cols-2 gap-10 mt-12">
          <div className="left">
            <FadeIn>
              <div className="img">
                {loading ? <ImageLoading /> : <></>}
                <img
                  onLoad={() => setLoading(false)}
                  className={`w-full h-full ${loading ? "hidden" : ""}`}
                  src={image}
                  alt="image"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="text text-center text-2xl mt-4">
                <h4>Hello</h4>

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
            </FadeIn>
          </div>

          {/* right */}
          <div className="right flex flex-col gap-10 text-[0.95rem] text-center">
            {/* address */}
            <FadeIn>
              <div className="address">
                <div className="title">Adress – Cas Contador</div>
                <div className="text mt-2">
                  Poligono 7, Parcela 119, 07210 Algaida, <br /> Balearic
                  Islands
                </div>
              </div>
            </FadeIn>

            {/* telephone */}
            <FadeIn>
              <div className="telephone">
                <div className="title">Telephone</div>
                <div className="numbers mt-2">
                  <div>(+34) 610 223 701</div>
                  <div>(+34) 609 332 280</div>
                </div>
              </div>
            </FadeIn>

            {/* email */}
            <FadeIn>
              <div className="email">
                <div className="title">Email</div>

                <div className="emails flex flex-col gap-1 justify-center items-center">
                  <a href="mailto: bookings@hotelcascontador.com">
                    bookings@hotelcascontador.com
                  </a>
                  <a href="mailto: pedrojanersl@hotmail.es">
                    pedrojanersl@hotmail.es
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
