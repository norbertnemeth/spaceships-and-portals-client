import React from "react";

export default class Dice extends React.PureComponent {

  render() {
    const { number, diceAttempt } = this.props;
    return (
      <div className="dice" onClick={diceAttempt}>
        <p className="nmb">{ number }</p>
        <div className="beam" />
      </div>
    );
  };
}
