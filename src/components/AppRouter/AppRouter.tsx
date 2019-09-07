import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SchedulePage from "../SchedulePage/SchedulePage";
import PlayerPage from "../PlayerPage/PlayerPage";

const AppRouter: React.SFC<any> = (props) => {
  return (
    <Router>
      <Route path="/" exact component={SchedulePage} />
      <Route path="/schedule" exact component={SchedulePage} />
      <Route path="/players" exact component={PlayerPage} />
    </Router>
  );
};

export default AppRouter;