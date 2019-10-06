import React from "react"
import InfoBoard from "./InfoBoard/InfoBoard"
import RuneBoard from "./RuneBoard/RuneBoard"

import "./Game.scss"

const bag = ["gold", "gold", "fish", "fish", "totem", "seaweed"]
const baseRunes = {
  pack1: [2, 5, 6, 9],
  pack2: [3, 4, 7, 8]
}

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: "Sigrid Treasureborn",
        rune: baseRunes.pack1,
        gold: 0,
        fish: 0,
        totem: 0,
        seaweed: 0
      },
      opponent: {
        name: "Ulf Goldkeeper",
        rune: baseRunes.pack2,
        gold: 0,
        fish: 0,
        totem: 0,
        seaweed: 0
      },
      pot: [],
      isUsersTurn: true,
      isOutsideRecommendedWidth: false,
      shouldDisplayDrawButton: false,
      shouldDisplayBetButton: false,
      shouldDisplayPassButton: false,
      mustBet: false,
      messageBoardContent: ""
    }
    this.draw = this.draw.bind(this)
    this.bet = this.bet.bind(this)
    this.pass = this.pass.bind(this)
    this.placeRune = this.placeRune.bind(this)
    this.setButtonDisplayVisibility = this.setButtonDisplayVisibility.bind(this)
    // prettier-ignore
    this.checkConditionsForForcedBet = this.checkConditionsForForcedBet.bind(this)
  }

  draw() {
    const drawnPiece = bag[Math.floor(Math.random() * bag.length)]
    this.state.pot.push(drawnPiece)

    this.setState({
      isUsersTurn: !this.state.isUsersTurn
    })

    console.log("Drawed")
    console.table(this.state)
  }

  bet() {}

  pass() {}

  placeRune(rune) {}

  setButtonDisplayVisibility(affectedButton, value) {
    // TODO: These can be written out dynamically, so that I don't have to do an if for each possible
    // NOTE: This method is not tested

    // prettier-ignore
    (affectedButton === "draw") ? this.setState({
      shouldDisplayDrawButton: value
    }) : void(0)
    // prettier-ignore
    (affectedButton === "bet") ? this.setState({
      shouldDisplayBetButton: value
    }) : void(0)
    // prettier-ignore
    (affectedButton === "pass") ? this.setState({
      shouldDisplayDrawButton: value
    }) : void(0)
  }

  checkConditionsForForcedBet() {}

  componentDidUpdate() {
    console.log("Checking for forced bet...")
  }

  componentDidMount() {}

  render() {
    return (
      <div id="Game">
        <div
          id="return-to-title-btn"
          className="topbar-btn"
          onClick={() => this.props.handleScreenSelectionClick("title")}
        >
          Return Home
        </div>

        <div id="logo-header"></div>

        <div id="pot">Pot be here</div>

        <div id="button-board">
          Button Board be here
          <div className="action-btn" onClick={() => this.draw()}>
            Draw
          </div>
          <div className="action-btn" onClick={() => this.bet()}>
            Bet
          </div>
          <div className="action-btn" onClick={() => this.pass()}>
            Pass
          </div>
        </div>

        <div id="rune-board">
          <RuneBoard usersRunes={this.state.user.rune} />
        </div>

        <div id="info-board">
          <InfoBoard
            handleInfoBoardTabSelection={this.handleInfoBoardTabSelection}
          ></InfoBoard>
        </div>
      </div>
    )
  }
}

export default Game
