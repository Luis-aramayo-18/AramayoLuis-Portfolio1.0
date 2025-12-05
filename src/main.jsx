import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["es", "en"];

const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get("lang");

const initialLanguage =
  urlLang && SUPPORTED_LANGUAGES.includes(urlLang) ? urlLang : DEFAULT_LANGUAGE;

i18next.init({
  interpolation: { escapeValue: false },
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  resources: {
    es: {
      global: es,
    },
    en: {
      global: en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
