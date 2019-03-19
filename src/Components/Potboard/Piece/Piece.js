import React, { Component } from 'react';

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