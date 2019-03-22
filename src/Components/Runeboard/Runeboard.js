import React, { Component } from 'react';
import Rune from "./Rune/Rune";

class Runeboard extends Component {

    render() {
        let runes = this.props.usersRunes.map((runeValue, i) => {
            return(
                <div>
                    <Rune activateRune={this.props.activateRune} runeValue={runeValue} key={i} />
                </div>
            )
        })

        return(
            <div>
                {runes}
            </div>
        )
    }
}

export default Runeboard;