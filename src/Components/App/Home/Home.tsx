import React from "react";
import ScreenSelectionOption from "./ScreenSelectionOption/ScreenSelectionOption";
import logoPNG from "../../../res/misc/logo.png";
import "./Home.scss";

interface IHomeProps {
  versionNumber: string | undefined;
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <div id="home-screen">
      <img
        className="logo"
        src={logoPNG}
        alt="Logo for Traders of the North."
      />

      <div className="button-column">
        <ScreenSelectionOption value="playgame" destination="/game" />
        <ScreenSelectionOption
          value="instructions"
          destination="/instructions"
        />
        <ScreenSelectionOption value="about" destination="/about" />
      </div>

      <p className="version-text">Version {props.versionNumber}</p>

      <br />
    </div>
  );
};

export default Home;
