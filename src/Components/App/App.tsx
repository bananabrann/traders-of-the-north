import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
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
                <Switch>
                    <Route
                        path="/"
                        render={() => {
                            return (
                                <div>
                                    <Home versionNumber={appVersion} />
                                </div>
                            );
                        }}
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
