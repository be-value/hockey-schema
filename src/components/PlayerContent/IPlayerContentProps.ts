import { Player } from "../../core/Player";
import { Competition } from "../../core/Competition";

export interface IPlayerContentProps {
  players: Array<Player>;
  competition: Competition;
}
