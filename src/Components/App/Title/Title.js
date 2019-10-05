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
        Title Screen
      </div>
    )
  }
}

export default Title;
