import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const [iconHover, setIconHover] = useState(false);
  const { t } = useTranslation("global");

  const hoverIcon = () => {
    setIconHover(true);
  };

  const hoverIconOut = () => {
    setIconHover(false);
  };

  const styleIcon = {
    cursor: "pointer",
    color: "#fff",
    transform: "scale(1.3)",
  };

  const styleCard = {
    border: "solid 1px #fff",
    borderRadius: "20px",
  };

  return (
    <>
      <section className="z-30 lg:w-4/5 lg:h-full lg:overflow-y-auto">
        <section className="grid p-4 w-full h-full grid-cols-2 grid-rows-7 lg:p-6 lg:px-10 gap-6 relative z-30">
          {/* ------------------ VOUCHERS MANAGER--------------------- */}
          <Link
            to="/projects/vouchers-manager-details"
            className="card-porjects col-[1/3] row-[4/5] lg:col-[2/3] lg:row-[3/5] lg:overflow-hidden cursor-pointer"
          >
            <div className="h-[80%]">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="/card-vouchers-manager.webp"
                alt="imagen de fondo Tech Store"
              />
            </div>
            <div className="lg:p-4 p-3 h-[20%] w-full flex items-center">
              <div className="flex items-center justify-between w-full h-full">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  VOUCHERS MANAGER
                </h2>
                <a
                  target="_blank"
                  href="https://digitalworld-tuc.netlify.app/"
                  aria-disabled="true"
                >
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </Link>

          {/* ------------------ DIGITAL WORLD--------------------- */}
          <Link
            to="/projects/digital-world-details"
            className="card-porjects col-[1/3] row-[3/4] lg:col-[2/3] lg:row-[1/3] lg:overflow-hidden cursor-pointer"
          >
            <div className="h-[80%]">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="/card-eccomerse.webp"
                alt="imagen de fondo Tech Store"
              />
            </div>
            <div className="lg:p-4 p-3 h-[20%] w-full flex items-center">
              <div className="flex items-center justify-between w-full h-full">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  DIGITAL WORLD
                </h2>
                <a target="_blank" href="https://digitalworld-tuc.netlify.app/">
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </Link>

          {/* ------------------ ROLLING FOOD --------------------- */}
          <Link
            to="/projects/rolling-food-details"
            className="card-porjects col-[1/3] row-[2/3] lg:col-[1/2] lg:row-[3/5] lg:overflow-hidden cursor-pointer"
          >
            <div className="h-[80%]">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="/card-rolling.webp"
                alt="imagen de fondo Rolling Food"
              />
            </div>
            <div className="lg:p-4 p-3 h-[20%] w-full flex items-center">
              <div className="flex items-center justify-between w-full h-full">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  ROLLING FOOD
                </h2>
                <a target="_blank" href="https://devsfood-rolling.netlify.app/">
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </Link>

          {/* ------------------ LOKY CUTS--------------------- */}
          <Link
            to="/"
            className="card-porjects col-[1/3] row-[1/2] lg:col-[1/2] lg:row-[1/3] lg:overflow-hidden cursor-pointer"
          >
            <div className="h-[80%]">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="/card-ultimoproyecto.webp"
                alt="imagen de fondo loky cuts proyecto"
              />
            </div>

            <div className="lg:p-4 p-3 h-[20%] w-full flex items-center">
              <div className="flex items-center justify-between h-full w-full">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  LOKY CUTS
                  <span className="font-extraligh text-gray-300 text-sm ms-2">
                    {t("projects.developing")}
                  </span>
                </h2>

                <div>
                  <a
                    target="_blank"
                    href="https://github.com/Luis-aramayo-18/El-rincon-de-Loky"
                  >
                    <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </section>
    </>
  );
};

export default Projects;
