import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import Buttonboard from "../Buttonboard/Buttonboard";
import Headerboard from "../Headerboard/Headerboard";
import Potboard from "../Potboard/Potboard";
import Runeboard from "../Runeboard/Runeboard";

const userViking = {

}
const player2 = {

}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            potTotal: 0,
            potGold: 0,
            potFish: 0,
            potBadGold: 0,
            PotBadFish: 0,

            usersTurn: null,
            inBet: false,
            mustBet: false,
            manualActive: false
        };
        this.draw = this.draw.bind(this);
        this.bet = this.bet.bind(this);
        this.call = this.call.bind(this);
        this.pass = this.pass.bind(this);

    }

    draw() {
        if (this.state.potTotal >= 8) {
            console.log("GAME ERROR: max draw");
            // Make CSS on Draw button darkened
            return null;
        } else {
            this.setState({potTotal: this.state.potTotal + 1}, () => { console.log(this.state.potTotal); });
        }
    }

    bet() {
        if (!this.state.inBet) {
            this.setState({
                inBet: true
            })
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
            console.log("'call'")
            // Show the pass button CSS

            // Check runes for victory

            this.setState({
                inBet: false
            })

        } else {
            // Hide and disable the pass button
            console.log("GAME ERROR: 'call' activated but inBet is false")
            return null;
        }
    }

    pass() {
        if (this.state.inBet) {
            console.log('passed');
            // Show the pass button CSS

            // Passes turn and forces bet
            this.setState({
                mustBet: true,
                inBet: false
            })
        } else {
            console.log("GAME ERROR: 'pass' called but inBet is false")
            return null;
        }
    }


    componentDidUpdate() {
        // console.log("Update!");
        // Check the pot and display its pictures according to what was drawn
    }

    render() {
        return (
            <div className="App">
                <p>
                    <Headerboard />
                    <Potboard potTotal={this.state.potTotal} />
                    <Buttonboard draw={this.draw} bet={this.bet} call={this.call} pass={this.pass} potTotal={this.state.potTotal} />
                    <Runeboard />
                </p>
            </div>
        );
    }
}

export default App;
