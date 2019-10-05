import React from 'react';

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return(
      <div id="Instructions">
        Instructions Screen
      </div>
    )
  }
}

export default Instructions;