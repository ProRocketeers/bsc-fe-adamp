import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col, Row, Form } from "react-bootstrap";

export const Header = ({ setLanguage }) => {
  const { t } = useTranslation();

  return (
    <Row className="bg-dark pl-4 pr-4 align-items-center">
      <Col>
        <Link to="/">
          <h1 className="text-light">{t("app_title")}</h1>
        </Link>
      </Col>
      <Col xs={1} >
        <Form.Control as="select" onChange={e => setLanguage(e.target.value)}>
          {i18n.languages.map(lang => (
            <option key={lang}>{lang}</option>
          ))}
        </Form.Control>
      </Col>
    </Row>
  );
};
