import React from 'react';

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
        Game Screen
      </div>
    )
  }
}

export default Game;