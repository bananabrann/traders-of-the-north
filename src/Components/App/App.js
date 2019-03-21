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
            runesInPlay: [],

            usersTurn: null,
            inBet: false,
            mustBet: false,
            manualActive: false
        };
        this.methodTester = this.methodTester.bind(this);
        this.changeTurn = this.changeTurn.bind(this);
        this.toggleManual = this.toggleManual.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.activateRune = this.activateRune.bind(this);

        this.draw = this.draw.bind(this);
        this.bet = this.bet.bind(this);
        this.call = this.call.bind(this);
        this.pass = this.pass.bind(this);


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

    changeTurn() {
        this.setState({
            usersTurn: !this.state.usersTurn
        })
    }

    draw() {
        if (this.state.potTotal < 8 && (!this.state.inBet && !this.state.mustBet)) {
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

            this.setState({
                    potTotal: this.state.potTotal + 1,
                    pot: [...this.state.pot, newDraw],
                }, () => { this.changeTurn() }
            );
        } else {
            // Make CSS on Draw button darkened
            if (this.state.potTotal === 8) {
                this.setMessage("The market is full, you must bet!");
                this.setState({
                    mustBet: true
                },() => { return null; })
            } else if (this.state.inBet && !this.state.mustBet) {
                this.setMessage("You have been called to bet! Either place a rune, or pass to force your opponent to place a rune.");
            } else if (this.state.inBet && this.state.mustBet) {
                this.setMessage("Your opponent passes. You must place a rune!");
            }

        }
    }

    activateRune(rune) {
        if (this.state.inBet || this.state.mustBet) {
            this.call(rune)
        } else if (!this.state.inBet) {
            this.setMessage("You cannot place a rune first!")
        }
    }



    bet(rune) {
        if (!this.state.inBet) {
            this.setState({
                inBet: true,
            }, () => {
                this.changeTurn();
                if (this.state.usersTurn) {
                    this.setMessage("You made a bet!");
                } else if (!this.state.usersTurn) {
                    this.setMessage("Your opponent has called a bet. Use a rune, or PASS to force your opponent to rune!");
                }
            });

            // Bet logic here
        } else {
            console.log("GAME ERROR: 'bet' called but inBet is true");
            // Make Bet CSS darkened and unavailable
            this.setMessage("There is already a trade in effect!");

            return null;
        }
    }

    call(rune) {
        this.state.runesInPlay.push(rune);

        if (this.state.inBet && this.state.runesInPlay.length === 2) {
            console.log("'call'");
            // Show the pass button CSS

            // Check runes for victory

            this.state.runesInPlay.splice(0, 2);

            this.setState({
                inBet: false,
                mustBet: false,
            }, () => {
                this.changeTurn()
            });
        } else if (this.state.inBet && this.state.runesInPlay.length !== 2){
            this.setState({

            }, () => { this.changeTurn() })
            return null;
        }
    }




    pass() {
        if (this.state.inBet && !this.state.mustBet && this.state.runesInPlay.length === 1) {
            this.setMessage("Betting player passes!");
            this.setState({
                inBet: false,
                mustBet: false,
                usersTurn: !this.state.usersTurn
            },() => {
                this.state.runesInPlay.splice(0, 1);
            })
        } else if (this.state.inBet && !this.state.mustBet) {
            console.log("'passed'");
            // Show the pass button CSS
            if (this.state.usersTurn) {
                this.setMessage("You have declined the trade.");
            } else {
                this.setMessage("Your opponent has declined the trade")
            }

            // Passes turn and forces bet
            this.setState({
                mustBet: true
            }, () => {

            });
        } else {
            if (this.state.mustBet) {
                this.setMessage("Your opponent has passed your bet. You must place a rune!");
            } else {
                console.log("GAME ERROR: 'pass' called but inBet is false");

                this.setMessage(
                    "You cannot PASS because your opponent has not bet!"
                );

                return null;
            }
        }
    
    }

    // make a rule checker that elimates the need for tons of if statements within the code, instead passing a pair of parameters that is then executed in this function to set the messageboard.



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
                <Runeboard activateRune={this.activateRune}/>
                <Buttonboard
                    potTotal={this.state.potTotal}
                    draw={this.draw}
                    bet={this.bet}
                    activateRune={this.activateRune}
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
