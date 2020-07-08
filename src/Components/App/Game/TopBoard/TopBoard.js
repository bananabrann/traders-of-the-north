import React from "react";
import AvailableRunes from "./AvailableRunes/AvailableRunes";
import MessageBoard from "./MessageBoard/MessageBoard";
import Portrait from "./Portrait/Portrait";
import Stockpile from "./Stockpile/Stockpile";
import Utility from "../../../../Utility";
import "./TopBoard.scss";

const log = Utility.log;

class TopBoard extends React.Component {
  render() {
    log("TopBoard", "\trender()");

    return (
      <div id="top-board">
        <div id="info">
          <div className="player sigrid">
            <Portrait vikingName="sigrid" />
            <Stockpile viking={this.props.user} />
            {/* <AvailableRunes runes={this.props.user.runes} /> */}
          </div>

          <div className="player ulf">
            <Portrait vikingName="ulf" />
            <Stockpile viking={this.props.opponent} />
            {/* <AvailableRunes runes={this.props.opponent.runes} /> */}
          </div>
        </div>
        
        {/* <MessageBoard /> */}
      </div>
    );
  }
}

export default TopBoard;
