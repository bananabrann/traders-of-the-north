import React from "react";

import "./Stockpile.scss";

class Stockpile extends React.Component {
  render() {
    return (
      <span className="stockpile">
        {/* <div className="stockpile-item">{this.props.viking.name}</div> */}
        <div className="gold-fish-col">
          <span className="stockpile-gold">
            <p>Gold: {this.props.viking.gold} </p>
          </span>
          <span className="stockpile-fish">
            <p>Fish: {this.props.viking.fish} </p>
          </span>
        </div>

        <div className="stockpile-score">
          <p>{this.props.viking.score}</p>
        </div>
        {/* TODO: Add projected score with pot */}
      </span>
    );
  }
}

export default Stockpile;
