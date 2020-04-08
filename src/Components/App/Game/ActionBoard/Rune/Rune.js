import React from "react";

class Rune extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <span
        className="Rune"
        onClick={() => {
          this.props.handlePlaceRune(this.props.runeValue);
        }}
      >
        {this.props.runeValue}
      </span>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    });
  }
}

export default Rune;
