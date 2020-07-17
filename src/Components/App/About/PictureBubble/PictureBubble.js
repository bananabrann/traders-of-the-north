import React from "react";

import "./PictureBubble.scss";

class PictureBubble extends React.Component {
  render() {
    return (
      <div className="picture-bubble">
        <img src={this.props.pictureUrl} alt="Picture of contributor" />
      </div>
    );
  }
}

export default PictureBubble;
