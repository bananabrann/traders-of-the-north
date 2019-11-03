import React from "react"

class InfoBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      shouldDisplayMessagesTab: true,
      shouldDisplayStockpileTab: false,
      shouldDisplaySettingsTab: false,
      userTotalPoints: 0,
      opponentTotalPoints: 0
    }
    // prettier-ignore
    this.handleInfoBoardTabSelection = this.handleInfoBoardTabSelection.bind(this)
    this.handleScoreCalculations = this.handleScoreCalculations.bind(this)
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
  
/*
  handleScoreCalculations() {
    const user = this.props.state.user
    const opponent = this.props.state.opponent
    let uGold = user.gold
    let uFish = user.fish
    let uTotem =  user.totem
    let uSeaweed = user.seaweed
    let oGold = opponent.gold
    let oFish = opponent.fish
    let oTotem = opponent.totem
    let oSeaweed = oppon.seaweed

    let userPoints = 0
    let oppPoints = 0

    for(let i = uTotem; i > 0; i--) {
      uTotem -= 1
      uGold -= 2
    }
    if(uGold < 0) { uGold = 0 }

    for(let i = oTotem; i > 0; i--) {
      oTotem -= 1
      oGold -= 2
    }
    if(oGold < 0) { oGold = 0 }

    for(let i = uSeaweed; i > 0; i)

    if (uFish === oFish) { break }
    else if (uFish > oFish) { userPoints += 10 }
    else if (oFish > uFish) { oppPoints += 10 }
    else { console.log("ERR: Fish detection did not register a victory") }

    if (userPoints !== this.state.userTotalPoints || oppPoints !== this.state.opponentTotalPoints) {
      this.setState({
        userTotalPoints: userPoints,
        opponentTotalPoints: oppPoints
      })
    }

    console.log(`User points: ${userPoints}\nOpponent points: ${oppPoints}`)
  }
*/

  componentDidUpdate() {
    this.handleScoreCalculations()
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
                <p>Total Score: {this.state.userTotalPoints}</p>
                <p>Gold: {user.gold}</p>
                <p>Fish: {user.fish}</p>
                <p>Totems: {user.totem}</p>
                <p>Seaweed: {user.seaweed}</p>
              </div>
              <div>
                <h3>Opponent</h3>
                <p>Total Score: {this.state.opponentTotalPoints}</p>
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

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    })
  }
}

export default InfoBoard
