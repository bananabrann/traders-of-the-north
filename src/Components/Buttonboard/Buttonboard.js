import React, { Component } from "react";
import Draw from "./Draw/Draw";
import Bet from "./Bet/Bet";
import Scoreboard from "./Scoreboard/Scoreboard";

class Buttonboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.draw}>Draw</button>
                    <button onClick={this.props.bet}>Bet</button>
                    <button onClick={this.props.call}>Call</button>
                    <button onClick={this.props.pass}>Pass</button>
                </div>
                {/* <Draw pot={this.props.pot} /> */}
                {/* <Bet /> */}
                <Scoreboard />
            </div>
        );
    }
}

export default Buttonboard;
