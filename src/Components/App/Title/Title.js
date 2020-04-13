import React from "react";

import "./Title.scss";

const VERSION = "1.3.18";     // NOTE - Major.Minor.Patch

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <div id="selection">
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
          <p id="version">{VERSION}</p>
        </div>

        <div id="logo">
          <img
            src={require("../../../res/img/logo.png")}
            alt="Traders of the North game logo"
          />
        </div>

        <div id="sigrid">
          <img src={require("../../../res/img/sigrid/full.png")} alt="" />
        </div>

        <div id="ulf">
          <img src={require("../../../res/img/ulf/full.png")} alt="" />
        </div>
      </div>
    );
  }
}

export default Title;
