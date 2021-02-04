import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

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

    return (
        <div className="App">
            <Router>
                <Route
                    path="/"
                    render={() => {
                        return(
                            <div>
                                <p>Hello world!</p>
                            </div>
                        );
                    }}
                />
            </Router>
        </div>
    );
}

export default App;
