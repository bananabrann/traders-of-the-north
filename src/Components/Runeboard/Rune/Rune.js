import React, { Component } from 'react';

class Rune extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div onClick={() => this.props.activateRune(this.props.runeValue)}>
                {this.props.runeValue}
            </div>
        );
    }
}

export default Rune;