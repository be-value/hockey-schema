import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { IScheduleProps } from "./IScheduleProps";
import styles from "./Schedule.module.scss";

const Schedule: React.SFC<IScheduleProps> = (props) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Wanneer</Th>
          <Th>Wat</Th>
          <Th>Waar</Th>
          <Th>Wie</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>14 September 2019</Td>
          <Td>Wedstrijd</Td>
          <Td>Drachten</Td>
          <Td>Jan, Piet, Klaas</Td>
        </Tr>
        <Tr>
          <Td>5 Oktober 2019</Td>
          <Td>Wedstrijd</Td>
          <Td>Hoogezand</Td>
          <Td>Wim, Robert, Ate</Td>
        </Tr>
        <Tr>
          <Td>12 Oktober 2019</Td>
          <Td>Bardienst</Td>
          <Td>Clubhuis MHCL</Td>
          <Td>Wietse, Mattie, Giel</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default Schedule;
