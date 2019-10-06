import React from "react"

class PotBoard extends React.Component {
  render() {
    return (
      <div>
        {this.props.pot.map((item, idx) => {
          // TODO: This might be able to refactor
          {
            if (this.props.pot[idx] === "gold") {
              return <p>gold image here</p>
            } else if (this.props.pot[idx] === "fish") {
              return <p>fish image here</p>
            } else if (this.props.pot[idx] === "totem") {
              return <p>totem image here</p>
            } else if (this.props.pot[idx] === "seaweed") {
              return <p>seaweed image here</p>
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
