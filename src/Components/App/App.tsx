import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./Game/Game";
import Home from "./Home/Home";

function App() {
    const [appVersion, setAppVersion] = useState<string | undefined>(
        process.env.REACT_APP_VERSION || undefined
    );

    // Only loads once on mount
    useEffect(() => {
        // If appVersion is undefined
        if (!appVersion) {
            console.error(
                `Unexpected app version found: ${undefined}`,
                `\nIs your environment file set correctly?`
            );
        }
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
