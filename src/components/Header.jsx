import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { defineElement } from "lord-icon-element";
import Lottie from "lottie-web";

import "./Header.css";

defineElement(Lottie.loadAnimation);

const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("global");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);
  

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div
        onClick={openMenu}
        className={`${
          isMenuOpen
            ? "bg-transparent z-50"
            : "backdrop-blur-15 bg-gradient-to-br from-zinc-900 to-black shadow-md border rounded-full z-50"
        } flex items-center justify-center fixed top-0 right-0 mr-4 mt-4 rounded-full p-3 text-2xl sm:text-4xl text-white z-50 lg:hidden`}
      >
        {isMenuOpen ? (
          <i className="text-3xl sm:text-5xl bx bx-x"></i>
        ) : (
          <i className="bx bx-menu"></i>
        )}
      </div>

      {isMenuOpen && (
        <section
          ref={menuRef}
          className={`hamburger-menu z-40 w-3/5 h-full fixed top-0 right-0 flex flex-col items-center justify-center lg:hidden transform transition-transform ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex gap-3 absolute top-9 left-5">
            <img
              onClick={() => {
                changeLanguage("en");
              }}
              className={`w-7 h-7 sm:w-8 sm:h-8 cursor-pointer ${
                i18n.language === "en"
                  ? "border-2 border-yellow-300 rounded-full scale-125"
                  : ""
              }`}
              src="../../public/en-icon.png"
              alt=""
            />
            <img
              onClick={() => {
                changeLanguage("es");
              }}
              className={`w-7 h-7 sm:w-8 sm:h-8 cursor-pointer lg:w-7 lg:h-7 lg:cursor-pointer ${
                i18n.language === "es"
                  ? "border-2 border-yellow-300 rounded-full scale-125"
                  : ""
              }`}
              src="../../public/es-icon.png"
              alt=""
            />
          </div>

          <NavLink
            className="border-4 rounded-full bg-purple-950 shadow-md shadow-purple-500"
            to="/"
          >
            <img
              className="h-32 w-32 sm:h-44 sm:w-44"
              src="../../public/logo-navbar.png"
              alt=""
            />
          </NavLink>

          <nav className="nav mb-6 mt-6">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "btn-nav-3 text-xl sm:text-2xl font-medium flex items-center gap-3 tracking-wide text-white underline"
                      : "btn-nav-3 text-xl sm:text-2xl font-medium flex items-center gap-3 tracking-wide text-gray-400"
                  }
                >
                  <lord-icon
                    target=".btn-nav-3"
                    src="https://cdn.lordicon.com/kthelypq.json"
                    trigger="hover"
                    colors="primary:#e4e4e4"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                  {t("nav.about")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "btn-nav-3 text-xl sm:text-2xl font-medium flex items-center gap-3 tracking-wide text-white underline"
                      : "btn-nav-3 text-xl sm:text-2xl font-medium flex items-center gap-3 tracking-wide text-gray-400"
                  }
                  to="/projects"
                >
                  <lord-icon
                    target=".btn-nav-3"
                    src="https://cdn.lordicon.com/hqymfzvj.json"
                    trigger="hover"
                    colors="primary:#e4e4e4"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                  {t("nav.projects")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "btn-nav-3 text-xl sm:text-2xl font-medium flex items-center gap-3 tracking-wide text-white underline"
                      : "btn-nav-3 text-xl sm:text-2xl font-medium flex items-center gap-3 tracking-wide text-gray-400"
                  }
                  to="/contact"
                >
                  <lord-icon
                    target=".btn-nav-3"
                    src="https://cdn.lordicon.com/nzixoeyk.json"
                    trigger="hover"
                    colors="primary:#e4e4e4"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                  {t("nav.contact")}
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center absolute bottom-5 text-sm sm:text-base text-gray-400">
            <span>© Aramayo Luis 2024</span>
          </div>
        </section>
      )}

      <section className="hidden hamburger-menu lg:w-1/5 lg:h-screen lg:sticky lg:top-0 lg:left-0 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <div className="lg:flex lg:gap-3 lg:absolute lg:top-5 lg:right-5">
          <img
            onClick={() => {
              changeLanguage("en");
            }}
            className={`lg:w-7 lg:h-7 lg:cursor-pointer ${
              i18n.language === "en"
                ? "lg:border-2 lg:border-yellow-300 lg:rounded-full lg:scale-125"
                : ""
            }`}
            src="../../public/en-icon.png"
            alt=""
          />
          <img
            onClick={() => {
              changeLanguage("es");
            }}
            className={`lg:w-7 lg:h-7 lg:cursor-pointer ${
              i18n.language === "es"
                ? "lg:border-2 lg:border-yellow-300 lg:rounded-full lg:scale-125"
                : ""
            }`}
            src="../../public/es-icon.png"
            alt=""
          />
        </div>

        <NavLink
          className="border-4 rounded-full bg-purple-950 shadow-md shadow-purple-500"
          to="/"
        >
          <img
            className="lg:h-32 lg:w-32"
            src="../../public/logo-navbar.png"
            alt=""
          />
        </NavLink>

        <nav className="lg:mt-6">
          <ul className="lg:flex lg:flex-col lg:gap-4">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "btn-nav-3 lg:text-lg lg:font-medium lg:flex lg:items-center lg:gap-3 lg:tracking-wide lg:text-white lg:underline"
                    : "btn-nav-3 lg:text-lg lg:font-medium lg:flex lg:items-center lg:gap-3 lg:tracking-wide lg:text-gray-400"
                }
              >
                <lord-icon
                  target=".btn-nav-3"
                  src="https://cdn.lordicon.com/kthelypq.json"
                  trigger="hover"
                  colors="primary:#e4e4e4"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                {t("nav.about")}
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn-nav-3 lg:text-lg lg:font-medium lg:flex lg:items-center lg:gap-3 lg:tracking-wide lg:text-white lg:underline"
                    : "btn-nav-3 lg:text-lg lg:font-medium lg:flex lg:items-center lg:gap-3 lg:tracking-wide lg:text-gray-400"
                }
                to="/projects"
              >
                <lord-icon
                  target=".btn-nav-3"
                  src="https://cdn.lordicon.com/hqymfzvj.json"
                  trigger="hover"
                  colors="primary:#e4e4e4"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                {t("nav.projects")}
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn-nav-3 lg:text-lg lg:font-medium lg:flex lg:items-center lg:gap-3 lg:tracking-wide lg:text-white lg:underline"
                    : "btn-nav-3 lg:text-lg lg:font-medium lg:flex lg:items-center lg:gap-3 lg:tracking-wide lg:text-gray-400"
                }
                to="/contact"
              >
                <lord-icon
                  target=".btn-nav-3"
                  src="https://cdn.lordicon.com/nzixoeyk.json"
                  trigger="hover"
                  colors="primary:#e4e4e4"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="lg:flex lg:justify-center lg:absolute lg:bottom-5 lg:text-gray-400 lg:text-sm">
          <span>© Aramayo Luis 2024</span>
        </div>
      </section>
    </>
  );
};

export default Header;
