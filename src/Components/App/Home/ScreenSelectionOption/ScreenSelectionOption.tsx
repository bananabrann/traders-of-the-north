import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import btnAboutPNG from "../../../../res/buttons/home_about.png";
import btnInstructionsPNG from "../../../../res/buttons/home_instructions.png";
import btnPlayGame from "../../../../res/buttons/home_playgame.png";
import "./ScreenSelectionOption.scss";

interface IScreenSelectionOptionProps {
    value: string;
    destination: string;
}

const ScreenSelectionOption: React.FC<IScreenSelectionOptionProps> = (
    props: IScreenSelectionOptionProps
) => {
    try {
        if (props.value === "about") {
            return (
                <Link to={props.destination}>
                    <img src={btnAboutPNG} />
                </Link>
            );
        } else if (props.value === "instructions") {
            return (
                <Link to={props.destination}>
                    <img src={btnInstructionsPNG} />
                </Link>
            );
        } else if (props.value === "playgame") {
            return (
                <Link to={props.destination}>
                    <img src={btnPlayGame} />
                </Link>
            );
        }
    } catch (err) {
        console.error(
            "No Home screen buttons rendered!\nprops.value was an unexpected value."
        );
        return err;
    }
};

export default ScreenSelectionOption;
