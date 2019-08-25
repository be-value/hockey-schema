import React from "react";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import { ScheduleItem } from "./core/ScheduleItem";

function dateReviver(key: any, value: any): Date|string {
  const dateFormat: any = /^\d{2}-\d{2}-\d{4}$/;
  if (typeof value === "string" && dateFormat.test(value)) {
    var components: string[] = value.split("-");
    let day: number = Number(components[0]);
    let monthIdx: number = Number(components[1])-1;
    let year: number = Number(components[2]);
    return new Date(year, monthIdx, day);
  }

  return value;
}

function dateReplacer(name: any, value: any): any {
  if (name === "when") {
    let date: Date = new Date(value);
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  }

  return value;
}


class App extends React.Component {
  private getSchedule(): Array<ScheduleItem> {
    // tslint:disable-next-line:quotemark
    var serialized: string = '[{"when":"23-10-2019","what":"Bardienst","where":"Rotterdam","who":["Wim","Zus","Jet"]},{"when":"01-10-2019","what":"Wedstrijd","where":"Waddinxveen","who":["Aap","Noot","Mies"]}]';
    let items: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
    console.log(JSON.stringify(items, dateReplacer, 2));
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
          <Schedule schedule = {this.getSchedule()} />
        </div>
      </div>
    );
  }
}

export default App;
