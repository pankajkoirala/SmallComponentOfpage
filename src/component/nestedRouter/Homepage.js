import React,{useState} from "react";
import { Link, Switch,Route } from "react-router-dom";
import DisplayPage from "./DisplayPage"

let HomePage = (props) => {
  return (
    <div>
      hello home
      {props.data.map((arg) => {
        return <Link to={`/display/${arg.topic}`}>{arg.topic} </Link>;
      })}

    
    </div>
  );
};
export default HomePage;
