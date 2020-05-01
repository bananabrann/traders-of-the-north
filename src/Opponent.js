class Opponent {
  static act(state, draw, bet, pass, placeRune) {
    console.log(`> act(...)`);

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
    console.log(`> think(...)`);

    const pot = state.pot;
    const oppGold = state.opponent.gold;
    const oppFish = state.opponent.fish;
    const userGold = state.user.gold;
    const userFish = state.user.fish;
  
    let goldInPot = 0;
    let fishInPot = 0;
    let totalWeight = 0;

    pot.forEach(p => {
      if (p === "gold") ++goldInPot;
      if (p === "fish") ++fishInPot;
      if (p === "totem") goldInPot -= 2;
      if (p === "seaweed") fishInPot -= 2;
    });

    if (oppGold > 0) totalWeight += (oppGold - goldInPot);

    if ((fishInPot + oppFish) > userFish) {
      totalWeight += 12;
    } else {
      totalWeight += (oppFish - fishInPot);
    }

    totalWeight = totalWeight - (8 - pot.length);

    return totalWeight;
  }

  static respondToBet(state, pass, placeRune) {
    console.log(`> respondToBet(...)`);
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
