import React from "react";
import Rune from "../Rune/Rune";
import Utility from "../../../../Utility";
import "./ActionBoard.scss";
import ActionBoardBackground from "../../../../res/img/dashboard.png";
import DrawButton from "../../../../res/img/buttons-action/draw/normal.png";
import DrawButtonPressed from "../../../../res/img/buttons-action/draw/pressed.png";
import BetButton from "../../../../res/img/buttons-action/bet/normal.png";
import BetButtonPressed from "../../../../res/img/buttons-action/bet/pressed.png";
import PassButton from "../../../../res/img/buttons-action/pass/normal.png";
import PassButtonPressed from "../../../../res/img/buttons-action/pass/pressed.png";

const devLog = Utility.devLog;

class ActionBoard extends React.Component {
  constructor() {
    super();
    this.handleRuneTransitions = this.handleRuneTransitions.bind(this);
  }

  handleRuneTransitions(isSelectable = false) {
    let runes = document.getElementsByClassName("rune");

    if (isSelectable) {
      for (let i = 0; i < runes.length; i++) {
        devLog(runes[i]);
        runes[i].classList.add("selectable");
      }
    } else {
      for (let i = 0; i < runes.length; i++) {
        devLog(runes[i]);
        runes[i].classList.remove("selectable");
      }
    }
  }

  componentDidUpdate() {
    if (this.props.shouldAllowRunePlacement) this.handleRuneTransitions(true);
    if (!this.props.shouldAllowRunePlacement) this.handleRuneTransitions();
  }

  render() {
    const shouldDisplayBetButton = this.props.shouldDisplayBetButton;
    const shouldDisplayDrawButton = this.props.shouldDisplayDrawButton;
    const shouldDisplayPassButton = this.props.shouldDisplayPassButton;
    const shouldAllowRunePlacement = this.props.shouldAllowRunePlacement;

    return (
      <div id="action-board">
        {/* <div id="button-container">
          {shouldDisplayDrawButton ? (
            <img src={DrawButton} alt="" onClick={() => this.props.draw()} />
          ) : (
            <img src={DrawButtonPressed} alt="" />
            // TODO - onClick={() => displayMessage("you can't do that")}
          )}

          {shouldDisplayBetButton ? (
            <img src={BetButton} onClick={() => this.props.bet()} />
          ) : (
            <img src={BetButtonPressed} alt="" />
            // TODO - onClick={() => displayMessage("you can't do that")}
          )}

          {shouldDisplayPassButton ? (
            <img src={PassButton} onClick={() => this.props.pass()} />
          ) : (
            <img src={PassButtonPressed} alt="" />
          )}
        </div> */}

        <img src={ActionBoardBackground} alt="" id="action-board-background" />
{/* 
        <div id="rune-select-area">
          {this.props.usersRunes.map((r, i) => {
            return (
              <Rune
                key={i}
                runeValue={r}
                handlePlaceRune={this.props.handlePlaceRune}
              />
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default ActionBoard;
