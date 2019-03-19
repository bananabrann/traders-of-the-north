import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import Buttonboard from "../Buttonboard/Buttonboard";
import Headerboard from "../Headerboard/Headerboard";
import Potboard from "../Potboard/Potboard";
import Runeboard from "../Runeboard/Runeboard";
import Scoreboard from "../Scoreboard/Scoreboard";

const bag = ["fish", "gold", "badgold", "badfish"]

const player = {
    gold: 0,
    fish: 0,
    badGold: 0,
    badFish: 0
};
const opp = {
    gold: 0,
    fish: 0,
    badGold: 0,
    badFish: 0
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pot: [],
            potTotal: 0,

            usersTurn: null,
            inBet: false,
            mustBet: false,
            manualActive: false
        };
        this.draw = this.draw.bind(this);
        this.bet = this.bet.bind(this);
        this.call = this.call.bind(this);
        this.pass = this.pass.bind(this);
        this.toggleManual = this.toggleManual.bind(this);
    }

    draw() {
        if (this.state.potTotal < 8 && !this.state.inBet) {
            let newDraw = bag[Math.floor(Math.random()*bag.length)];
            console.log(`${newDraw} has been drawn`)

            this.setState({
                potTotal: this.state.potTotal + 1,
                pot: [...this.state.pot, newDraw]
            }, () => {
                console.log(this.state.pot)
                console.log(`potTotal is ${this.state.potTotal}`);
            })
        } else {
            // Make CSS on Draw button darkened
            console.log(`GAME ERROR: max draw or inBet is true. totalPot is ${this.state.potTotal}`);
            return null;
        }
    }

    bet() {
        if (!this.state.inBet) {
            this.setState({
                inBet: true
            });
            console.log("'bet'");
            // Bet logic here
        } else {
            console.log("GAME ERROR: 'bet' called but inBet is true");
            // Make Bet CSS darkened and unavailable

            return null;
        }
    }

    call() {
        if (this.state.inBet) {
            console.log("'call'");
            // Show the pass button CSS

            // Check runes for victory

            this.setState({
                inBet: false
            });
        } else {
            // Hide and disable the pass button
            console.log("GAME ERROR: 'call' activated but inBet is false");
            return null;
        }
    }

    pass() {
        if (this.state.inBet) {
            console.log("'passed'");
            // Show the pass button CSS

            // Passes turn and forces bet
            this.setState({
                mustBet: true,
                inBet: false
            });
        } else {
            console.log("GAME ERROR: 'pass' called but inBet is false");
            return null;
        }
    }

    toggleManual() {
        this.setState({
            manualActive: !this.state.manualActive
        }, () => {
            console.log(`show manual: ${this.state.manualActive}`)
        })
    }

    componentDidUpdate() {
        // console.log("Update!");
        // Check the pot and display its pictures according to what was drawn
    }

    render() {
        return (
            <div className="App">
                <Headerboard />
                <Potboard
                    pot={this.state.pot}
                    potTotal={this.state.potTotal}
                />
                <Runeboard />
                <Buttonboard
                    potTotal={this.state.potTotal}
                    draw={this.draw}
                    bet={this.bet}
                    call={this.call}
                    pass={this.pass}
                    toggleManual={this.toggleManual}
                />
                <Scoreboard
                    pot={this.state.pot}
                    potTotal={this.state.potTotal}
                />
            </div>
        );
    }
}

export default App;
