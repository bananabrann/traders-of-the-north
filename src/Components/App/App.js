import React, { Component } from "react";
import Game from "./Game/Game";
import Instructions from "./Instructions/Instructions";
import Title from "./Title/Title";

import "./Reset.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisplayTitle: true,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false
    };
    this.handleScreenSelectionClick = this.handleScreenSelectionClick.bind(
      this
    );
  }

  handleScreenSelectionClick(desiredPage) {
    // prettier-ignore
    desiredPage === "title" ? this.setState({
      shouldDisplayTitle: true,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false
    }) : void(0)
    // prettier-ignore
    desiredPage === "game" ? this.setState({
      shouldDisplayTitle: false,
      shouldDisplayGame: true,
      shouldDisplayInstructions: false
    }) : void(0)
    // prettier-ignore
    desiredPage === "instructions" ? this.setState({
      shouldDisplayTitle: false,
      shouldDisplayGame: false,
      shouldDisplayInstructions: true
    }) : void(0)
  }

  componentDidMount() {
    document.title = "Traders of the North";
  }

  render() {
    return (
      <div id="App">
        {this.state.shouldDisplayTitle ? (
          <Title handleScreenSelectionClick={this.handleScreenSelectionClick} />
        ) : null}
        {this.state.shouldDisplayGame ? (
          <Game handleScreenSelectionClick={this.handleScreenSelectionClick} />
        ) : null}
        {this.state.shouldDisplayInstructions ? (
          // prettier-ignore
          <Instructions handleScreenSelectionClick={this.handleScreenSelectionClick} />
        ) : null}
      </div>
    );
  }
}

export default App;
