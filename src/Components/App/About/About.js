import React from "react";
import PersonCard from "./PersonCard/PersonCard";

import picMe from "../../../res/img/contributors/me.jpeg";
import picAditya from "../../../res/img/contributors/gamedsgn.png";
import picMonica from "../../../res/img/contributors/monica-remes.jpg";
import picAlex from "../../../res/img/contributors/alex.jpg";

import "./About.scss";

class About extends React.Component {
  componentDidMount() {
    document.title = "Traders of the North - About";
  }

  render() {
    return (
      <div id="about">


        <h1>About</h1>

        <div id="my-blurb">
          <h2>Pierson</h2>
          <p>Lead and Developer</p>
          {/* TODO: Add social media tags */}
        </div>

        <div id="contributors">
          <PersonCard pictureUrl={picAditya} exLink="fiverr.com" firstName="Aditya" title="Main Artist" />
          <PersonCard pictureUrl={picMonica} exLink="fiverr.com" firstName="Aditya" title="Voice of Sigrid" />
          <PersonCard pictureUrl={picAlex} exLink="fiverr.com" firstName="Alex" title="Logo Artist" />
        </div>

        <div onClick={() => this.props.handleScreenSelectionClick("title")}>
          <p>Return To Title</p>
          <i class="fas fa-4x fa-undo"></i>
        </div>
      </div>
    );
  }
}

export default About;
