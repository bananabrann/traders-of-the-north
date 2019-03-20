import React, { Component } from 'react';
import "./Piece.css";

class Piece extends Component {
    render() {
        return (
            <div>
                {this.props.tokenValue}
            </div>
        );
    }
}

export default Piece;