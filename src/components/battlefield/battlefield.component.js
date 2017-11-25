import React from "react";
import "../../public/css/app.css";
// import WaitingModal from "../waiting-modal/waiting-modal.component";
import Field from "../field/field.component";
import FieldElement from "../field-element/field-element.component";
import Dice from "../dice/dice.component";
import { table, tableSize, playerPositionsWithData, youTurn, ownId } from "./battlefield.mock";
import { fieldSize, extraPadding } from "./battlefield.constans";

export default class Main extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      waiting: true,
      disconnected: false
    };
  };

  componentWillMount() {
    const { socket, setTable } = this.props;
    socket.on('table-generate-success', tableInfos => setTable(tableInfos));
    socket.on('disconnect', () => this.setState({ disconnected: true }));
    socket.on('connect', () => this.setState({ disconnected: false }));
  };

  render() {
    // const { waiting } = this.state;
    // const { table, tableSize, playerPositionsWithData, youTurn, ownId } = this.props;
    const { column, row } = tableSize;
    let columnCounter = 0;
    return (
      <main id="space">
        <h1>
          <span>Spaceships and Portals</span>
        </h1>

        {
          table && <div id="game">
            <div id="board" style={{ width: `${column * fieldSize + extraPadding}px`, height: `${row * fieldSize + extraPadding}px` }}>
              {
                table.map((item, idx) => {
                  const actualRow = Math.ceil((idx + 1) / column) - 1;
                  const top = fieldSize * actualRow;
                  const left = actualRow % 2 ? ((column - 1) * fieldSize) - fieldSize * columnCounter : fieldSize * columnCounter;
                  columnCounter++;
                  if (column === columnCounter) columnCounter = 0;
                  return (
                    <div key={`fieldconstainer_${idx}`}>
                      <Field key={`field_${idx}`} index={idx} top={top} left={left} />
                      {
                        playerPositionsWithData.filter(player => player.position === idx).map(({ character }, index, array) =>
                          <FieldElement key={`player_${index}`} type="player" value={character} extra={array.length > 1 ? "same-cell" : ""} top={top} left={left} />
                        )
                      }
                      {
                        item.type && <FieldElement key={`${item.type}_${idx}`} type={item.type} value={item.value} top={top} left={left} />
                      }
                    </div>
                  )
                })
              }
              <Dice number="X" />
            </div>
          </div>
        }
        <h3>
          <span>{ youTurn === ownId ? "You turn!" : "Opponent turns!" }</span>
        </h3>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />
      </main>
    );
  };
}
