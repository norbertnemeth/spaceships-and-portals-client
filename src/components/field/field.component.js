import React from "react";

export default class Field extends React.PureComponent {

  render() {
    const { index, left = 0, top = 0 } = this.props;
    return (
      <div id={index} className="cell" style={{ left, top }}>
        <p className="nmb">{index}</p>
      </div>
    );
  };
}
