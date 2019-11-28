import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SchedulePage from "../SchedulePage/SchedulePage";
import PlayerPage from "../PlayerPage/PlayerPage";
import { Competition } from "../../core/Competition";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./AppRouter.module.css";
import preval from "preval.macro";

function formatDate(buildtime: any): string {
  var timestamp: Date = new Date(buildtime);
  var dd: number = timestamp.getDate();
  var MM: number = timestamp.getMonth()+1; // january = 0
  var YY: number = timestamp.getFullYear();
  var HH: number = timestamp.getHours();
  var mm: number = timestamp.getMinutes();
  var ss: number = timestamp.getSeconds();
  return `${dd}-${MM}-${YY} ${HH}:${mm}:${ss}`;
}

const AppRouter: React.SFC<any> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dateTimeStamp: any = preval`module.exports = new Date();`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (    
    <Router>
      <div className={styles.Version}>version {formatDate(dateTimeStamp)}</div>     
      <div className={styles.Menu}>
        <Button className={styles.MenuButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
          Competitie 
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><Link to="/field-jb1-schedule">Veld JB1 Schema</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/field-jb1-players">Veld JB1 Spelers</Link></MenuItem>
          {/* <MenuItem onClick={handleClose}><Link to="/indoor-jb1-schedule">Zaal JB1 Schema</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/indoor-jb1-players">Zaal JB1 Spelers</Link></MenuItem>*/}
          <MenuItem onClick={handleClose}><Link to="/indoor-jb2-schedule">Zaal JB2 Schema</Link></MenuItem>
          {/* <MenuItem onClick={handleClose}><Link to="/indoor-jb2-players">Zaal JB2 Spelers</Link></MenuItem>  */}
        </Menu>
      </div>
      <Route path="/" exact 
             render={(props) => <SchedulePage {...props} title={"Veld JB1 Rij- en bardienst schema"} competition={Competition.FieldJB1}/>} />
      <Route path="/field-jb1-schedule" exact 
             render={(props) => <SchedulePage {...props} title={"Veld JB1 Rij- en bardienst schema"} competition={Competition.FieldJB1}/>} />
      <Route path="/field-jb1-players" exact 
             render={(props) => <PlayerPage {...props} title={"Veldspelers JB1"} competition={Competition.FieldJB1}/>} />
      <Route path="/indoor-jb1-schedule" exact 
             render={(props) => <SchedulePage {...props} title={"Zaal JB1 Rij- en bardienst schema"} competition={Competition.IndoorJB1}/>} />
      <Route path="/indoor-jb1-players" exact 
             render={(props) => <PlayerPage {...props} title={"Zaalspelers JB1"} competition={Competition.IndoorJB1}/>} />
      <Route path="/indoor-jb2-schedule" exact 
             render={(props) => <SchedulePage {...props} title={"Zaal JB2 Rij- en bardienst schema"} competition={Competition.IndoorJB2}/>} />
      <Route path="/indoor-jb2-players" exact 
             render={(props) => <PlayerPage {...props} title={"Zaalspelers JB2"} competition={Competition.IndoorJB2}/>} />
    </Router>
  );
};

export default AppRouter;