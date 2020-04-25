import React from "react";
import r2 from "../../../../../res/img/runes/2.png";
import r3 from "../../../../../res/img/runes/3.png";
import r4 from "../../../../../res/img/runes/4.png";
import r5 from "../../../../../res/img/runes/5.png";
import r6 from "../../../../../res/img/runes/6.png";
import r7 from "../../../../../res/img/runes/7.png";
import r8 from "../../../../../res/img/runes/8.png";
import r9 from "../../../../../res/img/runes/9.png";
import "./Rune.scss";

class Rune extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const runeImgPath =
      "../../../../../res/img/runes/" + this.props.runeValue + ".png";

    return (
      // <span
      //   className="Rune"
      //   onClick={() => {
      //     this.props.handlePlaceRune(this.props.runeValue);
      //   }}
      // >
      //   {this.props.runeValue}
      // </span>
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
