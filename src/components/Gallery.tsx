import { useEffect, useState } from "react";
import { FiCamera } from "react-icons/fi";
import galleryImages from "@/data/data.ts";
import { TiArrowSortedDown } from "react-icons/ti";

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
import FadeIn from "@/ui/fadeIn";

const indoorImages = galleryImages.slice(14);
const outdoorImages = galleryImages.slice(0, 14);

export default function Gallery() {
  const [active, setActive] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activePopup, setActivePopup] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [loadIndoor, setLoadIndoor] = useState(false);

  useEffect(() => {
    if (!active) {
      setLoadIndoor(true);
    }
  }, [active]);

  return (
    <section
      id="gallery"
      className="max-w-screen overflow-hidden pt-6 sm:pt-12 md:pt-20"
    >
      <div className="heading">
        <MotionX>
          <h2 className="title">Gallery</h2>
        </MotionX>
        <div className="icon">
          <FiCamera />
        </div>
      </div>

      {/* images */}
      <div className="bottom">
        {/* buttons */}
        <FadeIn>
          <div className="toggle flex justify-center w-full my-12">
            {/* arrow */}
            <div className="wrap relative ">
              <div
                className={`arrow w-full transition-all duration-500 absolute top-[110%]  text-4xl text-primary ${
                  active ? "left-[20%]" : "left-[70%]"
                }`}
              >
                <TiArrowSortedDown />
              </div>
              <button
                onClick={() => setActive(true)}
                className={`${
                  active ? "bg-primary text-white" : "text-gray-800"
                }`}
              >
                Outdoor
              </button>
              <button
                className={`${
                  !active ? "bg-primary text-white" : "text-gray-800"
                }`}
                onClick={() => setActive(false)}
              >
                Indoor
              </button>
            </div>
          </div>

          {/* images */}

          <div className="images relative max-w-screen w-screen h-[500px] 2xl:h-[540px]">
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

                  1536: {
                    slidesPerView: 4,
                  },
                }}
                grid={{
                  rows: 2,
                }}
                spaceBetween={5}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Grid, Pagination, Navigation]}
                className="max-w-screen w-screen h-[500px] 2xl:h-[540px]"
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
                      <img
                     
                        className={`w-full h-full object-cover cursor-pointer`}
                        src={image}
                        loading="lazy"
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

                    1536: {
                      slidesPerView: 4,
                    },
                  }}
                  grid={{
                    rows: 2,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={5}
                  navigation={true}
                  modules={[Grid, Pagination, Navigation]}
                  className="max-w-screen w-screen h-[500px] 2xl:h-[540px]"
                >
                  {indoorImages.map((image, index) => (
                    <SwiperSlide
                      key={index + image}
                      onClick={() => setActiveIndex(index)}
                      className="cursor-pointer rounded-sm overflow-hidden"
                    >
                      <div
                        className="image"
                        onClick={() => setActivePopup(true)}
                      >
                        <img
                          className="h-[inherit] w-[inherit]"
                          src={image}
                          loading="lazy"
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
        </FadeIn>
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
