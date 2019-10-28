import React from "react"

class ButtonBoard extends React.Component {

  shouldComponentUpdate() { }                     // TODO: Make buttons hide when it is not the user's turn

  render() {
    // TODO: I think these can be refactored into a props spread opperator
    const shouldDisplayBetButton = this.props.shouldDisplayBetButton
    const shouldDisplayDrawButton = this.props.shouldDisplayDrawButton
    const shouldDisplayPassButton = this.props.shouldDisplayPassButton

    return (
      <div>
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
    )
  }
}

export default ButtonBoard
