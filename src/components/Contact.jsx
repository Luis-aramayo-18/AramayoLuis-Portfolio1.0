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
        <h2 className="text-4xl text-center font-light p-10 tracking-widest text-white">
          {t("contact.title")}
        </h2>

        <section className="grid w-full h-full grid-cols-10 grid-rows-7 p-6 lg:p-6 lg:px-10 gap-6 relative z-30">
          <div className="card-contact col-[1/11] row-[4/8] relative z-40 sm:py-10 lg:p-0 lg:border-2 border border-white lg:w-custom-w lg:col-[1/6] lg:row-[1/8]">
            <article className="hidden lg:block">
              <img
                className="w-full h-96 block object-contain"
                src="/avatar-contact.webp"
                alt="logo animado de un chico posando"
              />
            </article>

            <article className="p-6">
              <h2 className="sm:text-3xl lg:text-2xl text-lg text-white tracking-widest font mb-2">
                {t("contact.subtitle")}
              </h2>
              <p className="text-gray-300 sm:text-lg lg:text-base mt-4 lg:mt-6">{t("contact.content")}</p>
              <h4 className="text-xl sm:text-2xl lg:text-xl text-purple-500 tracking-widest font-semibold mt-4">
                {t("contact.subtitle-2")}
              </h4>
            </article>

            <hr className="ml-6 lg:mt-2 w-3/4" />

            <article className="mt-2 p-6">
              <div className="flex items-center gap-2 text-lg sm:text-2xl lg:text-xl text-white">
                <i className="sm:text-4xl lg:text-2xl bx bx-mobile-alt text-purple-500"></i>
                <p>3815765255</p>
              </div>
              <div className="flex items-center gap-2 text-lg sm:text-2xl lg:text-xl text-white mt-4">
                <i className="sm:text-4xl lg:text-2xl bx bx-map-pin text-purple-500"></i>
                <p>Tucuman, argentina</p>
              </div>
            </article>

            <article className="flex justify-center gap-4 mb-6 mt-2">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/luis-aramayo-171055235/"
                className="icon-linkedin flex items-center gap-2 lg:text-lg text-white border border-gray-300 rounded-lg p-4"
              >
                <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-linkedin"></i>
                <p className="tracking-widest">Linkedin</p>
              </a>
              <a
                href="mailto:Luis.aramayo.18@gmail.com"
                className="icon-gmail flex items-center gap-2 lg:text-lg text-white border border-gray-300 rounded-lg p-4"
              >
                <i className="text-2xl sm:text-4xl lg:text-2xl bx bxl-gmail"></i>
                <p className="tracking-widest">Gmail</p>
              </a>
            </article>
          </div>

          <div className="card-contact relative col-[1/11] row-[1/4] z-30 sm:py-10 lg:p-0 lg:col-[1/12] lg:row-[1/5] lg:mt-20 lg:grid lg:grid-cols-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="col-[6/11] flex flex-col gap-4 p-6 lg:p-10"
            >
              <div className="flex gap-5">
                <input
                  className="w-2/4 p-4 bg-transparent placeholder-white border border-gray-300 text-white rounded-lg"
                  placeholder="Firs Name"
                  type="text"
                  name="user_name"
                  min="3"
                  max="15"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="w-2/4 p-4 bg-transparent placeholder-white border border-gray-300 text-white rounded-lg"
                  placeholder="Last Name"
                  type="text"
                  name="user_lastname"
                  min="3"
                  max="15"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <input
                className="p-4 bg-transparent placeholder-white border border-gray-300 text-white rounded-lg"
                placeholder="Your Email Adress"
                type="email"
                name="user_email"
                min="6"
                max="50"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                className="p-4 pb-16 bg-transparent placeholder-white border border-gray-300 resize-none text-white caret-red-800 rounded-lg"
                placeholder="Message"
                name="message"
                max="200"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div>
                <input
                  className="btn-send bg-transparent border border-gray-300 text-white p-4 w-2/6 rounded-lg"
                  type="submit"
                  value="SEND"
                />
                {sendMessage && (
                  <span className="lg:text-base text-xs ml-3 lg:ml-5 text-green-600">
                    Mensaje enviado correctamente.
                  </span>
                )}
                {errorMessage && (
                  <span className="lg:text-base text-xs ml-3 lg:ml-5 text-red-600">{errorMessage}</span>
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
