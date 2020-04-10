import React from "react";

import "./Title.scss";

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <h1>Title Screen</h1>
        <div id="title-page-selection-wrapper">
          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("game")}>
            Play Game
          </div>

          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("instructions")}>
            Instructions
          </div>

          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("about")}>
            About
          </div>

          <br />
        </div>

        <div id="game-title-background-wrapper">
          <div id="game-logo">
            <img
              src={require("../../../res/img/logo.png")}
              alt="Traders of the North game logo"
            />
          </div>
        </div>

        <div id="character-wrapper">
          <div id="sigrid">
            <img src={require("../../../res/img/sigrid/full.png")} alt="" />
          </div>

          {/* <div id="ulf">
            <img src={require("../../../res/img/ulf/full.png")} alt="" />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Title;
