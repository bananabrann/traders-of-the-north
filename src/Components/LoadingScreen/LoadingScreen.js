import React from "react";

import "./LoadingScreen.css";

class LoadingScreen extends React.Component {
  render() {
    return (
      <div id="loader">
        <div className="spinner">
          <img src={require("../../res/gifs/floppy-fish.gif")} />
        </div>

        <h1>loading...</h1>
      </div>
    );
  }
}

export default LoadingScreen;
