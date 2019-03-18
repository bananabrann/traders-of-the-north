import React, { Component } from "react";
import Badfish from "./Badfish/Badfish";
import Badgold from "./Badgold/Badgold";
import Fish from "./Fish/Fish";
import Gold from "./Gold/Gold";
import Rune from "./Rune/Rune";
import "./Potboard.css";

class Potboard extends Component {
    render() {
        let potItems = [];

        for (let g = 0; g < this.props.potGold; g++) {
            return( <Gold className="pot-item gold" key={g} /> )
        }
        for (let f = 0; f < this.props.potGold; f++) {
            return( <Fish className="pot-item fish" key={f} /> )
        }

        for (let i = 0; i < this.props.potTotal; i++) {
            return (
                <Rune className="pot-item" key={i}/>
            )
        }

        return (
            <div className="pot">
            </div>
        );
    }
}

export default Potboard;
