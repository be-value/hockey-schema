import * as React from "react";
import { ISchedulePageState } from "./ISchedulePageState";
import { ISchedulePageProps } from "./ISchedulePageProps";
import styles from "./SchedulePage.module.css";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import ScheduleContent from "../ScheduleContent/ScheduleContent";
import PageHeader from "../PageHeader/PageHeader";
import { getSchedule } from "../../core/DataProvider";

class SchedulePage extends React.Component<ISchedulePageProps, ISchedulePageState> {
  constructor(props: any) {
    super(props);
    this.state = { viewExpiredItems: false};
    this.toggleViewExpiredItemsChanged = this.toggleViewExpiredItemsChanged.bind(this);
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
          <ScheduleContent schedule={getSchedule()} showExpiredItems={this.state.viewExpiredItems} />
        </div>
      </div>
    );
  }
}

export default SchedulePage;