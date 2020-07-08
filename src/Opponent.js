import Utility from "./Utility";

const log = Utility.log;
const devLog = Utility.devLog;

class Opponent {
  static act(state, draw, bet, pass, placeRune) {
    log(`Opponent`, `\t> act(state, draw, bet, pass, placeRune)`);

    this.sleep(1000).then(() => {
      if (state.isUsersTurn) {
        return null;
      } // If it is not the opponent's turn, don't do anything
      else if (state.mustBet && !state.isInBet) {
        return bet();
      } else if (state.mustPlaceRune) {
        return placeRune(state.opponent.runes[0]);
      } else if (state.isInBet) {
        this.respondToBet(state, pass, placeRune);
      } else {
        return this.think(state) > 9 ? bet() : draw();
      }
    });
  }

  static sleep(amount) {
    return new Promise(resolve => setTimeout(resolve, amount));
  }

  static think(state) {
    log(`Opponent`, `\t> think(state)`);

    const pot = state.pot;
    const oppGold = state.opponent.gold;
    const oppFish = state.opponent.fish;
    const userGold = state.user.gold;
    const userFish = state.user.fish;
    let goldInPot = 0;
    let fishInPot = 0;
    let totalWeight = 0;

    pot.forEach(potItem => {
      if (potItem === "gold") goldInPot += 1;
      if (potItem === "fish") fishInPot += 1;
      if (potItem === "totem") goldInPot -= 2;
      if (potItem === "seaweed") fishInPot -= 2;
    });

    if (oppGold > 0) totalWeight += oppGold - goldInPot;

    if (fishInPot + oppFish > userFish) {
      totalWeight += 12;
    } else {
      totalWeight += oppFish - fishInPot;
    }

    totalWeight = totalWeight - (6 - pot.length);

    devLog(`totalWeight: ${totalWeight}`)

    return totalWeight;
  }

  static respondToBet(state, pass, placeRune) {
    log(`Opponent`, `\t> respondToBet(state, pass, placeRune)`);

    const weightCap = 100;
    let passWeight = 0;
    let placeRuneWeight = 50; // Note will be zero

    // TODO: Calculation to determine whether or not places rune
    if (passWeight > placeRuneWeight) {
      pass();
    } else {
      placeRune(state.opponent.runes[0]);
    }
  }
}

export default Opponent;
