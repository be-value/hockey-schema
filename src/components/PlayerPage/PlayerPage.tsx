import * as React from "react";
import { IPlayerPageProps } from "./IPlayerPageProps";
import styles from "./PlayerPage.module.css";
import PageHeader from "../PageHeader/PageHeader";
import players from "../../data/players.json";
import { Player } from "../../core/Player";
import PlayerContent from "../PlayerContent/PlayerContent";

function getPlayers(): Array<Player> {
  var serialized: string = JSON.stringify(players);
  let items: Array<Player> = JSON.parse(serialized);
  return items;
}

const PlayerPage: React.SFC<IPlayerPageProps> = (props) => {
  return (
    <div className={styles.App}>
      <PageHeader title={"Spelers JB1 2019/2020"} url={"/"}/>
      <div className={styles.AppBody}>
         <PlayerContent players={getPlayers()}/>
      </div>
    </div>
  );
};

export default PlayerPage;
