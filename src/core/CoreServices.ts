import { ScheduleItem } from "./ScheduleItem";
import { Player } from "./Player.js";
import { getSchedule } from "./DataProvider"

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
