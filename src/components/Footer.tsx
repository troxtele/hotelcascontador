import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer text-stone-600 b py-4 sm:py-6">
      <div className="container flex flex-col sm:flex-row gap-4 items-center text-center justify-around">
        <div className="links flex gap-4">
          <a
            href="https://www.instagram.com/cas.contador/"
            target="_blank"
            rel="nofollow noopener"
            aria-label="instagram"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://www.facebook.com/cas.contador"
            target="_blank"
            rel="nofollow noopener"
            aria-label="facebook"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="https://goo.gl/maps/zbWYfRBGD9iTpngP9"
            target="_blank"
            rel="nofollow noopener"
            aria-label="google"
          >
            <IoLogoGoogle />
          </a>
        </div>
        {/* text */}
        <div className="text">
          <span className="font-bold">® Hotel Cas Contador </span>| Todos los
          derechos reservados
        </div>
      </div>

      {/* whatsapp */}
      <div className="whatsapp fixed bottom-[1rem] sm:bottom-[2rem] right-[1rem] sm:right-[2rem] group z-[99]">
        <a
          className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white rounded-full h-10 sm:h-12 md:h-16 w-10 sm:w-12 md:w-16 text-2xl sm:text-3xl md:text-[2.4rem] transition-all duration-300"
          href="https://wa.me/34610223701"
          target="_blank"
          rel="nofollow noopener"
          aria-aria-label="whatsapp"
        >
          <IoLogoWhatsapp />
        </a>

        <div className=" group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-300 absolute right-full top-1/2 transform -translate-y-1/2 pr-2 ">
          <div className="bg-gray-100 border rounded-2xl whitespace-nowrap p-1.5 px-3 drop-shadow-2xl">
            ¿Do you need help?
          </div>
        </div>
      </div>
    </footer>
  );
}
