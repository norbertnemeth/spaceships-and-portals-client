import React from "react";

export default class FieldElement extends React.PureComponent {

  render() {
    const { type, value, extra, left = 0, top = 0 } = this.props;
    return (
      <div className={`${type} ${value} ${extra}`} style={{ left, top }} />
    );
  };
}
