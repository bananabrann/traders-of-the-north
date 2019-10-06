import React from "react"

const uuid = require("uuid-js")


class PotBoard extends React.Component {
  render() {
    return (
      <div>
        {this.props.pot.map((item, idx) => {
          // TODO: This might be able to refactor
          {
            let uuid1 = uuid.create(1).toString()

            if (item === "gold") {
              return <img key={uuid1} alt="gold" src="" />
            } else if (item === "fish") {
              return <img key={uuid1} alt="fish" src="" />
            } else if (item === "totem") {
              return <img key={uuid1} alt="totem" src="" />
            } else if (item === "seaweed") {
              return <img key={uuid1} alt="seaweed" src="" />
            } else {
              return <err>Error</err>
            }
          }
        })}
      </div>
    )
  }

}

export default PotBoard
