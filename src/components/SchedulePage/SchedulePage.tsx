import * as React from "react";
import { ISchedulePageState } from "./ISchedulePageState";
import { ISchedulePageProps } from "./ISchedulePageProps";
import schedule from "../../data/schedule.json";
import styles from "./SchedulePage.module.css";
import { ScheduleItem } from "../../core/ScheduleItem";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import ScheduleContent from "../ScheduleContent/ScheduleContent";
import PageHeader from "../PageHeader/PageHeader";

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

class SchedulePage extends React.Component<ISchedulePageProps, ISchedulePageState> {
  constructor(props: any) {
    super(props);
    this.state = { viewExpiredItems: false};
    this.toggleViewExpiredItemsChanged = this.toggleViewExpiredItemsChanged.bind(this);
  }

  private getSchedule(): any {
    var serialized: string = JSON.stringify(schedule);
    let items: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
    return items;
  }

  toggleViewExpiredItemsChanged = (event: any, checked: boolean) => {
    this.setState( { viewExpiredItems: checked });
  }

  public render(): JSX.Element {
    return (
      <div className={styles.App}>
        <PageHeader title={"JB1 Rij- en bardienst schema 2019/2020"} url={"/players"}/>
        <div className={styles.AppControl}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch onChange={this.toggleViewExpiredItemsChanged} checked={this.state.viewExpiredItems} color="primary"/>
              }
              label="toon verleden"
            />
          </FormGroup>
        </div>
        <div className={styles.AppBody}>
          <ScheduleContent schedule={this.getSchedule()} showExpiredItems={this.state.viewExpiredItems} />
        </div>
      </div>
    );
  }
}

export default SchedulePage;