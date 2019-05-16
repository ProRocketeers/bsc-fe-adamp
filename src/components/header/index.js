import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export const Header = ({ setLanguage }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("app_title")}</h1>

      <select onChange={e => setLanguage(e.target.value)}>
        {i18n.languages.map(lang => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};
