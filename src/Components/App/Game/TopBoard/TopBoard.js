import React from "react";
import AvailableRunes from "./AvailableRunes/AvailableRunes";
import Portrait from "./Portrait/Portrait";
import Stockpile from "./Stockpile/Stockpile";

import "./TopBoard.scss";

class TopBoard extends React.Component {
  render() {
    return (
      <div id="top-board">
        <div className="player sigrid">
          <Portrait 
            vikingName={this.props.user.firstName}
            />
          <Stockpile
            viking={this.props.user}
            />
          <AvailableRunes 
            runes={this.props.user.runes}
            />
        </div>

        <div className="player ulf">
        
        </div>
      </div>
    );
  }
}

export default TopBoard;
