import React from "react"
import Rune from "./Rune/Rune"

class RuneBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      someKey: "someValue"
    }
  }

  render() {
    return (
      <div>
        {this.props.usersRunes.map((r, i) => {
          return (
            <Rune
              key={i}
              runeValue={r}
              handlePlaceRune={this.props.handlePlaceRune}
            />
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    })
  }
}

export default RuneBoard
