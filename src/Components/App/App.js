import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Buttonboard from "../Buttonboard/Buttonboard";
import Headerboard from "../Headerboard/Headerboard";
import Potboard from "../Potboard/Potboard";
import Runeboard from "../Runeboard/Runeboard";

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <Headerboard />
            <Potboard />
            <Buttonboard />
            <Runeboard />
          </p>
      </div>
    );
  }
}

export default App;
