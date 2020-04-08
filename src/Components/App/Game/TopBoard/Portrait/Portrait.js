import React from "react";

class Portrait extends React.Component {
  render() {
    const vikingName = this.props.name.toLowerCase();

    return (
      <div>
        <img 
          className="portrait"
          src={require("../../../../../res/img/" + vikingName + "/headshot.png")}
          alt=""
        />
      </div>
    )
  }
}

export default Portrait
