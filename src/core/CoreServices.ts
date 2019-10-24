import schedule from "../data/schedule.json";
import players from "../data/players.json";
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

function calculateStatistics(players: Array<Player>, schedule: Array<ScheduleItem>): void {
  players.forEach(p => {
    p.duty = 0;
    p.missed = 0;
    schedule.forEach(si => {
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
  var serialized: string = JSON.stringify(schedule);
  let items: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
  return items;
}

export function getPlayers(): Array<Player> {
  var serialized: string = JSON.stringify(players);
  let items: Array<Player> = JSON.parse(serialized);
  let sched: Array<ScheduleItem> = getSchedule();
  calculateStatistics(items, sched);
  return items;
}