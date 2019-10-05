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
      <div>
        Game Screen
      </div>
    )
  }
}

export default Game;