import { SSL_OP_EPHEMERAL_RSA } from "constants"

class Opponent {
  static act(state, draw, bet, pass, placeRune) {
    this.sleep(1000).then(() => {
      if (state.isUsersTurn) { return null}         // If it is not the opponent's turn, don't do anything
      else if (state.mustBet) {
        return bet()
      } else return draw()
    })

  }

  static sleep(amount) {
    return new Promise((resolve) => setTimeout(resolve, amount))
  }

  static bet() {
    console.log("opponent bet called")
  }

  static pass() {
    console.log("opponent pass called")
  }
}

export default Opponent
