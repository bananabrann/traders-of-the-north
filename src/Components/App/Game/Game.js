import React from "react"
import ButtonBoard from "./ButtonBoard/ButtonBoard"
import InfoBoard from "./InfoBoard/InfoBoard"
import PotBoard from "./PotBoard/PotBoard"
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
      shouldDisplayDrawButton: true,
      shouldDisplayBetButton: true,
      shouldDisplayPassButton: true,
      mustBet: false,
      messageBoardContent: ""
    }
    this.draw = this.draw.bind(this)
    this.bet = this.bet.bind(this)
    this.pass = this.pass.bind(this)
    this.handlePlaceRune = this.handlePlaceRune.bind(this)
    this.setButtonDisplayVisibility = this.setButtonDisplayVisibility.bind(this)
    // prettier-ignore
    this.checkConditionsForForcedBet = this.checkConditionsForForcedBet.bind(this)
  }

  draw() {
    // console.log("draw() called")

    if (this.state.mustBet) {
      return console.log("you can't draw, you must bet")
    } else {
      const drawnPiece = bag[Math.floor(Math.random() * bag.length)]
      this.state.pot.push(drawnPiece)
      this.setState({
        isUsersTurn: !this.state.isUsersTurn
      })
      console.log(
        `${drawnPiece} drawed. Pot: ${this.state.pot}. usersTurn: ${this.state.isUsersTurn}`
      )
    }
    // console.table(this.state)
  }

  bet() {
    console.log("bet() called")
  }

  pass() {
    console.log("pass() called")
  }

  handlePlaceRune(rune) {
    console.log(`The ${rune} has been placed`)
  }

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

  checkConditionsForForcedBet() {
    if (this.state.pot.length >= 8) {
      this.setState({
        mustBet: true
      })
    }
  }

  componentDidUpdate() {
    // console.log("Checking for forced bet...")
    if (!this.state.mustBet) {
      this.checkConditionsForForcedBet()
    }
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

        <div id="pot">
          <PotBoard 
            pot={this.state.pot}
          />
        </div>

        <div id="button-board">
          <ButtonBoard
            shouldDisplayBetButton={this.state.shouldDisplayBetButton}
            shouldDisplayDrawButton={this.state.shouldDisplayDrawButton}
            shouldDisplayPassButton={this.state.shouldDisplayPassButton}
            bet={this.bet}
            draw={this.draw}
            pass={this.pass}
          />
        </div>

        <div id="rune-board">
          <RuneBoard
            handlePlaceRune={this.handlePlaceRune}
            usersRunes={this.state.user.rune}
          />
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
