import scheduleJson from "../data/schedule.json";
import playerJson from "../data/players.json";
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

export function calculateStatistics(players: Array<Player>, atDate: Date): void {
  let sched: Array<ScheduleItem> = getSchedule().filter(i => atDate.valueOf() > i.when.valueOf());
  players.forEach(p => {
    p.duty = 0;
    p.missed = 0;
    sched.forEach(si => {
      if (si.who.includes(p.name)) {
        p.duty += 1;
      }

      if (si.exclude.includes(p.name)) {
        p.missed += 1;
      }
    });
  });
}

export function getSchedule(): Array<ScheduleItem> {
  var serialized: string = JSON.stringify(scheduleJson);
  let schedule: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
  return schedule;
}

export function getPlayers(): Array<Player> {
  var serialized: string = JSON.stringify(playerJson);
  let players: Array<Player> = JSON.parse(serialized);
  return players;
}