import fieldJB1ScheduleJson from "../data/field.jb1.schedule.json";
import fieldJB1PlayersJson from "../data/field.jb1.players.json";
import { ScheduleItem } from "./ScheduleItem";
import { Player } from "./Player.js";

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

export function getSchedule(): Array<ScheduleItem> {
  let serialized: string = JSON.stringify(fieldJB1ScheduleJson);
  let schedule: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
  return schedule;
}

export function getPlayers(): Array<Player> {
  let serialized: string = JSON.stringify(fieldJB1PlayersJson);
  let players: Array<Player> = JSON.parse(serialized);
  return players;
}