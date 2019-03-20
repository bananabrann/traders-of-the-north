import React, { Component } from 'react';
import Rune from "./Rune/Rune";

class Runeboard extends Component {
    render() {
        return (
            <div>
                Runeboard
                <div onClick={() => this.props.bet(2)}> 2 </div>
                <div onClick={() => this.props.bet(5)}> 5 </div>
                <div onClick={() => this.props.bet(6)}> 6 </div>
                <div onClick={() => this.props.bet(9)}> 9 </div>
                <br />
            </div>
        );
    }
}

export default Runeboard;