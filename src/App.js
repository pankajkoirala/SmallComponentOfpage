import React from "react";
import "./App.css";

import BurgerComponent from "../src/component/burger/burgerContainer";

function App() {
  return (
    <div className="App">
      <BurgerComponent />
    </div>
  );
}

export default App;
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MoreNlessContainer from "../src/container/lessNmore";
// import OtherFileContainer from "./component/axiosConfig/otherFileContainer";
// import ImageEntryAsBackground from "../src/component/imageAsBackground/imageBackground";
// import Nav from "../src/component/rough/roug";
// import NoticeModule from "./component/Notice_popup_module/module";
// import Test1 from "../src/component/routerTest/test1";
// import Test2 from "../src/component/routerTest/test2";
// import Test3 from "../src/component/routerTest/test3";
// import Index from "./component/privateRouter/index";
// import HidenNavBar from "./component/NavbarType/hiddenWlileScroleNavBar/navbar";
// import NestedRouter from "./component/nestedRouter/nestedRouter";
// //import AutoSearch from "../src/component/autosearch";

/* <OtherFileContainer/>
     <Index />
          <NestedRouter/>
       <HidenNavBar/>
<NoticeModule />
<Nav />
<AutoSearch />
<Switch>
  <Route exact path={`/test1`} component={Test1} />
  <Route exact path={`/test2`} component={Test2} />
  <Route exact path={`/profile`} component={Test3} />
</Switch> */
