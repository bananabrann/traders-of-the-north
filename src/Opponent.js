class Opponent {
  static act(state, draw, bet, pass, placeRune) {
    this.sleep(1000).then(() => {
      if (state.isUsersTurn) {return null}          // If it is not the opponent's turn, don't do anything
      else if (state.mustBet) {
        return bet()
      } else if (state.isInBet) {
        this.respondToBet(state, pass, placeRune)
      } else if (state.mustPlaceRune) {
        return state.opponent.runes
      } else {
        if (this.think() > 70) {
          return bet()
        } else {
          return draw()
        }
      }
    })

  }

  static sleep(amount) {
    return new Promise((resolve) => setTimeout(resolve, amount))
  }

  static think() {
    const weightCap = 100
    let betWeight = 0                  // TODO: This is the probability of 
    // TODO: Calculation functions to determine action
    return betWeight
  }

  static respondToBet(state, pass, placeRune) {
    const weightCap = 100
    let passWeight = 0
    let placeRuneWeight = 50   // Note will be zero
    // TODO: Calculation to determine whether or not places rune
    if (passWeight > placeRuneWeight) {
      pass()
    } else {
      placeRune(state.opponent.runes[1])
    }
  }
}

export default Opponent
