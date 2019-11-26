import * as React from "react";
import { IPlayerPageProps } from "./IPlayerPageProps";
import styles from "./PlayerPage.module.css";
import PageHeader from "../PageHeader/PageHeader";
import PlayerContent from "../PlayerContent/PlayerContent";
import { calculateStatistics } from "../../core/CoreServices";
import { getPlayers } from "../../core/DataProvider";
import { Player } from "../../core/Player";
import { Competition } from "../../core/Competition";

function playerStatistics(competition: Competition, atDate: Date): Array<Player> {
  let players: Array<Player> = getPlayers(competition);
  calculateStatistics(competition, players, atDate);
  return players;
}

const PlayerPage: React.SFC<IPlayerPageProps> = (props) => {
  let atDate: Date = new Date(Date.now()); // new Date(2019, 11, 1);
  return (
    <div className={styles.App}>
      <PageHeader title={props.title}/>
      <div className={styles.AppBody}>
         {/* <span>{atDate.toDateString()}</span> */}
         <PlayerContent players={playerStatistics(props.competition, atDate)} competition={props.competition}/>
      </div>
    </div>
  );
};

export default PlayerPage;
