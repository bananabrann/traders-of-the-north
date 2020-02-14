import React from "react"
import "../../../style/_text.scss"

class Title extends React.Component {
  /*
  constructor() {
    super()
    this.state = {
      someKey: "someValue"
    }
  }
  */

  render() {
    return (
      <div className="Title">
        <h1>Title Screen</h1>
        <div id="title-page-selection-wrapper">
          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("game")}>
            Play Game
          </div>
          {/* prettier-ignore */}
          <div onClick={() => this.props.handleScreenSelectionClick("instructions")}>
            Instructions
          </div>

          <br />
          <p className="dev">Hello</p>
        </div>
      </div>
    )
  }
}

export default Title
