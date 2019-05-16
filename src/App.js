import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NoteDetail } from "./routes/NoteDetail";
import { NoteForm } from "./routes/NoteForm";
import { NoteList } from "./routes/NoteList";
import { NotFound } from "./routes/NotFound";
import i18n from "i18next";
import { Header } from "./components/header";

class App extends React.Component {
  state = {
    lang: "en"
  };

  setLanguage = lang => {
    i18n.changeLanguage(lang, () => this.setState({ lang }));
  };

  render() {
    return (
      <Router>
        <div>
          <header>
            <Header setLanguage={this.setLanguage} />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={NoteList} />
              <Route path="/new" exact component={NoteForm} />
              <Route path="/note/:id" exact component={NoteDetail} />
              <Route path="/note/:id/edit" exact component={NoteForm} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
