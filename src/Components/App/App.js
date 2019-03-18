import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import Buttonboard from "../Buttonboard/Buttonboard";
import Headerboard from "../Headerboard/Headerboard";
import Potboard from "../Potboard/Potboard";
import Runeboard from "../Runeboard/Runeboard";


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
            manualActive: false
        };
        this.draw = this.draw.bind(this);
    }

    draw() {
        if (this.state.potTotal >= 8) {
            console.log("I'm sorry, max cards drawn!");
            // Make CSS on Draw button darkened
            return null;
        } else{
            this.setState({
                potTotal: this.state.potTotal + 1
            }, () => {
                console.log(this.state.potTotal)
            })
        }

    }

    componentDidUpdate() {
        console.log("Update!")
        // Check the pot and display its pictures according to what was drawn
    }

    render() {
        return (
            <div className="App">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                    <Headerboard />
                    <Potboard potTotal={this.state.potTotal} />
                    <Buttonboard draw={this.draw} potTotal={this.state.potTotal} />
                    <Runeboard />
                </p>
            </div>
        );
    }
}

export default App;
