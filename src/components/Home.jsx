import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Home.css";

const Home = () => {
  const { t } = useTranslation("global");
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const formatNumberWithZero = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const dayOfMonth = formatNumberWithZero(currentDateTime.getDate());
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const hours = formatNumberWithZero(currentDateTime.getHours());
  const minutes = formatNumberWithZero(currentDateTime.getMinutes());

  const day = days[currentDateTime.getDay()].toUpperCase();
  const month = months[currentDateTime.getMonth()];

  return (
    <>
      <section className="grid w-full h-full grid-cols-10 grid-rows-7 p-4 gap-4 relative z-30 lg:grid lg:w-4/5 lg:h-full lg:grid-cols-9 lg:grid-rows-7 lg:p-6 lg:px-10 lg:gap-6 lg:relative lg:overflow-y-auto lg:z-50">
        {/* ------------ PRIMERA COL----------------- */}
        <article className="card p-8 flex flex-col-reverse text-white col-[1/11] row-[1/4] sm:p-14 lg:text-white lg:p-0 lg:col-[1/7] lg:row-[1/4] lg:flex lg:flex-row lg:rounded-2xl">
          <div className="w-full h-full lg:p-6 lg:w-4/6">
            <h2 className="text-2xl font-bold tracking-wider text-purple-500 bounce-top sm:text-5xl lg:text-4xl">
              Aramayo Luis
            </h2>
            <p className="text-3xl mt-1 tracking-wide font-medium sm:text-6xl sm:mt-2 lg:text-5xl lg:mt-2">
              {t("home.title-primary-card")}
            </p>
            <div className="flex gap-4 mt-2 sm:mt-4 lg:flex lg:gap-5 lg:mt-4">
              <div>
                <a
                  target="_blank"
                  className="box-icon flex items-center justify-center gap-1 text-gray-400"
                  href="https://www.linkedin.com/in/luis-aramayo-171055235/"
                >
                  <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-linkedin-square"></i>
                  <span className="text-base sm:text-2xl lg:text-lg">
                    Linkedin
                  </span>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  className="box-icon flex items-center justify-center gap-1 text-gray-400"
                  href="https://github.com/Luis-aramayo-18"
                >
                  <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-github"></i>
                  <span className="text-base sm:text-2xl lg:text-lg">
                    GitHub
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="box-icon flex items-center justify-center gap-1 text-gray-400"
                  href="mailto:Luis.aramayo.18@gmail.com"
                >
                  <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-gmail"></i>
                  <span className="text-base sm:text-2xl lg:text-lg">
                    Gmail
                  </span>
                </a>
              </div>
            </div>
            <p className="mt-4 text-gray-300 sm:text-xl sm:mt-6 lg:text-base lg:mt-6">
              {t("home.content-primary-card")}
            </p>
          </div>
          <div className="hidden lg:block lg:w-2/6 lg:h-full">
            <img
              className="lg:w-full lg:h-full lg:object-cover lg:rounded-e-2xl"
              src="/me-home.jpg"
              alt="Aramayo Luis imagen portfolio"
            />
          </div>
        </article>

        <article className="card rounded-2xl h-44 text-white col-[1/11] row-[4/5] sm:h-56 lg:col-[1/3] lg:row-[4/5] lg:h-40 lg:p-4">
          <div className="mt-1 flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl font-bold text-purple-500 tracking-wider bounce-top sm:text-4xl lg:text-2xl">
              FRONTEND
            </h2>
            <p className="text-lg font-medium mt-1 tracking-wider sm:text-2xl lg:text-lg">
              UX/UI
            </p>
          </div>
        </article>

        <article className="card rounded-2xl h-44 text-white col-[1/6] row-[5/6] sm:h-56 lg:col-[3/5] lg:row-[4/5] lg:h-40 lg:p-4">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex">
              <p className="text-3xl mt-2 sm:mt-8 sm:text-5xl lg:mt-2 lg:text-3xl">
                +
              </p>
              <h2 className="text-5xl sm:text-8xl lg:text-4xl font-bold text-purple-500 bounce-top">
                1
              </h2>
            </div>
            <p className="text-base font-medium tracking-wider sm:text-xl lg:text-lg">
              {t("home.experience-card")}
            </p>
          </div>
        </article>

        <article className="card rounded-2xl h-44  text-white col-[6/11] row-[5/6] sm:h-56 lg:col-[5/7] lg:row-[4/5] lg:h-40">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex">
              <p className="text-3xl mt-2 sm:mt-8 sm:text-5xl lg:mt-2 lg:text-3xl">
                +
              </p>
              <h2 className="text-5xl sm:text-8xl lg:text-4xl font-bold text-purple-500 bounce-top">
                5
              </h2>
            </div>
            <p className="text-base font-medium tracking-wider sm:text-xl lg:text-lg">
              {t("home.projects-card")}
            </p>
          </div>
        </article>

        <article className="card rounded-2xl text-white col-[6/11] row-[8/10] lg:col-[1/3] lg:row-[5/8]">
          <img
            className="w-full h-full block object-cover rounded-2xl"
            src="/wallpaper-home.jpg"
            alt=""
          />
        </article>

        <article className="card py-10 sm:px-0 sm:py-20 rounded-2xl p-4 lg:p-4 text-white text-center col-[1/11] row-[7/8]  lg:col-[3/7] lg:row-[5/8] ">
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-wider text-purple-500 bounce-top sm:text-4xl lg:text-2xl">
              {t("home.title-technologies-card")}
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-8 px-6">
            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-html5"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                HTML
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-css3"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                CSS
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-javascript"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                JavaScript
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-react"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                React
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-bootstrap"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                Bootstrap
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-tailwind-css"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                Tailwind
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxs-data"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                MySql
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-nodejs"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                NodeJs
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-mongodb"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                MongoDb
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-trello"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                Trello
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center">
              <i className="text-3xl sm:text-5xl lg:text-3xl bx bxl-github"></i>
              <span className="text-base sm:text-xl lg:text-lg text-gray-400">
                GitHub
              </span>
            </div>

            <div className="flex w-1/4 lg:w-1/6 flex-col items-center justify-center mt-1">
              <img
                className="h-7 w-7 sm:h-10 sm:w-10 lg:h-7 lg:w-7 bg-white rounded-full p-1"
                src="/icons8-express-js-50.png"
                alt="logo de express js"
              />
              <span className="text-base sm:text-xl lg:text-lg text-gray-400 mt-1">
                ExpressJs
              </span>
            </div>
          </div>
        </article>

        {/* ----------------SEGUNDA COL-------------- */}
        <article className="card rounded-2xl  text-white col-[1/6] row-[8/9] lg:col-[7/10] lg:row-[1/2] lg:h-40 lg:p-4">
          <div className="flex items-center justify-center h-full">
            <h2 className="sm:text-4xl lg:text-3xl text-2xl font-bold tracking-wide text-purple-500 bounce-top">
              ARGENTINA
            </h2>
            <img
              className="h-5 w-5 sm:h-8 sm:w-8 lg:h-7 lg:w-7 mb-8"
              src="/logo-argentina-home.png"
              alt="bandera de la argentina"
            />
          </div>
        </article>

        <article className="card rounded-2xl  text-white col-[1/6] row-[9/10] lg:col-[7/10] lg:row-[2/3] lg:h-40 lg:p-4">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="sm:text-4xl lg:text-2xl text-2xl font-bold tracking-wide">
              {day}
            </h2>
            <p className="text-sm sm:text-2xl lg:text-base">
              {month}, {dayOfMonth}
            </p>
            <h2 className="sm:text-3xl text-xl lg:text-xl font-medium text-purple-500 bounce-top">
              {hours}:{minutes}
            </h2>
          </div>
        </article>

        <article className="card rounded-2xl text-white col-[1/11] row-[6/7] lg:col-[7/10] lg:row-[3/8]">
          <div className="flex justify-between items-center p-4">
            <h2 className="sm:p-4 sm:text-2xl lg:text-xl lg:p-0 text-lg font-bold tracking-wide">
              {t("home.future-project-card")}
            </h2>
            <Link
              to="/projects"
              className="p-2 text-base sm:p-4 sm:text-xl lg:text-base lg:p-0 mt-1 font-medium text-gray-300 hover:text-white hover:underline"
            >
              {t("home.future-project-card-btn")}
            </Link>
          </div>
          <div>
            <img
              className="w-full h-full block object-cover rounded-b-2xl"
              src="/imagen-fondo-ultimoproyecto.jpg"
              alt=""
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
