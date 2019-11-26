import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SchedulePage from "../SchedulePage/SchedulePage";
import PlayerPage from "../PlayerPage/PlayerPage";

const AppRouter: React.SFC<any> = (props) => {
  return (
    <Router>
      <Route path="/" exact render={(props) => <SchedulePage {...props} title={"Veld JB1 Rij- en bardienst schema"}/>} />
      <Route path="/schedule" exact render={(props) => <SchedulePage {...props} title={"Veld JB1 Rij- en bardienst schema"}/>} />
      <Route path="/players" exact render={(props) => <PlayerPage {...props} title={"Veld Spelers JB1"} />} />
    </Router>
  );
};

export default AppRouter;