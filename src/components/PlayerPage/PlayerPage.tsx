import * as React from "react";
import { IPlayerPageProps } from "./IPlayerPageProps";
import styles from "./PlayerPage.module.css";
import PageHeader from "../PageHeader/PageHeader";
import PlayerContent from "../PlayerContent/PlayerContent";
import { getPlayers, calculateStatistics } from "../../core/CoreServices";
import { Player } from "../../core/Player";

function playerStatistics(): Array<Player> {
  let players: Array<Player> = getPlayers();
  let atDate: Date = new Date(Date.now());
  calculateStatistics(players, atDate);
  return players;
}

const PlayerPage: React.SFC<IPlayerPageProps> = (props) => {
  return (
    <div className={styles.App}>
      <PageHeader title={"Spelers JB1 2019/2020"} url={"/"}/>
      <div className={styles.AppBody}>
         <PlayerContent players={playerStatistics()}/>
      </div>
    </div>
  );
};

export default PlayerPage;
