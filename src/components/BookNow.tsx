import { useState } from "react";
import LoadingAnimation from "@/ui/LoadingAnimation";

export default function BookNow() {
  const [loadBooking, setLoadBooking] = useState(true);
  return (
    <section id="book-now" className="crads pt-16">
      <div className="h-[2600px] md:h-[1500px]">
        {loadBooking ? <LoadingAnimation /> : <></>}
        <iframe
          title="book-now"
          className={`${loadBooking ? "hidden" : ""}`}
          onLoad={() => setLoadBooking(false)}
          src="https://bookonline.pro/es/properties/6835?unidades=1&amp;iframe=1"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </section>
  );
}
