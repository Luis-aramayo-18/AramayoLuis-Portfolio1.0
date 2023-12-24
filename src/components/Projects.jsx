import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

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
        <h2 className="text-4xl text-center font-light tracking-widest text-white p-10">
          {t("projects.title")}
        </h2>

        <section className="grid p-4 w-full h-full grid-cols-2 grid-rows-7 lg:p-6 lg:px-10 gap-6 relative z-30">
          {/* ------------------ PRIMER COL--------------------- */}
          <article className="card-porjects col-[1/3] row-[1/2] lg:col-[1/2] lg:row-[1/3] lg:overflow-hidden">
            <div className="h-4/6">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="../../public/imagen-fondo-ultimoproyecto.jpg"
                alt="imagen de fondo loky cuts proyecto"
              />
            </div>
            <div className="lg:p-4 p-3 h-2/6">
              <div className="flex gap-3 lg:gap-4 lg:mb-4">
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Web
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  React
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Tailwind
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  CSS
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  MySql
                </span>
              </div>
              <div className="flex items-center justify-between mt-7">
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
          </article>

          <article className="card-porjects col-[1/3] row-[2/3] lg:col-[1/2] lg:row-[3/5]">
            <div className="h-4/6">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="../../public/card-rolling.jpg"
                alt="imagen de fondo Rolling Food"
              />
            </div>
            <div className="lg:p-4 p-3 h-2/6">
              <div className="flex flex-wrap gap-3 lg:gap-4 lg:mb-4">
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  E-Commerse
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  React
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Bootstrap
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  CSS
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  MongoDB
                </span>
              </div>
              <div className="flex items-center justify-between mt-3 lg:mt-7">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  ROLLING FOOD
                </h2>
                <a target="_blank" href="https://devsfood-rolling.netlify.app/">
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="card-porjects col-[1/3] row-[3/4] lg:col-[1/2] lg:row-[5/7]">
            <div className="h-4/6">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="../../public/card-RyM.jpg"
                alt="imagen de fondo Rick and Morty"
              />
            </div>
            <div className="lg:p-4 p-3 h-2/6">
              <div className="flex gap-3 lg:gap-4 lg:mb-4">
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Web
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  React
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Bootstrap
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  CSS
                </span>
              </div>
              <div className="flex items-center justify-between mt-7">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  RICK AND MORTY APP
                </h2>
                <a
                  target="_blank"
                  href="https://github.com/Luis-aramayo-18/rick-and-morty-app/tree/master"
                >
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </article>

          {/* ------------------ SEGUNDA COL--------------------- */}
          <article className="card-porjects col-[1/3] row-[4/5] lg:col-[2/3] lg:row-[1/3]">
            <div className="h-4/6">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="../../public/card-eccomerse.jpg"
                alt="imagen de fondo Tech Store"
              />
            </div>
            <div className="lg:p-4 p-3 h-2/6">
              <div className="flex gap-3 lg:gap-4 lg:mb-4">
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  E-Commerse
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  React
                </span>
                <span className=" lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  CSS
                </span>
              </div>
              <div className="flex items-center justify-between mt-7">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  TECH STORE
                </h2>
                <a
                  target="_blank"
                  href="https://tecno-store-eccommerse-app.netlify.app/"
                >
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="card-porjects border border-white col-[1/3] row-[5/6] lg:col-[2/3] lg:row-[3/5]">
            <div className="h-4/6">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="../../public/card-portfolio.jpg"
                alt="imagen de fondo mi portfolio"
              />
            </div>
            <div className="lg:p-4 p-3 h-2/6">
              <div className="flex gap-3 lg:gap-4 lg:mb-4">
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Web
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  React
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Tailwind
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  CSS
                </span>
              </div>
              <div className="flex items-center justify-between mt-7">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  PORTFOLIO
                </h2>
                <a target="_blank" href="">
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="card-porjects col-[1/3] row-[6/7] lg:col-[2/3] lg:row-[5/7]">
            <div className="h-4/6">
              <img
                className="w-full h-full block object-cover rounded-t-2xl"
                src="../../public/card-SyF.jpg"
                alt="imagen de fondo Salud y fitness"
              />
            </div>
            <div className="lg:p-4 p-3 h-2/6">
              <div className="flex gap-3 lg:gap-4 lg:mb-4">
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  Web
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  React
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  CSS
                </span>
                <span className="lg:text-base text-sm border border-gray-300 text-gray-300 font-extralight p-2 tracking-widest rounded-xl">
                  MongoDb
                </span>
              </div>
              <div className="flex items-center justify-between mt-7">
                <h2 className="text-2xl font-semibold tracking-widest text-white">
                  SALUD AND FITNESS
                </h2>
                <a
                  target="_blank"
                  href="https://github.com/Luis-aramayo-18?tab=repositories"
                >
                  <i className="icon-project text-xl font-thin mr-5 bx bx-navigation"></i>
                </a>
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Projects;
