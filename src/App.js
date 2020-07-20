import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreLessButton from "../src/component/lessAndmore/morelessButton";
import "./App.css";
import ImageEntryAsBackground from "../src/component/imageAsBackground/imageBackground";
import Nav from "../src/component/rough/roug";
import  NoticeModule from "./component/Notice_popup_module/module"

function App() {
  return (
    <div className="App">

      <Router>
        <NoticeModule/>
        <Nav />
        <Switch>
         <Route exact path="/moreless"> <MoreLessButton /></Route>
          <Route exact path="/"><ImageEntryAsBackground /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//<BurgerComponent/>
