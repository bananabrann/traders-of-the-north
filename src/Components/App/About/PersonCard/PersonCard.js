import React from "react";

import "./PersonCard.scss";

class PersonCard extends React.Component {
  render() {
    return (
      <div className="person-card">
        <img src={this.props.pictureUrl} alt="Picture of contributor" />
      </div>
    );
  }
}

export default PersonCard;
