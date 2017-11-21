import React from "react";
import "./main.css";
import "../../public/css/app.css";

export default class Main extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      boardSize: 6,
      portals: 5,
      rockets: 4
    };
    this.handleBoardSizeChange = event => this.setState({ boardSize: event.target.value });
    this.handlePortalNumberChange = event => this.setState({ portals: event.target.value });
    this.handleRocketNumberChange = event => this.setState({ rockets: event.target.value });
    this.handleUserInputChange = event => this.setState({ username: event.target.value });
    this.handleStartButtonClick = event => { if (this.state.username.length > 0) console.log('11'), this.props.socket.emit('start', this.state) };
  };

  componentWillMount() {
    const { socket, setId } = this.props;
    // t1his.socket.emit('chat mounted', user);
    socket.on('game-started', id => setId(id)
    );
  };
  componentWillUnmount() {
    // const { socket } = this.props;
    // socket.removeAllListeners(); //nem törli-e véletlen a kövi komponensét?
  };

  render() {
    const { username } = this.state;
    return (
      <main id="space">
        <h1><span>Spaceships and Portals</span></h1>
        <div id="game">
          <div id="login">
            <h2><span>Start Game!</span></h2>
            <p>This is the quick <span>Snakes and Ladders</span> Spaceships and Portals game of Team Rocket!<br />
              To play add your name and hit Start Game!</p>
            <div className="start">
              <input type="text" value={username} onChange={this.handleUserInputChange} />
              <button onClick={this.handleStartButtonClick}>Start game</button>
            </div>
            <div className="start-settings">
              <label for="board-size">Board Size
                <select id="board-size" defaultValue="6" onChange={this.handleBoardSizeChange}>
                  <option value="5">5 x 5</option>
                  <option value="6">6 x 6</option>
                  <option value="7">7 x 7</option>
                  <option value="8">8 x 8</option>
                </select>
              </label>
              <br />
              <label for="portals">Number of Portals
                <select id="portals" defaultValue="5" onChange={this.handlePortalNumberChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <br />
              <label for="rockets">Number of Rockets
                <select id="rockets" defaultValue="4" onChange={this.handleRocketNumberChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
            </div>
            <div className="start-rocket"></div>
          </div>
        </div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </main>
    );
  };
}
