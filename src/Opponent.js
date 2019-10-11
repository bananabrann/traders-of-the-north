class Opponent {
  static act(gameState) {
    console.log("FROM OPPONENT")

    console.log(gameState.mustBet)
  }

  static bet() {
    console.log("opponent bet called")
  }

  static pass() {
    console.log("opponent pass called")
  }
}

export default Opponent
