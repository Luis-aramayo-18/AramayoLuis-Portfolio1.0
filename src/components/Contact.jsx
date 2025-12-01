import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation("global");
  const [sendMessage, setSendMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cjunl08",
        "template_wt79ny4",
        form.current,
        "tE59eCf1GscLLfKQo"
      )
      .then(
        (result) => {
          setSendMessage(true);
          setName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSendMessage(false);
          }, 2500);
        },
        (error) => {
          setErrorMessage(error.text);
        }
      );
  };

  return (
    <>
      <section className="z-30 lg:w-4/5 lg:h-full lg:overflow-y-auto lg:relative">
        <section className="grid w-full h-full grid-cols-10 grid-rows-7 lg:px-10 gap-6 relative z-30 mt-10">
          <div className="card-contact col-[1/11] row-[4/8] relative z-40 sm:py-10 lg:py-6 lg:border-2 border border-white lg:w-custom-w lg:col-[6/12] lg:row-[1/8]">
            <article className="p-6">
              <h2 className="sm:text-3xl lg:text-2xl text-lg text-white tracking-widest font mb-2">
                {t("contact.subtitle")}
              </h2>
              <p className="text-gray-300 sm:text-lg lg:text-base mt-4 lg:mt-6">
                {t("contact.content")}
              </p>
              <h4 className="text-xl sm:text-2xl lg:text-xl text-purple-500 tracking-widest font-semibold mt-4">
                {t("contact.subtitle-2")}
              </h4>
            </article>

            <article className="px-6">
              <div className="flex items-center gap-3 text-lg sm:text-2xl lg:text-xl text-white">
                <i className="sm:text-4xl lg:text-lg bx bx-mobile-alt text-purple-500"></i>
                <p className="text-[18px] font-medium">+54 9 381 576-5255</p>
              </div>
              <div className="flex items-center gap-3 text-lg sm:text-2xl lg:text-xl text-white mt-2">
                <i className="sm:text-4xl lg:text-lg bx bx-map-pin text-purple-500"></i>
                <p className="text-[18px] font-medium">
                  San Miguel de Tucuman, Argentina
                </p>
              </div>
            </article>

            <hr className="ml-6 lg:mt-10 w-3/4" />

            <article className="hidden lg:block mt-5">
              <img
                className="w-full h-96 block object-contain"
                src="/avatar-contact.webp"
                alt="logo animado de un chico posando"
              />
            </article>

            <article className="flex justify-center gap-4 mb-6 mt-2">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/luis-aramayo-171055235/"
                className="w-[30%] flex items-center justify-center gap-2 lg:text-lg text-white border border-gray-300 rounded-lg p-3 transition duration-300
                 hover:bg-blue-700 hover:border-blue-700"
              >
                <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-linkedin"></i>
                <p className="tracking-widest">Linkedin</p>
              </a>

              <a
                href="mailto:Luis.aramayo.18@gmail.com"
                className="w-[30%] flex items-center justify-center gap-2 lg:text-lg text-white border border-gray-300 rounded-lg p-3 transition duration-300
                 hover:bg-red-600 hover:border-red-600"
              >
                <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-gmail"></i>
                <p className="tracking-widest">Gmail</p>
              </a>
            </article>
          </div>

          <div className="card-contact relative col-[1/11] row-[1/4] z-30 sm:py-10 lg:p-0 lg:col-[1/12] lg:row-[1/5] lg:mt-10 lg:grid lg:grid-cols-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="col-[1/6] flex flex-col gap-4 lg:py-8 ps-5"
            >
              <input
                className="w-[90%] p-2 bg-transparent placeholder-white placeholder:text-sm border-b border-gray-300 focus:border-purple-500 focus:outline-none text-white rounded-none transition duration-300"
                placeholder="Your Email Address"
                type="email"
                name="user_email"
                min="6"
                max="50"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* CAMBIO: Usar border-b y eliminar border-gray-300 */}
              <textarea
                className="w-[90%] mt-5 p-2 pb-48 bg-transparent placeholder-white placeholder:text-sm border-b border-gray-300 focus:border-purple-500 focus:outline-none resize-none text-white caret-red-800 rounded-none transition duration-300"
                placeholder="Message"
                name="message"
                max="200"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="mt-3">
                <input
                  className="btn-send bg-transparent border border-gray-300 text-white p-3 w-2/6 rounded-lg hover:bg-purple-500 hover:border-purple-500 transition duration-300 cursor-pointer"
                  type="submit"
                  value="SEND"
                />
                {sendMessage && (
                  <span className="lg:text-base text-xs ml-3 lg:ml-5 text-green-600">
                    Mensaje enviado correctamente.
                  </span>
                )}
                {errorMessage && (
                  <span className="lg:text-base text-xs ml-3 lg:ml-5 text-red-600">
                    {errorMessage}
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
