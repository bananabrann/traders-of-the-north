import React from "react";

import "./PotBoard.scss";

const uuid = require("uuid-js");

class PotBoard extends React.Component {
  render() {
    return (
      <div id="pot-board">
        {this.props.pot.map((item, idx) => {
          {
            let uuid1 = uuid.create(1).toString();

            if (item === "gold") {
              return <img key={uuid1} alt="gold" src="" className="piece" />;
            } else if (item === "fish") {
              return <img key={uuid1} alt="fish" src="" className="piece" />;
            } else if (item === "totem") {
              return <img key={uuid1} alt="totem" src="" className="piece" />;
            } else if (item === "seaweed") {
              return <img key={uuid1} alt="seaweed" src="" className="piece" />;
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
