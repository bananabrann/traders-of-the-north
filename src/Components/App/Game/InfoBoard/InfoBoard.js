import React from "react"

class InfoBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldDisplayMessagesTab: true,
      shouldDisplayStockpileTab: false,
      shouldDisplaySettingsTab: false
    }
    // prettier-ignore
    this.handleInfoBoardTabSelection = this.handleInfoBoardTabSelection.bind(this)
  }

  handleInfoBoardTabSelection(desiredTab) {
    if (desiredTab === "messages") {
      this.setState({
        shouldDisplayMessagesTab: true,
        shouldDisplayStockpileTab: false,
        shouldDisplaySettingsTab: false
      })
    } else if (desiredTab === "stockpile") {
      this.setState({
        shouldDisplayMessagesTab: false,
        shouldDisplayStockpileTab: true,
        shouldDisplaySettingsTab: false
      })
    } else if (desiredTab === "settings") {
      this.setState({
        shouldDisplayMessagesTab: false,
        shouldDisplayStockpileTab: false,
        shouldDisplaySettingsTab: true
      })
    }

                    // BUG: Why does the above work but not the below?

                    // (desiredTab === "messages") ? this.setState({
                    //   shouldDisplayMessagesTab: true,
                    //   shouldDisplayStockpileTab: false,
                    //   shouldDisplaySettingsTab: false
                    // }) : void(0)

                    // (desiredTab === "stockpile") ? this.setState({
                    //   shouldDisplayMessagesTab: false,
                    //   shouldDisplayStockpileTab: true,
                    //   shouldDisplaySettingsTab: false
                    // }) : void(0)

                    // (desiredTab === "settings") ? this.setState({
                    //   shouldDisplayMessagesTab: false,
                    //   shouldDisplayStockpileTab: false,
                    //   shouldDisplaySettingsTab: true
                    // }) : void(0)
  }

  render() {
    const user = this.props.state.user
    const opponent = this.props.state.opponent

    return (
      <div>
        <div id="tab-headers">
          {/* prettier-ignore */}
          <div className="head" onClick={() => this.handleInfoBoardTabSelection("messages")}>M</div>
          {/* prettier-ignore */}
          <div className="head" onClick={() => this.handleInfoBoardTabSelection("stockpile")}>S</div>
          {/* prettier-ignore */}
          <div className="head" onClick={() => this.handleInfoBoardTabSelection("settings")}>O</div>
        </div>

        <div id="tab-content">
          {this.state.shouldDisplayMessagesTab ? (
            <p>Yo here is the messages tab</p>
          ) : null}

          {this.state.shouldDisplayStockpileTab ? (
            <div>
              <p>Yo here is the stockpiles tab</p>
              <div>
                <h3>User</h3>
                <p>Total Score: WIP</p>
                <p>Gold: {user.gold}</p>
                <p>Fish: {user.fish}</p>
                <p>Totems: {user.totem}</p>
                <p>Seaweed: {user.seaweed}</p>
              </div>
              <div>
                <h3>Opponent</h3>
                <p>Total Score: WIP</p>
                <p>Gold: {opponent.gold}</p>
                <p>Fish: {opponent.fish}</p>
                <p>Totems: {opponent.totem}</p>
                <p>Seaweed: {opponent.seaweed}</p>
              </div> 
            </div>
          ) : null}

          {this.state.shouldDisplaySettingsTab ? (
            <p>Yo here is the settings/options tab</p>
          ) : null}
        </div>
      </div>
    )
  }
}

export default InfoBoard
