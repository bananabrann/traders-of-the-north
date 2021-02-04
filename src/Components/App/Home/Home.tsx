import React from "react";
import { Link } from "react-router-dom";

interface IHomeProps {
    versionNumber: string | undefined,
    handleScreenSelection(destination: string): any;
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
    return(
        <div>
            <p>Home!</p>
            <p>{props.versionNumber}</p>
            <Link to="/game">
                <p>
                    Click me!
                </p>
            </Link>
        </div>
    )
}

export default Home;