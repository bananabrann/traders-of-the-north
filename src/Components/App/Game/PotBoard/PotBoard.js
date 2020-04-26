import React from "react";
import "./PotBoard.scss";
import Fish from "../../../../res/img/pieces/fish/good/fish.png";
import BadFish from "../../../../res/img/pieces/fish/bad/fish.png";
import Gold from "../../../../res/img/pieces/gold/good/gold.png";
import BadGold from "../../../../res/img/pieces/gold/bad/gold.png";


const uuid = require("uuid-js");

class PotBoard extends React.Component {
  render() {
    return (
      <div id="pot-board">
        {this.props.pot.map((item, idx) => {
          {
            let uuid1 = uuid.create(1).toString();

            if (item === "gold") {
              return <img key={uuid1} alt="gold" src={Gold} className="piece" />;
            } else if (item === "fish") {
              return <img key={uuid1} alt="fish" src={Fish} className="piece" />;
            } else if (item === "totem") {
              return <img key={uuid1} alt="totem" src={BadGold} className="piece" />;
            } else if (item === "seaweed") {
              return <img key={uuid1} alt="seaweed" src={BadFish} className="piece" />;
            } else {
              return <err>Error</err>;
            }
          }
        })}
      </div>
    );
  }
}

export default PotBoard;
