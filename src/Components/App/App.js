import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Buttonboard from "../Buttonboard/Buttonboard";
import Headerboard from "../Headerboard/Headerboard";
import Potboard from "../Potboard/Potboard";
import Runeboard from "../Runeboard/Runeboard";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pot: 0
        }
        this.draw = this.draw.bind(this);
    }

    draw() {
        this.setState({
            pot: this.state.pot + 1

        })
        console.log(this.state.pot)
    }

  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Headerboard />
            <Potboard pot={this.state.pot}/>
            <Buttonboard draw={this.draw} pot={this.state.pot}/>
            <Runeboard />
          </p>
      </div>
    );
  }
}

export default App;
