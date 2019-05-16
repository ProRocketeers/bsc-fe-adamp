import React from "react";
import { useTranslation } from "react-i18next";

export const NoteDetail = () => {
  const { t } = useTranslation();

  return <div>{t("language")}</div>;
};
