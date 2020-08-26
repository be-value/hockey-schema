import * as React from "react";
import { ISchedulePageState } from "./ISchedulePageState";
import { ISchedulePageProps } from "./ISchedulePageProps";
import styles from "./SchedulePage.module.css";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import ScheduleContent from "../ScheduleContent/ScheduleContent";
import PageHeader from "../PageHeader/PageHeader";
import { getSchedule } from "../../core/DataProvider";

class SchedulePage extends React.Component<ISchedulePageProps, ISchedulePageState> {
  constructor(props: ISchedulePageProps) {
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
        <PageHeader title={this.props.title}/>
        <div className={styles.AppControl}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch onChange={this.toggleViewExpiredItemsChanged} checked={this.state.viewExpiredItems} color="primary"/>
              }
              label="toon verleden"
            />
          </FormGroup>
          <FormGroup>
          <a href="https://www.rijksoverheid.nl/onderwerpen/coronavirus-covid-19/verkeer-openbaar-vervoer-grensstreek/vervoer-met-de-auto-of-taxi">Corona richtlijnen autovervoer.</a>
          </FormGroup>
        </div>
        <div className={styles.AppBody}>
          <ScheduleContent schedule={getSchedule(this.props.competition)} showExpiredItems={this.state.viewExpiredItems} competition={this.props.competition}/>
        </div>
      </div>
    );
  }
}

export default SchedulePage;