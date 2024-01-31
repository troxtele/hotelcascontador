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
    </footer>
  );
}
