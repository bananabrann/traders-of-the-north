class Opponent {
  static act(state, draw, bet, pass, placeRune) {
    console.log(`> act(...)`)
    this.sleep(1000).then(() => {
      if (state.isUsersTurn) {
        return null
      } // If it is not the opponent's turn, don't do anything
      else if (state.mustBet && !state.isInBet) {
        return bet()
      } else if (state.mustPlaceRune) {
        return placeRune(state.opponent.runes[0])
      } else if (state.isInBet) {
        this.respondToBet(state, pass, placeRune)
      } else {
        return this.think(state) > 9 ? bet() : draw()
      }
    })
  }

  static sleep(amount) {
    return new Promise(resolve => setTimeout(resolve, amount))
  }

  static think(state) {
    console.log(`> think(...)`)

    const weightCap = 100
    let betWeight = 0

    state.pot.forEach(item => {
      if (item === "gold") betWeight += 5
      if (item === "fish") betWeight += 5
      if (item === "totem" && state.opponent.totem > 0) betWeight -= 7
      if (item === "seaweed") betWeight -= 7
    })

    return betWeight
  }

  static respondToBet(state, pass, placeRune) {
    console.log(`> respondToBet(...)`)
    const weightCap = 100
    let passWeight = 0
    let placeRuneWeight = 50 // Note will be zero
    // TODO: Calculation to determine whether or not places rune
    if (passWeight > placeRuneWeight) {
      pass()
    } else {
      placeRune(state.opponent.runes[0])
    }
  }
}

export default Opponent
