import React from "react";
import { RiHotelBedFill } from "react-icons/ri";
import galleryImages from "@/data/data";

export default function Room() {
  return (
    <section id="room" className="py-20">
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
                key={index + image}
                className="relative group overflow-hidden rounded-lg h-[100px] hover:h-[400px] transition-all duration-500"
              >
                <img
                  className="w-full transition-all duration-500"
                  src={image}
                  alt="room"
                />
                {/* <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="btn btn-primary">Book Now</button>
                  <button className="btn btn-secondary">View Details</button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
