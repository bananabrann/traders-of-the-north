import React from "react";
import Rune from "./Rune/Rune";

class ActionBoard extends React.Component {
  render() {
    const shouldDisplayBetButton = this.props.shouldDisplayBetButton;
    const shouldDisplayDrawButton = this.props.shouldDisplayDrawButton;
    const shouldDisplayPassButton = this.props.shouldDisplayPassButton;
    const shouldAllowRunePlacement = this.props.shouldAllowRunePlacement;

    return (
      <div id="action-board">
        <p>hello from Actionboard</p>

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

        <div id="button-select-area">
          {shouldDisplayDrawButton ? (
            <div className="action-btn" onClick={() => this.props.draw()}>
              Draw
            </div>
          ) : null}

          {shouldDisplayBetButton ? (
            <div className="action-btn" onClick={() => this.props.bet()}>
              Bet
            </div>
          ) : null}

          {shouldDisplayPassButton ? (
            <div className="action-btn" onClick={() => this.props.pass()}>
              Pass
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ActionBoard;
