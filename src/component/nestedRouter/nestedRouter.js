import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Homepage";
import DisplayPage from "./DisplayPage";
import Nab from "./navBar";

let detail = [
  { id: 1, topic: "nepal", detail: "nepali detail" },
  { id: 1, topic: "sociology", detail: "sociology hello itsmi pankaj" },
  { id: 2, topic: "politic", detail: "politic whats up itsmi pankaj" },
  { id: 3, topic: "eng", detail: " english its ok pankaj" },
  { id: 4, topic: "eco", detail: " economichkhoi khoii pankaj" },
  { id: 5, topic: "nep", detail: " nepalihello itsmi pankaj" },
  { id: 6, topic: "acc", detail: " account hhehehehsjhsi pankaj" },
  { id: 7, topic: "math", detail: " maths hkahel ko hioi pankaj" },
  { id: 8, topic: "hinsdi", detail: " hindi kata xas" },
  { id: 9, topic: "fgrench", detail: " french hehka le" },
  { id: 10, topic: "peuroankaj", detail: " peronoma ramrari lekh" },
  { id: 11, topic: "japan", detail: "japan heow is it ok" },
  { id: 12, topic: "hello", detail: "hello hello geloooooo" },
  { id: 13, topic: "gello", detail: " gellow he is this" },
];

let NestedRouter = () => {

  return (
<div>



    <Router>
      <Nab />
      <Switch>
        <Route exact path="/">
          <HomePage data ={detail} />
        </Route>
        <Route exact path={`/display/:topic`} component={DisplayPage} >
        <DisplayPage />
      </Route>
       
      </Switch>
    </Router>
    </div>
  );
};
export default NestedRouter;
