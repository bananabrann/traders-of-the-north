import React, { Component } from "react";

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
            </div>
        );
    }
}

export default Buttonboard;
