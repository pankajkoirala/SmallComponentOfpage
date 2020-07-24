import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoreNlessContainer from "../src/container/lessNmore";
import OtherFileContainer from "./component/axiosConfig/otherFileContainer";
import "./App.css";
import ImageEntryAsBackground from "../src/component/imageAsBackground/imageBackground";
import Nav from "../src/component/rough/roug";
import NoticeModule from "./component/Notice_popup_module/module";
import Test1 from "../src/component/routerTest/test1";
import Test2 from "../src/component/routerTest/test2";
import Test3 from "../src/component/routerTest/test3";
import Index from "./component/privateRouter/index";

function App() {
  return (
    <div className="App">
      <Router>
        
          <Index />
        
      </Router>
    </div>
  );
}

export default App;
//<BurgerComponent/>

{
  /* <OtherFileContainer/>
<NoticeModule />
<Nav />
<Switch>
  <Route exact path={`/test1`} component={Test1} />
  <Route exact path={`/test2`} component={Test2} />
  <Route exact path={`/profile`} component={Test3} />
</Switch> */
}
