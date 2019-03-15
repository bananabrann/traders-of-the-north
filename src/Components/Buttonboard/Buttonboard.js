import React, { Component } from 'react';
import Draw from "./Draw/Draw";
import Bet from "./Bet/Bet";
import Scoreboard from "./Scoreboard/Scoreboard";

class Buttonboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pot: this.props.pot
        }
    }

    render() {
        return (
            <div>
                <Draw pot={this.state.pot}/>
                <Bet />
                <Scoreboard />
            </div>
        );
    }
}

export default Buttonboard;