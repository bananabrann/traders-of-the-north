import React from "react";
import Utility from "../../../Utility";
import "./Title.scss";
import PLAY from "../../../res/img/buttons-menu/play/static.png";
import INSTRUCTIONS from "../../../res/img/buttons-menu/instructions/static.png";
import ABOUT from "../../../res/img/buttons-menu/about/static.png";

const VERSION = "1.3.21"; // NOTE - Major.Minor.Patch

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
        <div id="selection">
          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("game")}>
            <img src={PLAY} id="btn-play" alt="Play Game" />
          </div>

          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("instructions")}>
            <img  src={INSTRUCTIONS} id="btn-instructions" alt="Instructions on the Game" 
            />
          </div>

          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("about")}>
            <img src={ABOUT} id="btn-about" alt="About the Game" />
          </div>
          <p id="version">{VERSION}</p>
        </div>

        {/* TODO - Figure out what to do with the logo */}

        {/* <div id="logo">
          <img
            src={require("../../../res/img/logo.png")}
            alt="Traders of the North game logo"
          />
        </div> */}

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
