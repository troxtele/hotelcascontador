import { RiHotelBedFill } from "react-icons/ri";

import roomImgOne from "@/assets/images/algaida/algaida_retratos_lq-33.webp";
import roomImgTwo from "@/assets/images/algaida/algaida_retratos_lq-35.webp";
import roomImgThree from "@/assets/images/algaida/algaida_retratos_lq-43.webp";
import roomImgFour from "@/assets/images/algaida/algaida_retratos_lq-63.webp";
import MotionX from "@/ui/MotionX";

const names = ["Sa Olivera", "Sa Mata", "Es Cirerer", "Es Romani"];
const images = [roomImgOne, roomImgTwo, roomImgThree, roomImgFour];

export default function Room() {
  return (
    <section id="room" className="room pt-20">
      <div className="container">
        <MotionX delay={0.2}>
          <div className="heading">
            <h2 className="title">
              <span>R</span>ooms
            </h2>
            <div className="icon">
              <RiHotelBedFill />
            </div>
          </div>
        </MotionX>
      </div>
      <div className="images max-w-[70rem] w-full m-auto mt-10">
        <div className="flex flex-col gap-[0.1rem] h-[700px] overflow-hidden">
          {images.map((image, index) => (
            <div
              style={{ backgroundImage: `url(${image})` }}
              key={index + image}
              dynamic-value={names[index]}
              className={`relative group overflow-hidden transition-all duration-700 img-height before:absolute before:inset-0 before:bg-black before:bg-opacity-20 before:group-hover:opacity-100 after:absolute after:left-3 after:bottom-6 hover:after:bottom-3 after:content-[attr(dynamic-value)] after:text-2xl after:text-white after:font-semibold after:transition-all after:duration-500 after:opacity-0 hover:after:opacity-100`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
