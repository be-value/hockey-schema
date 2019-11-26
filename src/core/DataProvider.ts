import fieldJB1ScheduleJson from "../data/field.jb1.schedule.json";
import fieldJB1PlayersJson from "../data/field.jb1.players.json";
import indoorJB1ScheduleJson from "../data/indoor.jb1.schedule.json";
import indoorJB1PlayersJson from "../data/indoor.jb1.players.json";
import indoorJB2ScheduleJson from "../data/indoor.jb2.schedule.json";
import indoorJB2PlayersJson from "../data/indoor.jb2.players.json";
import { ScheduleItem } from "./ScheduleItem";
import { Player } from "./Player";
import { Competition } from "./Competition";

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

function getScheduleJson(competition: Competition) : any {
  if (competition === Competition.FieldJB1) {
    return fieldJB1ScheduleJson;
  }

  if (competition === Competition.IndoorJB1) {
    return indoorJB1ScheduleJson;
  }

  if (competition === Competition.IndoorJB2) {
    return indoorJB2ScheduleJson;
  }

  return {};
}

function getPlayersJson(competition: Competition) : any {
  if (competition === Competition.FieldJB1) {
    return fieldJB1PlayersJson; 
  }

  if (competition === Competition.IndoorJB1) {
    return indoorJB1PlayersJson;
  }
  
  if (competition === Competition.IndoorJB2) {
    return indoorJB2PlayersJson;
  }
  
  return {};
}

export function getSchedule(competition: Competition): Array<ScheduleItem> {
  let serialized: string = JSON.stringify(getScheduleJson(competition));
  let schedule: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
  return schedule;
}

export function getPlayers(competition: Competition): Array<Player> {
  let serialized: string = JSON.stringify(getPlayersJson(competition));
  let players: Array<Player> = JSON.parse(serialized);
  return players;
}