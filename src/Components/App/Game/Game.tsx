import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ActionButton from "./ActionButton/ActionButton";
import ScoreCard from "./ScoreCard/ScoreCard";
import btnBetPNG from "../../../res/buttons/bt_bet_normal.png";
import btnDrawPNG from "../../../res/buttons/bt_draw_normal.png";
import btnPassPNG from "../../../res/buttons/bt_pass_normal.png";
import "./Game.scss";

export interface IItem {
    name: string;
    value: number;
    resPath: string;
}

export interface IRune {
    value: number;
    resPath: string;
}

interface IGameState {
    isPlayersTurn: Boolean;
    player: {
        vikingName?: string;
        runes: IRune[];
        score: number;
        stockpile: {
            gold: number;
            fish: number;
        };
    };
    opponent: {
        vikingName?: string;
        runes: IRune[];
        score: number;
        stockpile: {
            gold: number;
            fish: number;
        };
    };
}

const Game: React.FC<any> = () => {
    /*
        SECTION -------
        Game statics
    */
    const RES_PATH = "../../../res";
    const RUNE_RES_PATH = `${RES_PATH}/runes`;
    const GOLD_RES_PATH = `${RES_PATH}/items/gold.png`;
    const BADGOLD_RES_PATH = `${RES_PATH}/items/gold_bad.png`;
    const FISH_RES_PATH = `${RES_PATH}/items/fish.png`;
    const BADFISH_RES_PATH = `${RES_PATH}/items/fish_bad.png`;

    const runeBagAlpha: IRune[] = [
        { value: 2, resPath: `${RUNE_RES_PATH}/rune-2.png` },
        { value: 4, resPath: `${RUNE_RES_PATH}/rune-4.png` },
        { value: 6, resPath: `${RUNE_RES_PATH}/rune-6.png` },
        { value: 8, resPath: `${RUNE_RES_PATH}/rune-8.png` },
    ];
    const runeBagBravo: IRune[] = [
        { value: 3, resPath: `${RUNE_RES_PATH}/rune-3.png` },
        { value: 5, resPath: `${RUNE_RES_PATH}/rune-5.png` },
        { value: 7, resPath: `${RUNE_RES_PATH}/rune-7.png` },
        { value: 9, resPath: `${RUNE_RES_PATH}/rune-9.png` },
    ];

    const bag: IItem[] = [
        { name: "gold", value: 1, resPath: GOLD_RES_PATH },
        { name: "gold", value: 1, resPath: GOLD_RES_PATH },
        { name: "gold", value: 1, resPath: GOLD_RES_PATH },
        { name: "fish", value: 1, resPath: FISH_RES_PATH },
        { name: "fish", value: 1, resPath: FISH_RES_PATH },
        { name: "gold", value: -2, resPath: BADGOLD_RES_PATH },
        { name: "fish", value: -2, resPath: BADFISH_RES_PATH },
    ];

    /*
        SECTION -------
        States and effects
    */
    const [visibility, setVisibility] = useState({
        isDrawVisible: true,
        isBetVisible: true,
        isPassVisible: false,
    });

    const [gameState, setGameState] = useState<IGameState>({
        isPlayersTurn: true,
        player: {
            vikingName: "Sigrid Treasureborn",
            runes: runeBagAlpha,
            score: 0,
            stockpile: {
                gold: 0,
                fish: 0,
            },
        },
        opponent: {
            vikingName: "Ulf Goldkeeper",
            runes: runeBagBravo,
            score: 0,
            stockpile: {
                gold: 0,
                fish: 0,
            },
        },
    });

    // Manage button visibility
    useEffect(() => {
        console.log("useEffect((), [gameState])");

        // TODO -- Evaluate the gameState and change button visibilities accordingly
        // Logic

        // Set state
    }, [gameState]);

    /*
        SECTION -------
        Functions
    */
    function handleActionButtonClick(buttonName: string) {
        console.log(`ActionButton ${buttonName} clicked!`);
    }

    /*
        SECTION -------
        Rendering
    */
    return (
        <div id="Game">
            <div id="scoreboard">
                <ScoreCard  />
            </div>

            <div id="pot"></div>

            <div id="actionboard">
                <ActionButton
                    name="draw"
                    {...visibility}
                    handleActionButtonClick={handleActionButtonClick}
                />
                <ActionButton
                    name="bet"
                    {...visibility}
                    handleActionButtonClick={handleActionButtonClick}
                />
                <ActionButton
                    name="pass"
                    {...visibility}
                    handleActionButtonClick={handleActionButtonClick}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Game;
