import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HargaBuah from "../tugas11";
import Timer from "../tugas12/timer";
import Lists from "../tugas13/lists";
import Hooks from "../tugas14/lists";
import Fruit from "./Fruit";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timer">Timer</Link>
            </li>
            <li>
              <Link to="/lists">List dengan Class</Link>
            </li>
            <li>
              <Link to="/hook-lists">List dengan Hooks</Link>
            </li>
            <li>
              <Link to="/context-lists">List dengan Context</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/timer">
            <Timer start={100} />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/hook-lists">
            <Hooks />
          </Route>
          <Route path="/context-lists">
            <Fruit />
          </Route>
          <Route path="/">
            <HargaBuah />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}