import React, { Component } from "react";
import "./Reset.css";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayTitle: true,
            displayGame: false,
            displayInstructions: false
        };
    }

    render() {
        return (
            <div className="App">
                <p>Hello World!</p>
            </div>
        );
    }
}

export default App;
