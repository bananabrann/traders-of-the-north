import React from "react";
import ScreenSelectionOption from "./ScreenSelectionOption/ScreenSelectionOption";

interface IHomeProps {
    versionNumber: string | undefined,
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
    return(
        <div id="home-screen">
            <p>Home!</p>
            <p>{props.versionNumber}</p>

            <div>
                <ScreenSelectionOption value="playgame" destination="/game" />
                <ScreenSelectionOption value="instructions" destination="/instructions" />
                <ScreenSelectionOption value="about" destination="/about" />
            </div>
        </div>
    )
}

export default Home;
