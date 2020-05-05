import React from "react";

class Portrait extends React.Component {
  render() {
    return (
      <div>
        <img
          className=""
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
