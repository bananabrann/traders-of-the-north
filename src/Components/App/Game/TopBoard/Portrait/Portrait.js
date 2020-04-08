import React from "react";

import "./Portrait.scss";

class Portrait extends React.Component {
  render() {
    const vikingName = this.props.vikingName.toLowerCase();

    return (
      <span>
        <img 
          className="portrait"
          src={require("../../../../../res/img/" + vikingName + "/headshot.png")}
          alt=""
        />
      </span>
    )
  }
}

export default Portrait
