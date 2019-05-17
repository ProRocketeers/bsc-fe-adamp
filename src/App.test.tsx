import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { NotesList } from "./components/notesList";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { shallow } from "enzyme";

let t: i18n.TFunction;

beforeAll(() => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init(
      {
        resources: {
          en: { translation: {} },
          cs: { translation: {} }
        },
        lng: "en",
        fallbackLng: ["en", "cs"],
        react: {
          useSuspense: true
        }
      },
      (err, tFunc) => {
        t = tFunc;
      }
    );
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
  const wrapper = shallow(
    <NotesList
      deleteNote={() => new Promise<null>(() => {})}
      notes={notes}
      t={t}
    />
  );
  expect(wrapper).toContainMatchingElements(2, "tbody > tr");
  expect(
    wrapper
      .find("tbody > tr > td:first-child > Link")
      .first()
      .props().children
  ).toBe(notes[0].title);
  expect(
    wrapper
      .find("tbody > tr > td:first-child > Link")
      .last()
      .props().children
  ).toBe(notes[1].title);
});
