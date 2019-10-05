import React from 'react';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return(
      <div className="Title">
        <h1>Title Screen</h1>
        <div id="title-page-selection-wrapper">
          <div onClick={() => this.props.handleScreenSelectionClick("game")}>Play Game</div>
          <div onClick={() => this.props.handleScreenSelectionClick("instructions")}>Instructions</div>
        </div>
      </div>
    )
  }
}

export default Title;
