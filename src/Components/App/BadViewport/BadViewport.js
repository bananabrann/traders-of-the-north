import React, { Component } from "react";
import "./BadViewport.scss";
import Totem from "../../../res/img/totem.png";

class BadViewport extends Component {
  render() {
    return (
      <div id="bad-viewport-container">
        <img src={Totem} />
        <h1>Uh-oh!</h1>
        <p>
          Traders of the North is mobile first, and optimized for browsers that
          are of a portrait or square orientation.
        </p>
        <p>
          Sorry for the inconvenience, but please resize your browser until this
          screen disappears in order to play.
        </p>

        {/* TODO - Have an option to automatically resize browser to screen 
        device height and max allowable width. */}
      </div>
    );
  }
}

export default BadViewport;
