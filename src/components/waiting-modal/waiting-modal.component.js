import React from "react";

export default class WaitingModal extends React.PureComponent {

  render() {
    const { text } = this.props;
    return (
      <p>{ text }</p>
    );
  };
}
