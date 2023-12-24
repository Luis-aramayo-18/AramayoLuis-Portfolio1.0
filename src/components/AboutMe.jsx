import React from "react";
import { useTranslation } from "react-i18next";

import "./AboutMe.css";

const AboutMe = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="flex justify-center flex-col lg:flex lg:w-4/5 lg:relative lg:flex-col lg:items-center lg:justify-center lg:h-screen relative z-30 lg:pb-16">
        <section className="w-full mt-6 text-center text-4xl font-light tracking-widest text-white lg:p-0 lg:text-center lg:mt-16">
          <h2 className="">{t("about.title")}</h2>
        </section>

        <section className="card-about border-white p-8 flex items-center mt-12 mx-5 lg:mt-8 lg:mx-14">
          <div className="lg:w-2/6 lg:block hidden">
            <img
              className="w-full h-auto block object-cover"
              src="../../public/about/avatar-about.png"
              alt="imagen avatar"
            />
          </div>

          <div className="about-contain lg:w-4/6 lg:py-20 lg:pr-6 overflow-y-auto">
            <article>
              <div className="flex items-center">
                <h2 className=" text-white text-2xl lg:text-4xl">ARAMAYO LUIS</h2>
                <p className="text-purple-500 ml-5 mt-1 lg:mt-3 lg:ml-4">Argentina</p>
              </div>

              <p className="text-gray-300 mt-4">{t("about.content")}</p>

              <a href="">
                <div className="btn-cv text-center text-lg text-white border border-gray-400 w-32 mt-6 px-4 py-3 rounded-lg">
                  RESUME
                </div>
              </a>
            </article>

            <article className="mt-20">
              <h2 className=" text-white text-2xl lg:text-4xl">
                {t("about.subtitle-education")}
              </h2>
              <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-8 mt-10">
                <li className="mb-10 ms-6">
                  <div className="w-4 h-4 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Curse English
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Curse-English 2023
                  </time>
                </li>
                <li className="mb-10 ms-6">
                  <div className="w-4 h-4 mt-1 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    FullStack Developer
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    RollingCode School, 2022/2023
                  </time>
                </li>
                <li className="ms-6">
                  <div className="w-4 h-4 mt-1 ml-1 bg-purple-500 rounded-full absolute flex items-center justify-center -start-3"></div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Higher Technician in Business Administration
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Institute Alfredo Coviello, 2018-2021
                  </time>
                </li>
              </ol>
            </article>

            <article className="mt-20">
              <h2 className=" text-white text-2xl lg:text-4xl">
                {t("about.subtitle-whatido")}
              </h2>
              <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 mt-10">

                <div className="lg:col-[1/2] lg:row-[1/2] col-[1/3] row-[1/2] border border-gray-400 rounded-2xl p-4">
                  <h4 className="text-xl text-purple-500">
                    {t("about.title-developer")}
                  </h4>
                  <p className="mt-2 text-gray-300">{t("about.developer")}</p>
                </div>

                <div className="lg:col-[2/3] lg:row-[1/2] col-[1/3] row-[2/3] border border-gray-400 rounded-2xl p-4">
                  <h4 className="text-xl text-purple-500">
                    {t("about.title-ux/ui")}
                  </h4>
                  <p className="mt-2 text-gray-300">
                    {t("about.design-ux/ui")}
                  </p>
                </div>

                <div className="lg:col-[1/2] lg:row-[2/3] col-[1/3] border border-gray-400 rounded-2xl p-4">
                  <h4 className="text-xl text-purple-500">
                    {t("about.title-ecommerse")}
                  </h4>
                  <p className="mt-2 text-gray-300">{t("about.ecommerse")}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutMe;
