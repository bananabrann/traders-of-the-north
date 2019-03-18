import React, { Component } from 'react';
import Badfish from "./Badfish/Badfish";
import Badgold from "./Badgold/Badgold";
import Fish from "./Fish/Fish";
import Gold from "./Gold/Gold";

class Potboard extends Component {
    render() {
        return (
            <div>
                <p>Pot {this.props.pot}</p>
            </div>
        );
    }
}

export default Potboard;