import React, { Component } from 'react';

class Runeboard extends Component {
    render() {
        return (
            <div>
                Runeboard
                <span onClick={() => this.props.activateRune(2)}> 2 </span>
                <span onClick={() => this.props.activateRune(5)}> 5 </span>
                <span onClick={() => this.props.activateRune(6)}> 6 </span>
                <span onClick={() => this.props.activateRune(9)}> 9 </span>
                <br />
                <br />
            </div>
        );
    }
}

export default Runeboard;