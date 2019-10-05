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
    this.handleScreenSelectionClick = this.handleScreenSelectionClick.bind(this)
  }

  handleScreenSelectionClick(desiredPage) {
    // prettier-ignore
    desiredPage === "title" ? this.setState({
      shouldDisplayTitle: true,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false
    }) : void
    // prettier-ignore
    desiredPage === "game" ? this.setState({
      shouldDisplayTitle: false,
      shouldDisplayGame: true,
      shouldDisplayInstructions: false
    }) : void
    // prettier-ignore
    desiredPage === "instructions" ? this.setState({
      shouldDisplayTitle: false,
      shouldDisplayGame: false,
      shouldDisplayInstructions: true
    }) : console.log("ERROR - handleScreenSelectionClick(desiredPage: String did not have a parameter passed to it that passed conditional statements\n")
  }

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
