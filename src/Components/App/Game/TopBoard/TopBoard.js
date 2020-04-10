import React from "react";
import AvailableRunes from "./AvailableRunes/AvailableRunes";
import Portrait from "./Portrait/Portrait";
import Stockpile from "./Stockpile/Stockpile";

import "./TopBoard.scss";

class TopBoard extends React.Component {
  render() {
    console.log("> TopBoard render");
    return (
      <div id="top-board">
        <div className="player sigrid">
          <Portrait vikingName="sigrid" />
          <Stockpile viking={this.props.user} />
          <AvailableRunes runes={this.props.user.runes} />
        </div>

        <div className="player ulf">
          <Portrait vikingName="ulf" />
          <Stockpile viking={this.props.opponent} />
          <AvailableRunes runes={this.props.opponent.runes} />
        </div>
      </div>
    );
  }
}

export default TopBoard;
