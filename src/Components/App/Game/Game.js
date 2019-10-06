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
      messageBoardContent: ""
    }
    this.setButtonDisplayVisibility = this.setButtonDisplayVisibility.bind(this)
  }

  setButtonDisplayVisibility(affectedButton, value) {
    // TODO: These can be written out dynamically, so that I don't have to do an if for each possible

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

  componentDidMount() {}

  render() {
    return (
      <div id="Game">
        <h1>Game Screen</h1>
        {/* prettier-ignore */}
        <div className="topbar-button" onClick={() => this.props.handleScreenSelectionClick("title")}>Return Home</div>
      </div>
    )
  }
}

export default Game
