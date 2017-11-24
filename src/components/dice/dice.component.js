import React from "react";

export default class Dice extends React.PureComponent {

  render() {
    const { number } = this.props;
    return (
      <div className="dice">
        <p className="nmb">{ number }</p>
        <div className="beam" />
      </div>
    );
  };
}
