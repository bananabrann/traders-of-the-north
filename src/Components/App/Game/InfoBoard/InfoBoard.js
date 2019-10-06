import React from "react"

class InfoBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldDisplayMessagesTab: true,
      shouldDisplayStockpileTab: false,
      shouldDisplaySettingsTab: false
    }
    this.handleInfoBoardTabSelection = this.handleInfoBoardTabSelection.bind(this)
  }

  handleInfoBoardTabSelection(desiredTab) {
    if(desiredTab==="messages") { this.setState({
      shouldDisplayMessagesTab: true,
      shouldDisplayStockpileTab: false,
      shouldDisplaySettingsTab: false
    })} else if (desiredTab === "stockpile") { this.setState({
      shouldDisplayMessagesTab: false,
      shouldDisplayStockpileTab: true,
      shouldDisplaySettingsTab: false
    })} else if (desiredTab === "settings") { this.setState({
      shouldDisplayMessagesTab: false,
      shouldDisplayStockpileTab: false,
      shouldDisplaySettingsTab: true
    })}

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
            <p>Yo here is the stockpiles tab</p>
          ) : null}

          {this.state.shouldDisplaySettingsTab ? (
            <p>Yo here is the settings/options tab</p>
          ) : null}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    })
  }
}

export default InfoBoard
