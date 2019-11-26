import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SchedulePage from "../SchedulePage/SchedulePage";
import PlayerPage from "../PlayerPage/PlayerPage";
import { Competition } from "../../core/Competition";

const AppRouter: React.SFC<any> = (props) => {
  return (
    <Router>
      <Route path="/" exact 
             render={(props) => <SchedulePage {...props} title={"Veld JB1 Rij- en bardienst schema"} competition={Competition.FieldJB1}/>} />
      <Route path="/field-jb1-schedule" exact 
             render={(props) => <SchedulePage {...props} title={"Veld JB1 Rij- en bardienst schema"} competition={Competition.FieldJB1}/>} />
      <Route path="/field-jb1-players" exact 
             render={(props) => <PlayerPage {...props} title={"Veld Spelers JB1"} competition={Competition.FieldJB1}/>} />
    </Router>
  );
};

export default AppRouter;