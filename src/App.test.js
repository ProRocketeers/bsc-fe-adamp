import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { NoteList } from "./components/noteList";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { shallow } from "enzyme";

beforeAll(() => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: { translation: {} },
        cs: { translation: {} }
      },
      lng: "en",
      fallbackLng: ["en", "cs"],
      react: {
        useSuspense: true
      }
    });
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const notes = [
  {
    id: 1,
    title: "title1"
  },
  {
    id: 2,
    title: "title2"
  }
];

it("renders list of notes correctly", () => {
  const wrapper = shallow(<NoteList notes={notes} t={() => ""} />);
  expect(wrapper).toContainMatchingElements(2, "tbody > tr");
  expect(
    wrapper
      .find("tbody > tr > td > Link")
      .first()
      .props().children
  ).toBe(notes[0].title);
  expect(
    wrapper
      .find("tbody > tr > td > Link")
      .last()
      .props().children
  ).toBe(notes[1].title);
});
