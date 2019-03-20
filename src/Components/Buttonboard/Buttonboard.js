import React, { Component } from "react";

class Buttonboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.draw}>Draw</button>

                    {/* <button onClick={this.props.bet}>Bet (Runes be here)</button> */}

                    <button onClick={this.props.call}>Call</button>
                    <button onClick={this.props.pass}>Pass</button>
                    <button onClick={this.props.toggleManual}>Manual</button>
                </div>
                {/* <Draw pot={this.props.pot} /> */}
                {/* <Bet /> */}
            </div>
        );
    }
}

export default Buttonboard;
