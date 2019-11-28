import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { IPlayerContentProps } from "./IPlayerContentProps";
import { Player } from "../../core/Player";
import { Competition } from "../../core/Competition";

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
          { this.props.competition === Competition.FieldJB1 && 
            <Th>positie</Th>
          }
          { this.props.competition === Competition.FieldJB1 && 
            <Th>uitwijk</Th>
          }
          <Th>#missed</Th>
          { this.props.competition === Competition.FieldJB1 && 
            <Th>#bar/rijdienst</Th>
          }
          <Th>bijzonderheden</Th>
        </Tr>
      </Thead>
      <Tbody>
        { this.getPlayers().map((item,key) => {
          return (
        <Tr key={key}>
          <Td>{item.name}</Td>
          { this.props.competition === Competition.FieldJB1 && 
            <Td>{item.position}</Td>
          }
          { this.props.competition === Competition.FieldJB1 && 
            <Td>{item.alternative}</Td>
          }
          <Td>{item.missed}</Td>
          { this.props.competition === Competition.FieldJB1 && 
            <Td>{item.duty}</Td>
          }
          <Td>{content(item.comments)}</Td>
        </Tr>
      );})}
      </Tbody>
    </Table>
    );
  }
}

export default PlayerContent;
