import { useState } from "react";

import logo from "../assets/images/logo.webp";

const navItems = [
  { name: "Calendar", link: "/#calendar" },
  { name: "Gallery", link: "/#gallery" },
  { name: "Room", link: "/#room" },
  { name: "Testimonial", link: "/#testimonial" },
  { name: "Contact", link: "/#contact" },
];

export default function Navbar() {
  const [navToggle, setnavToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Calendar");

  window.onscroll = () => {
    if (window.scrollY > 0) setScrolled(true);
    else setScrolled(false);
  };

  return (
    <>
      <header
        className={`z-50 sticky left-0 top-0 right-0 bg-white/80 backdrop-blur-3xl transition-all duration-300 ${
          scrolled ? "drop-shadow-xl" : ""
        } `}
      >
        <div className="container">
          <div className="wrapper flex justify-between items-center">
            <a href="/#hero" className="main-logo flex gap-1 py-1">
              <img
                className={`transition-all duration-300 ${
                  scrolled ? "max-h-[2.1rem]" : "max-h-[3rem]"
                }`}
                src={logo}
                alt="TheFundedHub"
              />
            </a>
            {/* Nav */}
            <nav className=" text-stone-600 flex justify-center items-center">
              <ul className="hidden md:flex gap-6 justify-center items-center text-lg uppercase h-full">
                {navItems.map((item, index) => (
                  <li key={index + item.name} className="h-full">
                    <a
                      href={item.link}
                      className={`flex h-full font-semibold border-b-4 hover:border-blue-400 hover:text-primary transition-all duration-300 py-4 cursor-pointer ${
                        activeLink === item.name
                          ? "border-blue-500 text-primary"
                          : "border-transparent"
                      }`}
                      onClick={() => setActiveLink(item.name)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="menu-bar md:hidden">
                <svg
                  onClick={() => setnavToggle(!navToggle)}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1.8em"
                  width="1.8em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* mobile version */}

      <div className="mobile-nav">
        {/* Cross */}
        <svg
          onClick={() => setnavToggle(false)}
          className={`text-white fixed right-[5%] top-8 z-[88] transition-all duration-500 ${
            navToggle ? "opacity-100 rotate-180 visible" : "opacity-0 invisible"
          }`}
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 15 15"
          height="2.2em"
          width="2.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Bg dark */}
        <div
          onClick={() => setnavToggle(false)}
          className={`darkbg fixed inset-0 bg-main-bg/20  backdrop-blur-xl z-[77] transition-all duration-500 opacity-100 bg-black/40 visible ${
            navToggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>

        <nav
          className={`mobile-nav md:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-white z-[99] transition-all duration-500 ${
            navToggle ? "left-0 opacity-100" : "-left-full opacity-0"
          }`}
        >
          <div className="wrapper">
            <a href="/" className="logo block pt-6 px-6">
              <img className="w-full max-w-[12rem]" src={logo} alt="logo" />
            </a>

            <ul className="flex flex-col justify-start text-sm mt-6">
              {navItems.map((item, index) => (
                <li key={index + item.name}>
                  <a
                    className={`flex py-3 pl-6 w-full font-semibold border-y  transition-all duration-300 ${
                      activeLink === item.name
                        ? "border-primary text-primary"
                        : "border-primary/30"
                    }`}
                    onClick={() => setActiveLink(item.name)}
                  >
                    item.name
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
