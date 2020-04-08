import React from "react";

class Stockpile extends React.Component {
  render() {
    return (
      <div>
        <p>Hello from Stockpile!</p>
        <div className="stockpile-item">{this.props.viking.name}</div>
        <div className="stockpile-item stockpile-gold">
          <p>Gold: </p>{this.props.viking.gold}
        </div>
        <div className="stockpile-item stockpile-fish">
          <p>Fish: </p>{this.props.viking.fish}
        </div>
        <div className="stockpile-item stockpile-score">
          <p>Score: </p>{this.props.viking.score}
        </div>
        {/* TODO: Add projected score with pot */}
      </div>
    );
  }
}

export default Stockpile;