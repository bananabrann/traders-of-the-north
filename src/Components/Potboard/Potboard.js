import React, { Component } from "react";
import Badfish from "./Badfish/Badfish";
import Badgold from "./Badgold/Badgold";
import Fish from "./Fish/Fish";
import Gold from "./Gold/Gold";

class Potboard extends Component {
    render() {
        let potItems = [];
        for (let i = 0; i < this.props.potTotal; i++) {
            potItems.push("Item ");
        }
        console.log(potItems)

        return (
            <div className="pot">
                <p>{potItems}</p>
            </div>
        );
    }
}

export default Potboard;
