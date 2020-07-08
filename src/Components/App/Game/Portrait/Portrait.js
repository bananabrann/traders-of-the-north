import React from "react";
import "./Portrait.scss";

class Portrait extends React.Component {
  render() {
    return (
      <div className="portrait">
        <img
          id={this.props.viking}
          src={require(`../../../../res/img/${this.props.viking}/full.png`)}
          alt={`The portrait of ${this.props.viking}`}
          onClick={null}
        />
      </div>
    );
  }
}

export default Portrait;
