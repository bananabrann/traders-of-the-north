import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import btnBetPNG from "../../../res/buttons/bt_bet_normal.png";
import btnDrawPNG from "../../../res/buttons/bt_draw_normal.png";
import btnPassPNG from "../../../res/buttons/bt_pass_normal.png";
import "./Game.scss";

const RUNE_RES_PATH = "../../../res/runes";

interface IRune {
    value: number;
    resPath: string;
}

interface IGameState {
    player: {
        vikingName?: string;
        runes: IRune[];
        score: number;
        stockpile: {
            gold: number;
            badgold: number;
            fish: number;
            badfish: number;
        };
    };
    opponent: {
        vikingName?: string;
        runes: IRune[];
        score: number;
        stockpile: {
            gold: number;
            badgold: number;
            fish: number;
            badfish: number;
        };
    };
}

const Game: React.FC<any> = () => {
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

    const [gameState, setGameState] = useState<IGameState>({
        player: {
            vikingName: "Sigrid",
            runes: runeBagAlpha,
            score: 0,
            stockpile: {
                gold: 0,
                badgold: 0,
                fish: 0,
                badfish: 0,
            },
        },
        opponent: {
            vikingName: "Ulf",
            runes: runeBagBravo,
            score: 0,
            stockpile: {
                gold: 0,
                badgold: 0,
                fish: 0,
                badfish: 0,
            },
        },
    });

    return (
        <div id="Game">
            <div id="scoreboard"></div>

            <div id="pot"></div>

            <div id="actionboard">
                <img src={btnDrawPNG} />
                <img src={btnBetPNG} />
                <img src={btnPassPNG} />
            </div>
            <Footer />
        </div>
    );
};

export default Game;
