import React from "react"
import ButtonBoard from "./ButtonBoard/ButtonBoard"
import InfoBoard from "./InfoBoard/InfoBoard"
import PotBoard from "./PotBoard/PotBoard"
import RuneBoard from "./RuneBoard/RuneBoard"
import Opponent from "../../../Opponent"

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
      isOutsideRecommendedWidth: false,
      user: {
        name: "Sigrid Treasureborn",
        runes: baseRunes.pack1,
        gold: 0,
        fish: 0,
        totem: 0,
        seaweed: 0
      },
      opponent: {
        name: "Ulf Goldkeeper",
        runes: baseRunes.pack2,
        gold: 0,
        fish: 0,
        totem: 0,
        seaweed: 0
      },
      pot: [],
      arena: [],
      isUsersTurn: true,
      isInBet: false,
      mustBet: false,
      mustPlaceRune: false,

      messageBoardContent: "",
      shouldDisplayDrawButton: true,
      shouldDisplayBetButton: true,
      shouldDisplayPassButton: false,
      shouldAllowRunePlacement: false
    }
    this.draw = this.draw.bind(this)
    this.bet = this.bet.bind(this)
    this.pass = this.pass.bind(this)
    this.handlePlaceRune = this.handlePlaceRune.bind(this)
    this.checkForcedBet = this.checkForcedBet.bind(this)
    this.handleRuneComparisson = this.handleRuneComparisson.bind(this)
    this.testHello = this.testHello.bind(this)
  }

  testHello() {
    console.log("hello ;)")
  }

  draw() {
    console.log("draw()")
    if (this.state.mustBet) {
      return console.log("you can't draw, you must bet")
    } else {
      const drawnPiece = bag[Math.floor(Math.random() * bag.length)]

      this.state.pot.push(drawnPiece)
      this.setState({
        isUsersTurn: !this.state.isUsersTurn
      })
    }
  }

  bet() {
    console.log("bet()")
    this.setState({
      isInBet: true,
      isUsersTurn: !this.state.isUsersTurn,
      shouldDisplayBetButton: false,
      shouldDisplayDrawButton: false,
      shouldDisplayPassButton: true,
      shouldAllowRunePlacement: true
    })
  }

  pass() {
    console.log("pass()")
    this.setState({
      isUsersTurn: !this.state.isUsersTurn,
      mustPlaceRune: true
    })
  }

  handlePlaceRune(rune) {
    console.log(`handlePlaceRune(${rune})`)

    this.setState(prevState => ({
      isUsersTurn: !this.state.isUsersTurn,
      arena: [...prevState.arena, rune]
    }))

    if (this.state.arena.length >= 2) { this.handleRuneComparisson() }
    console.log(`The arena is: ${this.state.arena}`)
  }

  handleRuneComparisson() {
    console.log("handleRuneComparisson()")
  }

  checkForcedBet() {
    console.log("checkForcedBet()")

    const pot = this.state.pot

    if (pot.length >= 8) {
      this.setState({
        mustBet: true,
        shouldDisplayBetButton: true,
        shouldDisplayDrawButton: false,
        shouldDisplayPassButton: false,
        shouldAllowRunePlacement: false
      })
    }
  }

  componentDidUpdate() {
    if (!this.state.mustBet) {
      this.checkForcedBet()
    }
    if (!this.state.isUsersTurn) { 
      Opponent.act(this.state, this.draw, this.bet, this.pass, this.handlePlaceRune)
    }
    // console.log(Opponent.act(this.state, this.draw, this.bet, this.pass, this.handlePlaceRune))



    // ------------- Dev Turn Tracking
    let whosTurnIsIt = this.state.isUsersTurn ? "User" : "Opponent"
    console.log(`----------${whosTurnIsIt}----------`)
  }

  componentDidMount() {
    let whosTurnIsIt = this.state.isUsersTurn ? "User" : "Opponent"
    console.log(`----------${whosTurnIsIt}----------`)
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
            isUsersTurn = {this.state.isUsersTurn}
            bet={this.bet}
            draw={this.draw}
            pass={this.pass}
          />
        </div>

        <div id="rune-board">
          <RuneBoard
            handlePlaceRune={this.handlePlaceRune}
            usersRunes={this.state.user.runes}
          />
        </div>

        <div id="info-board">
          <InfoBoard
            handleInfoBoardTabSelection={this.handleInfoBoardTabSelection}
          />
        </div>
      </div>
    )
  }
}

export default Game
