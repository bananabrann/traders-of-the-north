import React from "react";
import btnBetPNG from "../../../../res/buttons/bt_bet_normal.png";
import btnDrawPNG from "../../../../res/buttons/bt_draw_normal.png";
import btnPassPNG from "../../../../res/buttons/bt_pass_normal.png";
import btnBetPressedPNG from "../../../../res/buttons/bt_bet_pressed.png";
import btnDrawPressedPNG from "../../../../res/buttons/bt_draw_pressed.png";
import btnPassPressedPNG from "../../../../res/buttons/bt_pass_pressed.png";
import "./ActionButton.scss";

interface IActionButtonProps {
    name: string;
    // FIXME
    // Add interface type checking for visibility spread operator
    // from Game.tsx
}

const ActionButton: React.FC<any> = (props) => {
    // TODO -- Refactor
    if (props.name === "draw") {
        return props.isDrawVisible ? (
            <img
                src={btnDrawPNG}
                alt="Draw button."
                onClick={() => {
                    props.handleAction(props.name);
                }}
            />
        ) : (
            <img src={btnDrawPressedPNG} alt="Draw button pressed." />
        );
    } else if (props.name === "bet") {
        return props.isBetVisible ? (
            <img
                src={btnBetPNG}
                alt="Bet button."
                onClick={() => {
                    props.handleAction(props.name);
                }}
            />
        ) : (
            <img src={btnBetPressedPNG} alt="Bet button pressed." />
        );
    } else if (props.name === "pass") {
        return props.isPassVisible ? (
            <img
                src={btnPassPNG}
                alt="Pass button"
                onClick={() => {
                    props.handleAction(props.name);
                }}
            />
        ) : (
            <img src={btnPassPressedPNG} alt="Pass button pressed." />
        );
    } else {
        console.error(props);
        throw new Error(
            "ActionButton failed to return anything. An unrecognized prop variable was received."
        );
    }
};

export default ActionButton;
