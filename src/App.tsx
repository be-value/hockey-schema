import React from "react";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import { ScheduleItem } from "./core/ScheduleItem";
import schedule from "./schedule.json";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import preval from "preval.macro";

function dateReviver(key: any, value: any): Date|string {
  const dateFormat: any = /^\d{1,2}-\d{1,2}-\d{4}$/;
  if (typeof value === "string" && dateFormat.test(value)) {
    var components: string[] = value.split("-");
    let day: number = Number(components[0]);
    let monthIdx: number = Number(components[1])-1;
    let year: number = Number(components[2]);
    return new Date(year, monthIdx, day);
  }

  return value;
}

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

class App extends React.Component<{}, { viewExpiredItems: boolean}, any> {
  constructor(props: any) {
    super(props);
    this.state = { viewExpiredItems: false};
    this.toggleViewExpiredItemsChanged = this.toggleViewExpiredItemsChanged.bind(this);
  }

  private getSchedule(): any {
    var serialized: string = JSON.stringify(schedule);
    let items: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
    console.log(serialized);
    return items;
  }

  toggleViewExpiredItemsChanged = (event: any, checked: boolean) => {
    this.setState( { viewExpiredItems: checked});
  }

  public render(): JSX.Element {
    const dateTimeStamp: any = preval`module.exports = new Date();`;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            JB1 Rij- en bardienst schema 2019/2020<br/>
            <span>versie: {formatDate(dateTimeStamp)}</span>
          </p>
        </header>
        <div className="App-control">
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch onChange={this.toggleViewExpiredItemsChanged} checked={this.state.viewExpiredItems} color="primary"/>
              }
              label="toon verleden"
            />
          </FormGroup>
        </div>
        <div className="App-body">
          <Schedule schedule={this.getSchedule()} showExpiredItems={this.state.viewExpiredItems} />
        </div>
      </div>
    );
  }
}

export default App;
