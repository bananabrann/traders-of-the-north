import React from "react"

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
      isUsersTurn: true,
      shouldDisplayDrawButton: false,
      shouldDisplayBetButton: false,
      shouldDisplayPassButton: false,
      mustBet: false,
      messageBoardContent: "",
    }
  }

  render() {
    return (
      <div id="Game">
        <h1>Game Screen</h1>
        {/* prettier-ignore */}
        <div onClick={() => this.props.handleScreenSelectionClick("title")}>Title</div>
      </div>
    )
  }
}

export default Game
