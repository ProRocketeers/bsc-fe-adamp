import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import App from "./App";
import cs from "./assets/cs_i18n";
import en from "./assets/en_i18n";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      cs: {
        translation: cs
      }
    },
    lng: "en",
    fallbackLng: ["en", "cs"]
  });

ReactDOM.render(<App />, document.getElementById("root"));
