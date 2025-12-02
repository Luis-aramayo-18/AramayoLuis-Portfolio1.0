import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutMe.css";

const AboutMe = () => {
  const { t } = useTranslation("global");

  const openCV = () => {
    const rutaCV = "/AramayoLuisCv-dev.pdf";
    window.open(rutaCV, "_blank");
  };

  const renderWithParagraphs = (text) => {
    if (!text) return null;

    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-3">
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      <section className="lg:w-4/5 relative z-30">
        <div className="lg:w-[60%] lg:mt-10 lg:ps-10 mb-14 px-4">
          {/* ------- ABOUT ------- */}
          <div className="mt-10">
            <h2 className=" text-white text-2xl lg:text-4xl uppercase">
              Who am I?
            </h2>

            <div className="card-about px-4 py-8 mt-10 lg:col-[2/3] lg:row-[1/2] z-30">
              <h2 className="text-lg font-semibold text-purple-500 mb-2">
                Hi !
              </h2>

              <p className="text-gray-200">
                {renderWithParagraphs(t("about.content"))}
              </p>

              <a onClick={openCV} href="">
                <div className="btn-cv text-center text-lg text-white border border-gray-400 w-32 mt-6 px-4 py-3 rounded-lg">
                  RESUME
                </div>
              </a>
            </div>
          </div>

          {/* ------- EDUCATION ------- */}
          <div className="mt-20">
            <h2 className=" text-white text-2xl lg:text-4xl">
              {t("about.subtitle-education")}
            </h2>
            <div className="card-about px-4 py-8 p-4 mt-10 lg:col-[2/3] lg:row-[1/2]">
              <ol className="relative border-s border-gray-200 dark:border-gray-200 ml-4 lg:ml-8">
                <li className="mb-10 ms-6">
                  <div className="w-4 h-4 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-purple-500">
                    Technical degree in Programming
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-300 dark:text-gray-200">
                    National Technological University (UTN), 2024
                  </time>
                </li>

                <li className="mb-10 ms-6">
                  <div className="w-4 h-4 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-400 dark:text-purple-500">
                    Curse English
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    Institute Alfredo Coviello, 2018/2021
                  </time>
                </li>

                <li className="mb-10 ms-6">
                  <div className="w-4 h-4 mt-1 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-purple-500">
                    FullStack Developer
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    RollingCode School, 2022/2023
                  </time>
                </li>

                <li className="ms-6">
                  <div className="w-4 h-4 mt-1 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-purple-500">
                    Higher Technician in Business Administration
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                    Institute Alfredo Coviello, 2018/2021
                  </time>
                </li>
              </ol>
            </div>
          </div>

          {/* ------- WHAT I DO ------- */}
          <div className="mt-20">
            <h2 className=" text-white text-2xl lg:text-4xl">
              {t("about.subtitle-whatido")}
            </h2>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-10">
              <article className="card-about p-4 h-full flex flex-col border border-white/10">
                <h4 className="text-xl font-semibold text-purple-500">
                  {t("about.title-developer")}
                </h4>
                <p className="mt-2 text-gray-200">{t("about.developer")}</p>
              </article>

              <article className="card-about p-4 h-full flex flex-col border border-white/10">
                <h4 className="text-xl font-semibold text-purple-500">
                  {t("about.title-ux/ui")}
                </h4>
                <p className="mt-2 text-gray-200">{t("about.design-ux/ui")}</p>
              </article>

              <article className="card-about p-4 h-full flex flex-col border border-white/10">
                <h4 className="text-xl font-semibold text-purple-500">
                  {t("about.title-ecommerse")}
                </h4>
                <p className="mt-2 text-gray-200">{t("about.ecommerse")}</p>
              </article>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%] lg:block lg:absolute lg:right-0 lg:bottom-0 z-10">
          <img
            className="w-full h-auto max-w-full block object-cover rounded-2xl"
            src="/avatar-about.webp"
            alt="imagen decorativa"
          />
        </div>
      </section>
    </>
  );
};

export default AboutMe;
