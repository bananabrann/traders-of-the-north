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
        <section>
          <h1>About</h1>
          <div className="back-button" onClick={() => this.props.handleScreenSelectionClick("title")}>
            <i class="fas fa-2x fa-chevron-circle-left"></i>
            <p>Return To Title</p>
          </div>

          <p>
            Traders of the North started out during my time in General
            Assembly's Web Development Immersive school, or coding bootcamp, in
            2018 and 2019. At the time, it was very, very crude. I've since
            decided that it's time for a rehaul of the game, which is what
            you're seeing now.
          </p>
          <br />
          <p>
            The game is made with React, JavaScript, and a little bit of
            TypeScript. Styling is done in SASS. Deployment to AWS is entirely
            automated using Bash shell scripts.
          </p>
          <br />
          <p>
            View the game's source code, or contribute at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bananabrann/traders-of-the-north"
            >
              github.com/bananabrann/traders-of-the-north
            </a>
            .
          </p>
          <br />
          <p>
            For more about me, visit my website at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bananabrann.com"
            >
              bananabrann.com
            </a>
            .
          </p>
        </section>

        {/* <PersonCard
          pictureUrl={picMe}
          exLink="github.com/bananabrann.com"
          firstName="Lee"
          title="Developer"
        /> */}

        <br />

        <section id="contributors">
          <p>... and a big "thank you" to the Fiverr contributors!</p>
          <div>
            <PersonCard
              pictureUrl={picAditya}
              exLink="https://www.fiverr.com/gamedsgn"
              firstName="Aditya"
              title="Main Art"
            />
            <PersonCard
              pictureUrl={picMonica}
              exLink="https://www.fiverr.com/monzie90"
              firstName="Monica"
              title="Voice of Sigrid"
            />
            <PersonCard
              pictureUrl={picAlex}
              exLink="https://www.fiverr.com/geeksmagic"
              firstName="Alex"
              title="Logo Design"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default About;
