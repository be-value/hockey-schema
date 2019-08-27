import React from "react";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import { ScheduleItem } from "./core/ScheduleItem";
import schedule from "./schedule.json";

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

class App extends React.Component {
  private getSchedule(): any {
    var serialized: string = JSON.stringify(schedule);
    let items: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
    console.log(serialized);
    return items;
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            JB1 Rij- en bardienst schema 2019/2020
          </p>
        </header>
        <div className="App-body">
          <Schedule schedule={this.getSchedule()} showExpiredItems={false} />
        </div>
      </div>
    );
  }
}

export default App;
