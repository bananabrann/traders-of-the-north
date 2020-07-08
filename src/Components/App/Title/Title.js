import React from "react";
import Utility from "../../../Utility";
import "./Title.scss";
import PLAY from "../../../res/img/buttons-menu/play/static.png";
import INSTRUCTIONS from "../../../res/img/buttons-menu/instructions/static.png";
import ABOUT from "../../../res/img/buttons-menu/about/static.png";

import LOGO from "../../../res/img/text-logo.png";
import SIGRID from "../../../res/img/sigrid/full.png";
import ULF from "../../../res/img/ulf/full.png";

const VERSION = require("../../../../package.json").version;
// NOTE - Doing this may expose the package.json to the client.
//        Further investigation needed.

class Title extends React.Component {
  render() {
    return (
      <div className="Title">        
        <div className="logo">
          <img
            src={LOGO}
            alt="Traders of the North game logo"
          />
        </div>
        
        <div className="selection">
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
        </div>


        <div className="portrait" id="sigrid">
          <img src={SIGRID} alt="" />
        </div>

        <div className="portrait" id="ulf">
          <img src={ULF} alt="" />
        </div>

        <p id="version">{VERSION}</p>
      </div>
    );
  }
}

export default Title;
