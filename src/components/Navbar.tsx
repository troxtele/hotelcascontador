import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.webp";

const navItems = [
  { id: "calendar", name: "calendar", link: "/#calendar" },
  { id: "gallery", name: "gallery", link: "/#gallery" },
  { id: "room", name: "room", link: "/#room" },
  { id: "guests", name: "testimonial", link: "/#guests" },
  { id: "contact", name: "contact", link: "/#contact" },
  { id: "book-now", name: "book now", link: "/#book-now" },
];

export default function Navbar({
  sections,
}: {
  sections: React.RefObject<HTMLDivElement>;
}) {
  const [navToggle, setnavToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  window.onscroll = () => {
    if (window.scrollY > 0) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    if (navToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navToggle]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const { current } = sections;
      const allSections = Array.from(current?.children ?? []);

      allSections.forEach((section) => {
        const sec = section.getBoundingClientRect();

        if (sec.top + 100 < window.innerHeight && sec.bottom >= 20) {
          setActiveLink(section.id);
        }
      });
    });
  }, [sections]);

  return (
    <>
      <header
        className={`z-50 sticky left-0 top-0 right-0 bg-white transition-all duration-300 overflow-hidden ${
          scrolled ? "nav-shadow" : ""
        } `}
      >
        <motion.div
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              delay: 0.3,

              ease: "easeOut",
            },
          }}
          initial={{ opacity: 0, x: 200 }}
          className="container"
        >
          <div className="wrapper flex justify-between gap-6 h-full lg:px-20">
            <a
              href="/#hero"
              className="main-logo flex justify-center items-center gap-1 py-2.5 sm:py-5 min-h-full"
            >
              <img
                className={`transition-all duration-500 w-full  ${
                  scrolled
                    ? "max-h-[1.8rem] lg:max-h-[2.1rem]"
                    : "max-h-[2.5rem] lg:max-h-[3rem]"
                }`}
                src={logo}

                alt="logo"
              />
            </a>
            {/* Nav */}
            <nav className="min-h-full text-stone-600 flex justify-center items-center">
              <ul className="hidden lg:flex gap-6 justify-center text-[0.95rem] uppercase h-full">
                {navItems.map((item, index) => (
                  <li key={index + item.name} className="min-h-full">
                    <a
                      href={item.link}
                      className={`flex items-center justify-center h-full font-normal border-b-4 hover:border-primary hover:text-primary transition-all duration-[400ms] cursor-pointer whitespace-nowrap ${
                        activeLink === item.id
                          ? "border-primary text-primary"
                          : "border-transparent"
                      } ${
                        navItems.length - 1 === index
                          ? "text-lg !font-bold"
                          : ""
                      }
                        ${scrolled ? "py-4" : "py-9"}
                      `}
                      onClick={() => setActiveLink(item.name)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="menu-bar lg:hidden">
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
        </motion.div>
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
          className={`mobile-nav lg:hidden fixed top-0 bottom-0 w-[80%] xs:w-[70%] sm:w-[60%] bg-white z-[99] transition-all duration-500 ${
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
                    href={item.link}
                    className={`flex py-3 pl-6 w-full font-semibold border-y  transition-all duration-300 ${
                      activeLink === item.id
                        ? "border-primary text-primary"
                        : "border-primary/30"
                    }

                     ${
                       navItems.length - 1 === index ? "text-lg !font-bold" : ""
                     }
                    
                      `}
                    onClick={() => {
                      setActiveLink(item.name);
                      setnavToggle(false);
                    }}
                  >
                    {item.name}
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
