import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import galleryImages from "@/data/data.ts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
("");
// impo"t "swiper/css/effect-"ade";
import { Navigation, Grid, Pagination } from "swiper/modules";

const indoorImages = galleryImages.slice(14);
const outdoor = galleryImages.slice(0, 14);

export default function Gallery() {
  const [active, setActive] = useState(true);

  return (
    <section id="gallery" className="max-w-screen overflow-hidden py-20">
      <div className="heading">
        <h2 className="title">
          <span>G</span>allery
        </h2>
        <div className="icon">
          <FiCamera />
        </div>
      </div>

      {/* images */}
      <div className="bottom">
        <div className="toggle flex justify-center w-full my-6">
          <button
            onClick={() => setActive(true)}
            className={`${active ? "bg-sky-400 text-white" : "text-gray-800"}`}
          >
            Outdoor
          </button>
          <button
            className={`${!active ? "bg-sky-400 text-white" : "text-gray-800"}`}
            onClick={() => setActive(false)}
          >
            Indoor
          </button>
        </div>
        <div className="images relative max-w-screen w-screen h-[400px]">
          <div
            className={`outdoor absolute left-0 right-0 top-0 bottom-0 transition-all duration-300 ${
              active ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Swiper
              grid={{
                rows: 2,
              }}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              slidesPerView={4}
              modules={[Grid, Pagination, Navigation]}
              className="max-w-screen w-screen h-[400px]"
            >
              {outdoor.map((image, index) => (
                <SwiperSlide
                  key={index + image}
                  className=" rounded-sm overflow-hidden"
                >
                  <div className="image">
                    <img className="w-full" src={image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* indoor */}
          <div
            className={`indoor absolute left-0 right-0 top-0 transition-all duration-200 ${
              !active ? "opacity-300 visible" : "opacity-0 invisible"
            }`}
          >
            <Swiper
              grid={{
                rows: 2,
              }}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              slidesPerView={4}
              modules={[Grid, Pagination, Navigation]}
              className="max-w-screen w-screen h-[400px]"
            >
              {indoorImages.map((image, index) => (
                <SwiperSlide
                  key={index + image}
                  className=" rounded-sm overflow-hidden"
                >
                  <div className="image">
                    <img className="w-full" src={image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
