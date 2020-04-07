import React from "react";

const path = require('path');

class Portrait extends React.Component {
  render() {
    const vikingName = this.props.name.toLowerCase();

    return (
      <div>
        <img 
          className="portrait"
          src={require("../../../../res/img/ulf/headshot.png")}   // Works
          alt=""
        />
      </div>
    )
  }
}

export default Portrait
