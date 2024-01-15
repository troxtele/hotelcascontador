import { useEffect, useState } from "react";
import { FiCamera } from "react-icons/fi";
import galleryImages from "@/data/data.ts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";

import ImagePopup from "@/components/ImagePopup";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// impo"t "swiper/css/effect-"ade";
import { Navigation, Grid, Pagination } from "swiper/modules";
import MotionX from "@/ui/MotionX";
import LoadingAnimation from "@/ui/LoadingAnimation";

const indoorImages = galleryImages.slice(14);
const outdoorImages = galleryImages.slice(0, 14);

export default function Gallery() {
  const [active, setActive] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activePopup, setActivePopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadIndoor, setLoadIndoor] = useState(false);

  useEffect(() => {
    if (active) {
      setLoadIndoor(true);
    }
  }, [active]);

  return (
    <section id="gallery" className="max-w-screen overflow-hidden pt-24">
      <MotionX delay={0.2}>
        <div className="heading">
          <h2 className="title">
            <span>G</span>allery
          </h2>
          <div className="icon">
            <FiCamera />
          </div>
        </div>
      </MotionX>

      {/* images */}
      <div className="bottom">
        {/* buttons */}
        <div className="toggle flex justify-center w-full my-12">
          <button
            onClick={() => setActive(true)}
            className={`${active ? "bg-primary text-white" : "text-gray-800"}`}
          >
            Outdoor
          </button>
          <button
            className={`${!active ? "bg-primary text-white" : "text-gray-800"}`}
            onClick={() => setActive(false)}
          >
            Indoor
          </button>
        </div>

        {/* images */}
        <div className="images relative max-w-screen w-screen h-[400px]">
          <div
            className={`outdoor absolute left-0 right-0 top-0 bottom-0 transition-all duration-300 ${
              active ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                450: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
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
              {outdoorImages.map((image, index) => (
                <SwiperSlide
                  key={index + image}
                  onClick={() => setActiveIndex(index)}
                  className=" rounded-sm overflow-hidden"
                >
                  <div
                    className="image h-full w-full"
                    onClick={() => setActivePopup(true)}
                  >
                    {loading ? <LoadingAnimation /> : <></>}
                    <img
                      onLoad={() => setLoading(false)}
                      className={`w-[inherit] h-[inherit] ${
                        loading ? "hidden" : ""
                      }`}
                      src={image}
                      alt={`outdoor-image-${index}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* indoor */}
          {loadIndoor ? (
            <div
              className={`indoor absolute left-0 right-0 top-0 transition-all duration-200 ${
                !active ? "opacity-300 visible" : "opacity-0 invisible"
              }`}
            >
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  450: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
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
                    onClick={() => setActiveIndex(index)}
                    className="cursor-pointer rounded-sm overflow-hidden"
                  >
                    <div className="image" onClick={() => setActivePopup(true)}>
                      <img
                        className="h-[inherit] w-[inherit]"
                        src={image}
                        alt={`indoor-image-${index}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <> </>
          )}
        </div>
      </div>

      {/* popup */}
      <ImagePopup
        setActive={setActivePopup}
        active={activePopup}
        images={active ? outdoorImages : indoorImages}
        index={activeIndex}
      />
    </section>
  );
}
