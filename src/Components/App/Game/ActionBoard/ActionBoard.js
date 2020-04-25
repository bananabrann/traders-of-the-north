import React from "react";
import Rune from "./Rune/Rune";
import "./ActionBoard.scss";
import ActionBoardBackground from "../../../../res/img/dashboard.png";
import DrawButton from "../../../../res/img/buttons-action/draw/normal.png";
import DrawButtonPressed from "../../../../res/img/buttons-action/draw/pressed.png"
import BetButton from "../../../../res/img/buttons-action/bet/normal.png";
import BetButtonPressed from "../../../../res/img/buttons-action/bet/pressed.png"
import PassButton from "../../../../res/img/buttons-action/pass/normal.png";
import PassButtonPressed from "../../../../res/img/buttons-action/pass/pressed.png"

class ActionBoard extends React.Component {
  render() {
    const shouldDisplayBetButton = this.props.shouldDisplayBetButton;
    const shouldDisplayDrawButton = this.props.shouldDisplayDrawButton;
    const shouldDisplayPassButton = this.props.shouldDisplayPassButton;
    const shouldAllowRunePlacement = this.props.shouldAllowRunePlacement;

    return (
      <div id="action-board">
        <div id="rune-select-area">
          {shouldAllowRunePlacement
            ? this.props.usersRunes.map((r, i) => {
                return (
                  <Rune
                    key={i}
                    runeValue={r}
                    handlePlaceRune={this.props.handlePlaceRune}
                  />
                );
              })
            : null}
        </div>

        <div id="draw-bet-container">
          {shouldDisplayDrawButton ? (
            <img src={DrawButton} alt="" onClick={() => this.props.draw()} />
          ) : (
            <img src={DrawButtonPressed} alt="" />
            // TODO - onClick={() => displayMessage("you can't do that")}
          ) }

          {shouldDisplayBetButton ? (
            <img src={BetButton} onClick={() => this.props.bet()} />
          ) : (
            <img src={BetButtonPressed} alt="" />
            // TODO - onClick={() => displayMessage("you can't do that")}
          ) }

          {shouldDisplayPassButton ? (
            <img src={PassButton} onClick={() => this.props.pass()} />
          ) : (
            <img src={PassButtonPressed} alt="" />
          ) }
        </div>

        <img src={ActionBoardBackground} alt="" id="action-board-background" />
      </div>
    );
  }
}

export default ActionBoard;
