import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import Buttonboard from "../Buttonboard/Buttonboard";
import Headerboard from "../Headerboard/Headerboard";
import Potboard from "../Potboard/Potboard";
import Runeboard from "../Runeboard/Runeboard";
import Scoreboard from "../Scoreboard/Scoreboard";

import OppLogic from "../OppLogic/OppLogic"

const bag = ["gold", "gold", "fish", "fish", "fish", "badgold", "badfish"];

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
            message: "The longboat has landed! May the best trader take home the most loot!",

            pot: [],
            potTotal: 0,

            usersTurn: null,
            inBet: false,
            mustBet: false,
            manualActive: false
        };
        this.methodTester = this.methodTester.bind(this);

        this.draw = this.draw.bind(this);
        this.bet = this.bet.bind(this);
        this.call = this.call.bind(this);
        this.pass = this.pass.bind(this);
        this.toggleManual = this.toggleManual.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }

    methodTester(content) {
        // this is for testing passing methods to components
        console.log(content);
    }

    toggleManual() {
        this.setState({ manualActive: !this.state.manualActive }, () => {
            console.log(`show manual: ${this.state.manualActive}`);
        });
    }

    setMessage(content) {
        this.setState({
            message: content
        });
    }

    draw() {
        if (this.state.potTotal < 8 && !this.state.inBet) {
            let newDraw = bag[Math.floor(Math.random() * bag.length)];
            // console.log(`${newDraw} has been drawn`);
            this.setMessage(`${newDraw} is unloaded off the longboat!`);

            if (newDraw === "gold" || newDraw === "fish") {
                this.setMessage(`${newDraw} is unloaded off the longboat`);
            } else if (newDraw === "badgold") {
                this.setMessage("A bad omen from an unknown land is unloaded...");
            } else if (newDraw === "badfish") {
                this.setMessage("Fish has gone bad on the voyage, and is unloaded from the boat");
            } else {
                this.setMessage("An ERROR has occured in draw()");
            }

            this.setState(
                {
                    potTotal: this.state.potTotal + 1,
                    pot: [...this.state.pot, newDraw],
                    usersTurn: !this.state.usersTurn
                },
                () => {
                    // console.log(this.state.pot);
                    // console.log(`potTotal is ${this.state.potTotal}`);
                }
            );
        } else {
            // Make CSS on Draw button darkened
            this.setMessage("The market is full, you must bet!");
            this.setState({
                mustBet: true
            })
            // console.log(`GAME ERROR: max draw or inBet is true. totalPot is ${this.state.potTotal}`);
            return null;
        }
    }

    bet(rune) {
        if (!this.state.inBet) {
            this.setState({
                inBet: true,
                usersTurn: !this.state.usersTurn
            });
            console.log(`${rune} has been bet`);

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
                inBet: false,
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
                inBet: false,
                usersTurn: !this.state.usersTurn
            });
        } else {
            console.log("GAME ERROR: 'pass' called but inBet is false");

            this.setMessage(
                "You cannot PASS because your opponent has not bet!"
            );
            return null;
        }
    }



    componentDidUpdate() {
        if (this.state.potTotal === 0) {this.setMessage("An empty market looks appetizing to the boatsmen...")};



        // const displayedImgs = 
        // const pot = this.state.pot;



        // Check the pot and display its pictures according to what was drawn
        // ...
        // ...
        // ...

    }

    render() {
        return (
            <div className="App">
                <Headerboard message={this.state.message} />
                <Potboard pot={this.state.pot} potTotal={this.state.potTotal} />
                <Runeboard bet={this.bet}/>
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

                <OppLogic 
                    usersTurn={this.state.usersTurn}

                />
            </div>
        );
    }
}

export default App;
