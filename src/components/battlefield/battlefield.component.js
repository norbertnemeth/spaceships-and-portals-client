import React from "react";
import "../../public/css/app.css";
// import WaitingModal from "../waiting-modal/waiting-modal.component";

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
    const { waiting } = this.state;
    console.log(waiting)
    return (
      <p>{`${waiting}`}</p>
    );
  };
}
