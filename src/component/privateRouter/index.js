import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "./navbar/loginForm"
import NavBar from "./navbar/navbar"



const ShareContainer = () => {
  return (
    <div>

      <Switch>
        <PrivateRoute
          component={NavBar}
          exact
          path="/adminpage"
        />
        <Route exact path="/login"><Login/></Route>

      </Switch>
    </div>
  );
};
export default ShareContainer;
