import React from "react";
import ActionBoard from "./ActionBoard/ActionBoard";
import AvailableRunes from "./AvailableRunes/AvailableRunes";
import Portrait from "./Portrait/Portrait";
import PotBoard from "./PotBoard/PotBoard";
import Stockpile from "./Stockpile/Stockpile";
import Opponent from "../../../Opponent";

import "./GameGrid.scss";
import "./ButtonBar.scss";

const bag = [
  "gold",
  "gold",
  "gold",
  "fish",
  "fish",
  "fish",
  "totem",
  "seaweed"
];
const baseRunes = {
  pack1: [2, 5, 6, 9],
  pack2: [3, 4, 7, 8]
};

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      isOutsideRecommendedWidth: false,
      user: {
        name: "Sigrid Treasureborn",
        firstName: "Sigrid",
        lastName: "Treasureborn",
        runes: baseRunes.pack1,
        score: 0,
        gold: 0,
        fish: 0
      },
      opponent: {
        name: "Ulf Goldkeeper",
        firstName: "Ulf",
        lastName: "Goldkeeper",
        runes: baseRunes.pack2,
        score: 0,
        gold: 0,
        fish: 0
      },
      pot: [],
      arena: [],
      isUsersTurn: true,
      isInBet: false,
      mustBet: false,
      mustPlaceRune: false,

      messageBoardContent: "",
      shouldDisplayDrawButton: true,
      shouldDisplayBetButton: true,
      shouldDisplayPassButton: false,
      shouldAllowRunePlacement: false
    };
    this.draw = this.draw.bind(this);
    this.bet = this.bet.bind(this);
    this.pass = this.pass.bind(this);
    this.handlePlaceRune = this.handlePlaceRune.bind(this);
    this.checkForcedBet = this.checkForcedBet.bind(this);
    this.handleRuneComparisson = this.handleRuneComparisson.bind(this);
    this.getNewStockpileAmount = this.getNewStockpileAmount.bind(this);
    this.getCalculatedScore = this.getCalculatedScore.bind(this);
  }

  draw() {
    console.log("> draw()");
    if (this.state.mustBet) {
      return console.log("you can't draw, you must bet");
    } else {
      const drawnPiece = bag[Math.floor(Math.random() * bag.length)];

      this.state.pot.push(drawnPiece);
      this.setState({
        isUsersTurn: !this.state.isUsersTurn
      });
    }
  }

  bet() {
    console.log("> bet()");
    if (this.state.isInBet) {
      console.log("You can't bet again!");
    } else {
      this.setState({
        isInBet: true,
        isUsersTurn: !this.state.isUsersTurn,
        shouldDisplayBetButton: false,
        shouldDisplayDrawButton: false,
        shouldDisplayPassButton: true,
        shouldAllowRunePlacement: true
      });
    }
  }

  pass() {
    console.log("> pass()");
    this.setState({
      isUsersTurn: !this.state.isUsersTurn,
      mustPlaceRune: true
    });
  }

  handlePlaceRune(rune) {
    console.log(`> handlePlaceRune(${rune})`);

    if (!this.state.isInBet) {
      console.log("You cannot place a rune without being in a bet!");
    } else {
      this.state.arena.push(rune);

      // NOTE ----
      // This shouldn't be considered final. This is for the purpose of playing the game
      // without the console open.
      // When 2.x is released, the actual rune PNG files will be present, and should
      // instead be a transition or a highlighting of the rune. (Like a different PNG
      // file that shows a highlighted rune)
      this.state.arena.forEach(runeInArena => {
        document.getElementById(
          runeInArena
        ).childNodes[0].style.backgroundColor = "red";
      });
      // ---------

      if (this.state.mustPlaceRune) this.handleRuneComparisson(true);
      if (this.state.arena.length >= 2) this.handleRuneComparisson();

      this.setState({
        isUsersTurn: !this.state.isUsersTurn,
        mustBet: false
      });
    }
  }

  handleRuneComparisson(soloRuneVictory) {
    console.log(`> handleRuneComparisson(${soloRuneVictory})`);

    let tempArena = []; // NOTE: I do this because I do not want to mutate state directly
    let winner = "";
    let loser = "";
    let winningRune = 0;

    if (soloRuneVictory) {
      winner = this.state.isUsersTurn ? "user" : "opponent";
      winner === "user" ? (loser = "opponent") : (loser = "user");

      console.log(
        `DEBUG: Winner of soloRuneVictory is: ${winner}, loser: ${loser}`
      );
      winningRune = this.state.arena[0];
    } else {
      tempArena = this.state.arena;

      // If the opponent placed a rune first, switch the array
      if (this.state.opponent.runes.includes(tempArena[0])) tempArena.reverse();

      if (tempArena[0] > tempArena[1]) {
        console.log("user won");
        winner = "user";
        loser = "opponent";
        winningRune = tempArena[0];
      } else if (tempArena[1] > tempArena[0]) {
        console.log("oppo won");
        winner = "opponent";
        loser = "user";
        winningRune = tempArena[1];
      } else {
        console.log(
          "*** BUG *** handleRuneComparisson() - neither the user nor opponent won?.."
        );
      }
    }

    const winnersNewRuneArray = [...this.state[winner].runes].filter(
      (value, index, arr) => {
        if (value !== winningRune) return value;
      }
    );

    //prettier-ignore
    const winnersGoldNewAmount = this.getNewStockpileAmount(true, winner, "gold");
    //prettier-ignore
    const winnersFishNewAmount = this.getNewStockpileAmount(true, winner, "fish");
    //prettier-ignore
    const losersGoldNewAmount = this.getNewStockpileAmount(false, loser, "gold");
    //prettier-ignore
    const losersFishNewAmount = this.getNewStockpileAmount(false, loser, "fish");

    console.log(
      `winnersGoldNewAmount: ${winnersGoldNewAmount}\n`,
      `winnersNewFishAmount: ${winnersFishNewAmount}\n`,
      `losersGoldNewAmount: ${losersGoldNewAmount}\n`,
      `losersFishNewAmount: ${losersFishNewAmount}`
    );

    const winnersNewScore = this.getCalculatedScore(
      true,
      winner,
      winnersGoldNewAmount,
      winnersFishNewAmount,
      losersFishNewAmount
    );
    const losersNewScore = this.getCalculatedScore(
      false,
      loser,
      losersGoldNewAmount,
      winnersFishNewAmount,
      losersFishNewAmount
    );

    this.setState(() => ({
      [winner]: {
        runes: winnersNewRuneArray,
        score: winnersNewScore,
        gold: winnersGoldNewAmount,
        fish: winnersFishNewAmount
      },
      [loser]: {
        runes: [...this.state[loser].runes],
        score: losersNewScore,
        gold: losersGoldNewAmount,
        fish: losersFishNewAmount
      },
      arena: [],
      pot: [],
      isInBet: false,
      mustPlaceRune: false,
      shouldDisplayBetButton: true,
      shouldDisplayDrawButton: true,
      shouldDisplayPassButton: false,
      shouldAllowRunePlacement: false
    }));
  }

  getNewStockpileAmount(isWinner, viking, resource) {
    console.log(`> getNewStockpileAmount(${viking}, ${resource}})`);

    if (isWinner) {
      if (resource === "gold") {
        let potsGold = this.state.pot.filter(x => {
          return x === "gold";
        }).length;
        let potsTotem = this.state.pot.filter(x => {
          return x === "totem";
        }).length;

        let calculatedNewGoldAmount = (this.state[viking].gold +=
          potsGold - potsTotem * 2);
        if (calculatedNewGoldAmount < 0) {
          calculatedNewGoldAmount = 0;
        }

        return calculatedNewGoldAmount;
      } else if (resource === "fish") {
        let potsFish = this.state.pot.filter(x => {
          return x === "fish";
        }).length;
        let potsSeaweed = this.state.pot.filter(x => {
          return x === "seaweed";
        }).length;

        let calculatedNewFishAmount = (this.state[viking].fish +=
          potsFish - potsSeaweed * 2);
        if (calculatedNewFishAmount < 0) {
          calculatedNewFishAmount = 0;
        }
        return calculatedNewFishAmount;
      } else {
        console.log("ERR: getNewStockpileAmount detected no resource");
      }
    } else {
      if (resource === "gold") {
        let gold = this.state[viking].gold;
        if (gold < 0) {
          gold = 0;
        }
        return gold;
      } else if (resource === "fish") {
        let fish = this.state[viking].fish;
        if (fish < 0) {
          fish = 0;
        }
        return fish;
      } else {
        console.log("ERR: getNewStockpileAmount detected no resource");
      }
    }
  }

  getCalculatedScore(isWinner, viking, goldAmount, winnersFish, losersFish) {
    console.log(
      `> getCalculatedScore(${isWinner}, ${viking}, ${goldAmount}, ${winnersFish}, ${losersFish})`
    );

    if (winnersFish === losersFish) {
      console.log("Same fish");
      let score = goldAmount < 0 ? 0 : goldAmount;
      return score;
    } else if (isWinner && winnersFish > losersFish) {
      let score = goldAmount < 0 ? 10 : goldAmount + 10;
      return score;
    } else if (!isWinner && winnersFish < losersFish) {
      let score = goldAmount < 0 ? 10 : goldAmount + 10;
      return score;
    } else {
      let score = goldAmount < 0 ? 0 : goldAmount;
      return score;
    }
  }

  checkForcedBet() {
    console.log("> checkForcedBet()");

    const pot = this.state.pot;

    if (pot.length >= 8 && !this.state.isInBet) {
      this.setState({
        mustBet: true,
        shouldDisplayBetButton: true,
        shouldDisplayDrawButton: false,
        shouldDisplayPassButton: false,
        shouldAllowRunePlacement: false
      });
    }
  }

  componentDidUpdate() {
    console.log("> componentDidUpdate()");
    console.log(
      `DEBUG:\nopponents runes: ${this.state.opponent.runes}\nusers runes: ${this.state.user.runes}`
    );

    if (!this.state.mustBet) {
      this.checkForcedBet();
    }

    if (!this.state.isUsersTurn) {
      Opponent.act(
        this.state,
        this.draw,
        this.bet,
        this.pass,
        this.handlePlaceRune
      );
    }

    // ------------- Dev Turn Tracking
    let whosTurnIsIt = this.state.isUsersTurn ? "User" : "Opponent";
    console.log(`----------${whosTurnIsIt}----------`);
  }

  componentDidMount() {
    let whosTurnIsIt = this.state.isUsersTurn ? "User" : "Opponent";
    console.log(`----------${whosTurnIsIt}----------`);

    document.title = "Play Traders of the North";
  }

  render() {
    return (
      <div id="Game">
        <div
          className=""
          id="btn-bar"
          onClick={() => this.props.handleScreenSelectionClick("title")}
        >
          <div onClick={() => this.props.handleScreenSelectionClick("title")}>
            <i className="fas fa-home fa-3x"></i>
          </div>

          <div onClick={() => console.log("Button for options clicked")}>
            <i className="fas fa-bars fa-3x"></i>
          </div>
        </div>

        <div id="pot">
          <PotBoard pot={this.state.pot} />
        </div>

        <div id="action-board">
          <ActionBoard
            handlePlaceRune={this.handlePlaceRune}
            usersRunes={this.state.user.runes}
            shouldDisplayBetButton={this.state.shouldDisplayBetButton}
            shouldDisplayDrawButton={this.state.shouldDisplayDrawButton}
            shouldDisplayPassButton={this.state.shouldDisplayPassButton}
            shouldAllowRunePlacement={this.state.shouldAllowRunePlacement}
            isUsersTurn={this.state.isUsersTurn}
            bet={this.bet}
            draw={this.draw}
            pass={this.pass}
          />
        </div>

        <div id="player-portrait">
          <Portrait name={this.state.user.firstName} />
        </div>

        <div id="opponent-portrait">
          <Portrait name={this.state.opponent.firstName} />
        </div>

        <div id="player-stockpile">
          <Stockpile viking={this.state.user} />
        </div>

        <div id="opponent-stockpile">
          <Stockpile viking={this.state.opponent} />
        </div>

        <div id="player-available-runes">
          <AvailableRunes runes={this.state.user.runes} />
        </div>

        <div id="opponent-available-runes">
          <AvailableRunes runes={this.state.opponent.runes} />
        </div>
      </div>
    );
  }
}

export default Game;
