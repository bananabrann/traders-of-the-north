import React from "react";
import PictureBubble from "../PictureBubble/PictureBubble";

import "./PersonCard.scss";

class PersonCard extends React.Component {
  render() {
    return (
      <div className="person-card">
        <div className="left">
          <PictureBubble pictureUrl={this.props.pictureUrl} alt="Picture of contributor" />
        </div>

        <div className="right">
          <h2>{this.props.firstName}</h2>
          <h3>{this.props.title}</h3>
          <i class="fas fa-1x fa-external-link-alt"></i>
        </div>
      </div>
    );
  }
}

export default PersonCard;
