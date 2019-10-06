class Opponent {
  static act(...input) {
    const state = input[0]
    const runes = state.opponent.runes
    // const thought = ["b", "b", "d", "d", "d"]

    // draw
    if (state.mustPlaceRun) {
      const x = runes[Math.floor(Math.random()*runes.length)];
      return x
    }

    // bet
    if (state.mustBet) {

    }

    // pass
  }

  static bet() {
    console.log("opponent bet called")
  }

  static pass() {
    console.log("opponent pass called")
  }
}

export default Opponent
