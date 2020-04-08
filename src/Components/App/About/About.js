import React from "react";

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
          <h2>Lee</h2>
          <p>Software Developer</p>
          {/* TODO: Add social media tags */}
        </div>

        <div id="additional-help">
          <h3>Art - Aditya</h3>
          <h3>Logo - Alex</h3>
          <h3>Sound & Music - Milan Kovarbasic</h3>
          <h3>Voice - Monica Remes</h3>
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
