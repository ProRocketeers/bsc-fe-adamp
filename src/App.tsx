import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NoteDetailPage } from "./routes/NoteDetailPage";
import { NoteFormPage } from "./routes/NoteFormPage";
import { NoteListPage } from "./routes/NoteListPage";
import { NotFoundPage } from "./routes/NotFoundPage";
import i18n from "i18next";
import { Header } from "./components/header";

export const App = () => {
  const [lang, setLang] = useState("en");

  return (
    <Router>
      <div className="text-dark">
        <header>
          <Header
            setLanguage={(lang: string) => i18n.changeLanguage(lang, () => setLang(lang))}
          />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={NoteListPage} />
            <Route path="/new" exact component={NoteFormPage} />
            <Route path="/note/:id" exact component={NoteDetailPage} />
            <Route path="/note/:id/edit" exact component={NoteFormPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};