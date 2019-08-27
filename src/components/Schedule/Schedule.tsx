import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { IScheduleProps } from "./IScheduleProps";
import { ScheduleItem } from "../../core/ScheduleItem";

class Schedule extends React.Component<IScheduleProps, {}, any> {
  private getSchedule(): Array<ScheduleItem> {
    var items: Array<ScheduleItem> = this.props.schedule.sort((a, b) => {
      var dateA: any = a.when;
      var dateB: any = b.when;
      return (dateA - dateB);});

    if (!this.props.showExpiredItems) {
      items = items.filter(i => Date.now() <= i.when.valueOf());
    }

    return items;
  }

  public render(): JSX.Element {
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Wanneer</Th>
            <Th>Wat</Th>
            <Th>Waar</Th>
            <Th>Wie</Th>
            <Th>Bijzonderheden</Th>
          </Tr>
        </Thead>
        <Tbody>
          { this.getSchedule().map((item,key) => {
            return (
            <Tr key={key} className={Date.now() > item.when.valueOf() ? "expired" : "active"}>
              <Td>{item.when.toLocaleDateString("nl-NL", {year: "numeric", month: "long", day: "numeric"})}</Td>
              <Td>{item.what}</Td>
              <Td>{item.where}</Td>
              <Td>{item.who.join(", ")}</Td>
              <Td>{item.comment}</Td>
            </Tr>
          );})}
        </Tbody>
      </Table>
    );
  }
}

export default Schedule;
