import { ScheduleItem } from "../../core/ScheduleItem";
import { Competition } from "../../core/Competition";

export interface IScheduleContentProps {
  schedule: Array<ScheduleItem>;
  showExpiredItems: boolean;
  competition: Competition;
}
