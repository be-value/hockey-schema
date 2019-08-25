import React from "react";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";
import { ScheduleItem } from "./core/ScheduleItem";

class App extends React.Component {

  private getSchedule(): Array<ScheduleItem> {
    let items: Array<ScheduleItem> = new Array<ScheduleItem>();
    let item1: ScheduleItem = new ScheduleItem();
    item1.when = new Date(2019, 9, 1);
    item1.what = "Wedstrijd";
    item1.where = "Waddinxveen";
    item1.who = ["Aap", "Noot", "Mies"];
    let item2: ScheduleItem = new ScheduleItem();
    item2.when = new Date(2019, 9, 23);
    item2.what = "Bardienst";
    item2.where = "Rotterdam";
    item2.who = ["Wim", "Zus", "Jet"];
    items.push(item2);
    items.push(item1);
    console.log(JSON.stringify(items, null, 2));
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
