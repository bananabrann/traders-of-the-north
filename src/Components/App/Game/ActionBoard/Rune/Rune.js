import React from "react";
import "./Rune.scss";

class Rune extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <img
        className="Rune"
        src={require(`../../../../../res/img/runes/${this.props.runeValue}.png`)}
        alt={`Rune ${this.runeValue}`}
        onClick={() => {
          this.props.handlePlaceRune(this.props.runeValue);
        }}
      />
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    });
  }
}

export default Rune;
