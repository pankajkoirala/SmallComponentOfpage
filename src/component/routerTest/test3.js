import React, { Component } from "react";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import Display from "./display";
let jsfile = ["muna", "puja", "pankaj"];

function App() {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div className="App">
     
      <Switch>
      <Route path={`${url}/:topicId`} component={Display} />
        
        
      </Switch>
      {jsfile.map((arg) => {
        return (
          <h1>
            <Link to={`/profile/${arg}`}>{arg}</Link>{" "}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
//<BurgerComponent/>
