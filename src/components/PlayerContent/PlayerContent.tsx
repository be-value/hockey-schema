import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { IPlayerContentProps } from "./IPlayerContentProps";
import { Player } from "../../core/Player";

function content(item: string): string {
  if (item === undefined) {
    return "...";
  }

  return item;
}

class PlayerContent extends React.Component<IPlayerContentProps, {}, any> {
  private getPlayers(): Array<Player> {
    var orderedPlayers: Array<Player> = this.props.players.sort((a, b) =>
    (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

    return orderedPlayers;
  }

  public render(): JSX.Element {
    return (
    <Table>
      <Thead>
        <Tr>
          <Th>Naam</Th>
          <Th>positie</Th>
          <Th>uitwijk</Th>
          <Th>#missed</Th>
          <Th>#bar/rijdienst</Th>
          <Th>bijzonderheden</Th>
        </Tr>
      </Thead>
      <Tbody>
        { this.getPlayers().map((item,key) => {
          return (
        <Tr key={key}>
          <Td>{item.name}</Td>
          <Td>{item.position}</Td>
          <Td>{item.alternative}</Td>
          <Td>{item.missed}</Td>
          <Td>{item.duty}</Td>
          <Td>{content(item.comments)}</Td>
        </Tr>
      );})}
      </Tbody>
    </Table>
    );
  }
}

export default PlayerContent;
