import schedule from "../data/schedule.json";
import { ScheduleItem } from "./ScheduleItem";

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
  var serialized: string = JSON.stringify(schedule);
  let items: Array<ScheduleItem> = JSON.parse(serialized, dateReviver);
  return items;
}