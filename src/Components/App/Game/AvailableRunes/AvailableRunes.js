import React from "react"
import Rune from "../ActionBoard/Rune/Rune"

class AvailableRunes extends React.Component {
  render() {
    return (
      <div>
        hello from AvailableRunes!
        {this.props.runes.map((r, i) => {return(
          <Rune
            key={i}
            runeValue={r}
            handlePlaceRune={null}
          />
        )})}
      </div>
    )
  }
}

export default AvailableRunes
