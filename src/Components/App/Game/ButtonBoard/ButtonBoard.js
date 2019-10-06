import React from "react"

class ButtonBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      someKey: "someValue"
    }
  }

  render() {
    return (
      <div>
        {this.props.shouldDisplayDrawButton ? (
          <div className="action-btn" onClick={() => this.props.draw()}>
            Draw
          </div>
        ) : null}

        {this.props.shouldDisplayBetButton ? (
          <div className="action-btn" onClick={() => this.props.bet()}>
            Bet
          </div>
        ) : null}

        {this.props.shouldDisplayPassButton ? (
          <div className="action-btn" onClick={() => this.props.pass()}>
            Pass
          </div>
        ) : null}
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue"
    })
  }
}

export default ButtonBoard
