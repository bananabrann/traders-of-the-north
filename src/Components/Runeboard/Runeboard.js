import React, { Component } from 'react';
import Rune from "./Rune/Rune";

class Runeboard extends Component {
    render() {
        return (
            <div>
                Runeboard
                <Rune />
                <Rune />
            </div>
        );
    }
}

export default Runeboard;