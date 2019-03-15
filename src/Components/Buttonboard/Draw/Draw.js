import React, { Component } from 'react';

class Draw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pot: this.props.pot
        }
        this.drawToken = this.drawToken.bind(this);
    }

    drawToken() {
        this.setState({
            
        })
        console.log(this.props.pot)
        console.log(this.state.pot)
    }

    render() {
        return (
            <div>
                <button onClick={this.drawToken}>Draw</button>
            </div>
        );
    }
}

export default Draw;