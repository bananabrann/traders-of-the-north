import React from "react"

class ActionBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldDisplayMessagesTab: true,
      shouldDisplayStockpileTab: false,
      shouldDisplaySettingsTab: false
    }
    // prettier-ignore
    // this.handleInfoBoardTabSelection = this.handleInfoBoardTabSelection.bind(this)
  }

  render() {
    const shouldDisplayBetButton = this.props.shouldDisplayBetButton
    const shouldDisplayDrawButton = this.props.shouldDisplayDrawButton
    const shouldDisplayPassButton = this.props.shouldDisplayPassButton

    return (
      <div>
        {/* {this.props.usersRunes.map((r, i) => {
          return (
            <Rune
              key={i}
              runeValue={r}
              handlePlaceRune={this.props.handlePlaceRune}
            />
          )
        })} */}
          <p>hello from Actionboard</p>
        {/* {shouldDisplayDrawButton ? (
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
        ) : null} */}
      </div>
    )
  }
}

export default ActionBoard
