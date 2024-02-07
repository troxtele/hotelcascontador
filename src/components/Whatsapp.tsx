import { IoLogoWhatsapp } from "react-icons/io5";

export default function Whatsapp() {
  return (
    <div className="whatsapp fixed bottom-[1rem] sm:bottom-[2rem] right-[1rem] sm:right-[2rem] group z-50">
      <a
        className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white rounded-full h-[3.3rem] w-[3.3rem] md:h-16 md:w-16 text-[1.9rem]  md:text-[2.4rem] transition-all duration-300"
        href="https://wa.me/34610223701"
        target="_blank"
        rel="nofollow noopener"
        aria-label="whatsapp"
      >
        <IoLogoWhatsapp />
      </a>

      <div className="group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 absolute right-full top-1/2 transform -translate-y-1/2 pr-3 ">
        <div className="bg-gray-100 tool-tip border rounded-2xl whitespace-nowrap py-1 px-3 drop-shadow-2xl relative">
          ¿Do you need help?
        </div>
      </div>
    </div>
  );
}
