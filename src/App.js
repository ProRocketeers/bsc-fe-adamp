import React from 'react';
import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import {NoteDetail} from "./routes/NoteDetail";
import {NoteForm} from "./routes/NoteForm";
import {NoteList} from "./routes/NoteList";
import {NotFound} from "./routes/NotFound";

const App = () => (
  <Router>
    <div>
      <header>
        <h1>
          Definitely original note app
        </h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={NoteList} />
          <Route path="/new" exact component={NoteForm} />
          <Route path="/note/:id" exact component={NoteDetail} />
          <Route path="/note/:id/edit" exact omponent={NoteForm} />
          <Route component={NotFound}/>
        </Switch>
      </main>
    </div>
  </Router>
)

export default App;
