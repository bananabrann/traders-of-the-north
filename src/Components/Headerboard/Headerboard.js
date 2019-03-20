import React, { Component } from 'react';

class Headerboard extends Component {
    render() {
        return (
            <div>
                Message: {this.props.message}
            </div>
        );
    }
}

export default Headerboard;