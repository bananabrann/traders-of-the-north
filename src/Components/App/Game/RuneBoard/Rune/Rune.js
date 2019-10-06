import React from 'react';

class Rune extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return <p>{this.props.runeValue}</p>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Rune;
