import React from 'react';

import "./Game.scss"

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return(
      <div id="Game">
        <h1>Game Screen</h1>
        <div onClick={() => this.props.handleScreenSelectionClick("title")}>Title</div>
      </div>
    )
  }
}

export default Game;