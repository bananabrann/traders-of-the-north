import { DESTRUCTION } from "dns";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Game from "./Game/Game";
import Home from "./Home/Home";

interface IScreen {
    name: string;
    route: string;
    displayName?: string;
}

const defaultScreenAfterLoad: IScreen = {
    name: "Loading Screen",
    route: "/",
};

function App() {
    const [screen, setScreen] = useState<IScreen>(defaultScreenAfterLoad);
    const [appVersion, setAppVersion] = useState<string | undefined>(
        process.env.REACT_APP_VERSION || undefined
    );

    function handleScreenSelection(destination: string) {
        console.log(destination)
        if(destination === "game") {
            console.log("redirect");

        } else {

        }
    }

    // Only loads once on mount
    useEffect(() => {
        // If appVersion is undefined
        if (!appVersion) {
            console.error(
                `Unexpected app version found: ${undefined}`,
                `\nIs your environment file set correctly?`
            );
        }
    }, [])

    return (
        <div className="App">
            <Router>
                {/* TODO -- Do I need Switch if I'm doing 'exact'? */}
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <div>
                                    <Home versionNumber={appVersion} handleScreenSelection={handleScreenSelection} />
                                </div>
                            );
                        }}
                    />

                    <Route
                        exact
                        path="/game"
                        render={() => {
                            return(
                                <div>
                                    <Game />
                                </div>
                            )
                        }}
                        />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
