import { ScheduleItem } from "../../core/ScheduleItem";

export interface IScheduleContentProps {
  schedule: Array<ScheduleItem>;
  showExpiredItems: boolean;
}
