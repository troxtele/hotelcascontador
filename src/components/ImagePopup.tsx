import { useRef, useEffect, useState } from "react";
import SwiperCore from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdClose } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
// import { Navigation } from "swiper/modules";

export default function ImagePopup({
  setActive,
  active,
  images,
  index,
}: {
  active: boolean;
  images: string[];
  index: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      const sortData = images.slice(index).concat(images.slice(0, index));
      swiperRef.current?.slideTo(0); // Add null check here
      setData(sortData);
    } else {
      document.body.style.overflow = "unset";
      setData([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div
      className={`popup image-popup fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black/90 px-4 backdrop-blur-2xl transition-all duration-[400ms] sm:px-20 ${
        active ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* data */}
      <div className="wrap relative w-full max-w-[80rem] m-auto">
        {/* close */}
        <div
          onClick={() => {
            setActive(false);
          }}
          className="close absolute right-0 -top-14 z-[99999] cursor-pointer sm:-right-14 sm:top-2"
        >
          <IoMdClose className="text-5xl text-white" />
        </div>
        <Swiper
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          grabCursor={true}
          loop={true}
          className="relative z-10 w-[inherit] h-full max-h-[calc(100vh-5rem)]"
        >
          {data?.map((item, i) => (
            <SwiperSlide key={index + i} className="w-full">
              <img className="w-full" src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="navigation-btns absolute sm:static left-1/2 sm:left-[unset] transform -translate-x-1/2 sm:transform-none -bottom-[2.7rem] flex items-center gap-2.5 text-white">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="prev -left-[3.5rem] top-1/2 z-10 h-6 w-6 transform cursor-pointer text-3xl sm:absolute sm:h-8 sm:w-8 md:h-10 md:w-10 xl:-left-[3.5rem]"
          >
            <IoIosArrowBack />
          </div>
          <div
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            className="next -right-[3.5rem] top-1/2 z-10 h-6 w-6 transform cursor-pointer text-3xl sm:absolute sm:h-8 sm:w-8 md:h-10 md:w-10 xl:-right-[3.5rem]"
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}
