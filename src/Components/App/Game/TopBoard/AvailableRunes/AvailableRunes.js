import React from "react";
import Rune from "../../ActionBoard/Rune/Rune";

class AvailableRunes extends React.Component {
  render() {
    return (
      <div>
        {this.props.runes.map((r, i) => {
          return (
            <span className="available-rune-wrapper" id={r}>
              {/* <Rune key={i} runeValue={r} handlePlaceRune={null} /> */}
              <p>{r}</p>
            </span>
          );
        })}
      </div>
    );
  }
}

export default AvailableRunes;
