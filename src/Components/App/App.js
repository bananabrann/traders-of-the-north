import React, { Component } from "react"
import Game from "./Game/Game"
import Instructions from "./Instructions/Instructions"
import Title from "./Title/Title"

import "./Reset.css"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldDisplayTitle: true,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false
    }
  }

  displayTitleScreen

  render() {
    return (
      <div className="App">
        <h1>Traders of the North</h1>
        {this.state.shouldDisplayTitle ? <Title /> : null}
        {this.state.shouldDisplayGame ? <Game /> : null}
        {this.state.shouldDisplayInstructions ? <Instructions /> : null}
      </div>
    )
  }
}

export default App
