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
      shouldDisplayPassButton: false,
      shouldAllowRunePlacement: false,
      betWasCalled: false,
      mustBet: false,
      mustPlaceRune: false,
      messageBoardContent: ""
    }
    this.draw = this.draw.bind(this)
    this.bet = this.bet.bind(this)
    this.pass = this.pass.bind(this)
    this.handlePlaceRune = this.handlePlaceRune.bind(this)
    this.checkForcedBet = this.checkForcedBet.bind(this)
  }

  draw() {
    if (this.state.mustBet) {
      return console.log("you can't draw, you must bet")
    } else {
      const drawnPiece = bag[Math.floor(Math.random() * bag.length)]
      this.state.pot.push(drawnPiece)
      this.setState({
        isUsersTurn: !this.state.isUsersTurn
      })
      // console.log(
      //   `${drawnPiece} drawed. Pot: ${this.state.pot}. usersTurn: ${this.state.isUsersTurn}`
      // )
    }
  }

  bet() {
    console.log("bet() called")
    this.setState({
      betWasCalled: true,
      isUsersTurn: !this.state.isUsersTurn,
      shouldDisplayBetButton: false,
      shouldDisplayDrawButton: false,
      shouldDisplayPassButton: true,
      shouldAllowRunePlacement: true
    })
  }

  pass() {
    console.log("pass() called")
    this.setState({isUsersTurn: !this.state.isUsersTurn})

    if (this.state.isUsersTurn) {
      this.setState({
        mustBet: false,
        mustPlaceRune: true,
        shouldDisplayPassButton: true
      })
    }
  }

  handlePlaceRune(rune) {
    console.log(`The ${rune} has been placed`)
  }


  checkForcedBet() {
    const isUsersTurn = this.state.isUsersTurn
    const betWasCalled = this.state.betWasCalled
    const pot = this.state.pot

    if (pot.length >= 8) {
      this.setState({
        mustBet: true,
        mustPlaceRune: true,
        shouldDisplayBetButton: true,
        shouldDisplayDrawButton: false,
        shouldDisplayPassButton: false,
        shouldAllowRunePlacement: false
      })
    }
    if (betWasCalled) {
      if (isUsersTurn) {
        this.setState({
          mustBet: false,
          mustPlaceRune: false,
          shouldDisplayBetButton: false,
          shouldDisplayDrawButton: false,
          shouldDisplayPassButton: true,
          shouldAllowRunePlacement: true
        })
      } else if (!isUsersTurn) {
        console.log("Not users turn, ")
        // Call opponent logic
      }
    }
  }

  componentDidUpdate() {
    // console.log("Checking for forced bet...")
    if (!this.state.mustBet && !this.state.mustPlaceRune && !this.state.betWasCalled) {
      this.checkForcedBet()
    }
    console.log(`isUsersTurn: ${this.state.isUsersTurn} betWasCalled: ${this.state.betWasCalled}`)
  }

  componentDidMount() {
    document.title = "Traders of the North"
  }

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
          <PotBoard pot={this.state.pot} />
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
