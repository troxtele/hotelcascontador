import { RiHotelBedFill } from "react-icons/ri";
import galleryImages from "@/data/data";

export default function Room() {
  return (
    <section id="room" className="room py-20">
      <div className="container">
        <div className="heading">
          <h2 className="title">
            <span>R</span>ooms
          </h2>
          <div className="icon">
            <RiHotelBedFill />
          </div>
        </div>

        <div className="images">
          <div className="flex flex-col gap-1 h-[500px]">
            {galleryImages.slice(38, 43).map((image, index) => (
              
              <div
                style={{ backgroundImage: `url(${image})` }}
                key={index + image}
                className={`relative group overflow-hidden rounded-lg h-[100px] hover:h-[500px] transition-all duration-700 img-height`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
