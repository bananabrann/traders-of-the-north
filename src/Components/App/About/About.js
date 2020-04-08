import React from "react";

class About extends React.Component {
  componentDidMount() {
    document.title = "Traders of the North - About";
  }

  render() {
    return (
      <div id="about">
        <h1> About Screen</h1>
        <div onClick={() => this.props.handleScreenSelectionClick("title")}>
          Title
        </div>
      </div>
    );
  }
}

export default About;
