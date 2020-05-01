import React from "react";

class Instructions extends React.Component {
  componentDidMount() {
    document.title = "Traders of the North - Instructions";
  }

  render() {
    return (
      <div id="Instructions">
        <h1>Instructions Screen</h1>
        <div onClick={() => this.props.handleScreenSelectionClick("title")}>
          Title
        </div>
      </div>
    );
  }
}

export default Instructions;
