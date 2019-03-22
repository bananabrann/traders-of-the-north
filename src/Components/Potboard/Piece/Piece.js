import React, { Component } from 'react';
import "./Piece.css";

class Piece extends Component {
    render() {
        return (
            <div>
                <img className="pot-item" ref="image" src={this.props.imgUrl} />
            </div>
        );
    }
}

export default Piece;