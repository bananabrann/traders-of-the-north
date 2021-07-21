import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./Game/Game";
import Home from "./Home/Home";

function App() {
  const [appVersion, setAppVersion] = useState<string>();

  // Only loads once on mount
  useEffect(() => {
    const v: string = process.env.REACT_APP_VERSION ?? "No version";
    setAppVersion(v);
  }, []);

  return (
    <div className="App">
      <Router>
        {/* TODO -- Do I need Switch if I'm doing 'exact'? */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home versionNumber={appVersion} />;
            }}
          />

          <Route
            exact
            path="/game"
            render={() => {
              return <Game />;
            }}
          />

          {/* 
          <Route
              exact
              path="/about"
              render={() => {
                  return <About />
              }}
          />
          */}

          {/* 
          <Route
              exact
              path="/instructions"
              render={() => {
                  return <Instructions />
              }}
          />
          */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
