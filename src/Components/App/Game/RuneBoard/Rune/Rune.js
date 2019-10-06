import React from "react"

class Rune extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div
        className="Rune"
        onClick={() => {
          this.props.handlePlaceRune(this.props.runeValue)
        }}
      >
        {this.props.runeValue}
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    })
  }
}

export default Rune
