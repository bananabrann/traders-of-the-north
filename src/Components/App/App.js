import React, { Component } from "react";
import About from "./About/About";
import BadViewport from "./BadViewport/BadViewport";
import Game from "./Game/Game";
import Instructions from "./Instructions/Instructions";
import Title from "./Title/Title";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Utility from "../../Utility";

import "./Reset.css";

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldDisplayAbout: false,
      shouldDisplayTitle: false,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false,
      shouldDisplayViewportWarning: false
    };
    // prettier-ignore
    this.handleScreenSelectionClick = this.handleScreenSelectionClick.bind(this);
    // prettier-ignore
    this.handleViewportDimensionWarning = this.handleViewportDimensionWarning.bind(this);
  }

  handleScreenSelectionClick(desiredPage) {
    // TODO - Add button gif effect from Utility class

    // prettier-ignore
    desiredPage === "title" ? this.setState({
      shouldDisplayAbout: false,
      shouldDisplayTitle: true,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false
    }) : void(0)
    // prettier-ignore
    desiredPage === "game" ? this.setState({
      shouldDisplayAbout: false,
      shouldDisplayTitle: false,
      shouldDisplayGame: true,
      shouldDisplayInstructions: false
    }) : void(0)
    // prettier-ignore
    desiredPage === "instructions" ? this.setState({
      shouldDisplayAbout: false,
      shouldDisplayTitle: false,
      shouldDisplayGame: false,
      shouldDisplayInstructions: true
    }) : void(0)
    // prettier-ignore
    desiredPage === "about" ? this.setState({
      shouldDisplayAbout: true,
      shouldDisplayTitle: false,
      shouldDisplayGame: false,
      shouldDisplayInstructions: false
    }) : void(0)
  }

  handleViewportDimensionWarning() {
    if(!Utility.isLegalWindowDimension()) {
      this.setState({
        shouldDisplayViewportWarning: true
      })
    } else {
      this.setState({
        shouldDisplayViewportWarning: false
      })
    }
  }

  componentDidMount() {
    document.title = "Traders of the North";
    window.addEventListener("resize", this.handleViewportDimensionWarning)

    // NOTE: For development on the load screen,
    // remove comments around this.

    setTimeout(() => {
      this.setState({
        isLoading: false,
        shouldDisplayTitle: true
      });
    }, 1000);
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />;
    } else {
      return (
        <div id="App">
          {this.state.shouldDisplayViewportWarning ? (
            // prettier-ignore
            <BadViewport />
          ) : null}

          {this.state.shouldDisplayTitle ? (
            <Title
              handleScreenSelectionClick={this.handleScreenSelectionClick}
            />
          ) : null}

          {this.state.shouldDisplayGame ? (
            <Game
              handleScreenSelectionClick={this.handleScreenSelectionClick}
            />
          ) : null}

          {this.state.shouldDisplayInstructions ? (
            // prettier-ignore
            <Instructions handleScreenSelectionClick={this.handleScreenSelectionClick} />
          ) : null}

          {this.state.shouldDisplayAbout ? (
            // prettier-ignore
            <About handleScreenSelectionClick={this.handleScreenSelectionClick} />
          ) : null}
        </div>
      );
    }
  }
}

export default App;
