import React from "react";
import "./Rune.scss";

class Rune extends React.Component {
  render() {
    if (this.props.isTopboardRune) {
      return (
        <img
          className="topboard-rune"
          src={require(`../../../../../res/img/runes/${this.props.runeValue}.png`)}
          alt={`A stony rune with a value of ${this.runeValue}`}
          onClick={null}
        />
      )
    } else {
      return (
        <img
          className="rune"
          src={require(`../../../../../res/img/runes/${this.props.runeValue}.png`)}
          alt={`Rune ${this.runeValue}`}
          onClick={() => {
            this.props.handlePlaceRune(this.props.runeValue);
          }}
        />
      );
    }

  }
}

export default Rune;
