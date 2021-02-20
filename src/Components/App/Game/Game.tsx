import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ActionButton from "./ActionButton/ActionButton";
import ScoreCard from "./ScoreCard/ScoreCard";
import btnBetPNG from "../../../res/buttons/bt_bet_normal.png";
import btnDrawPNG from "../../../res/buttons/bt_draw_normal.png";
import btnPassPNG from "../../../res/buttons/bt_pass_normal.png";
import "./Game.scss";
import PotItem from "./PotItem/PotItem";
import Utils from "../../../utils";
import Opponent from "../../../opponent";

export interface IItem {
    name: string;
    value: number;
    fileName: string;
}

export interface IRune {
    value: number;
    fileName?: string;
}

interface IGameState {
    isPlayersTurn: boolean;
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
    pot: IItem[];
    specialConditions: string[];
}

const Game: React.FC<any> = () => {
    /*
        SECTION -------
        Game statics
    */
    const GOLD_RES_FILE_NAME = "gold.png";
    const FISH_RES_FILE_NAME = "fish.png";
    const BADGOLD_RES_FILE_NAME = "gold_bad.png";
    const BADFISH_RES_FILE_NAME = "fish_bad.png";

    const runeBagAlpha: IRune[] = [
        { value: 2, fileName: `rune-2.png` },
        { value: 4, fileName: `rune-4.png` },
        { value: 6, fileName: `rune-6.png` },
        { value: 8, fileName: `rune-8.png` },
    ];
    const runeBagBravo: IRune[] = [
        { value: 3, fileName: `rune-3.png` },
        { value: 5, fileName: `rune-5.png` },
        { value: 7, fileName: `rune-7.png` },
        { value: 9, fileName: `rune-9.png` },
    ];

    const bag: IItem[] = [
        { name: "gold", value: 1, fileName: GOLD_RES_FILE_NAME },
        { name: "gold", value: 1, fileName: GOLD_RES_FILE_NAME },
        { name: "gold", value: 1, fileName: GOLD_RES_FILE_NAME },
        { name: "fish", value: 1, fileName: FISH_RES_FILE_NAME },
        { name: "fish", value: 1, fileName: FISH_RES_FILE_NAME },
        { name: "gold", value: -2, fileName: BADGOLD_RES_FILE_NAME },
        { name: "fish", value: -2, fileName: BADFISH_RES_FILE_NAME },
    ];

    /*
        SECTION -------
        States and effects
    */
    const [opponent, setOpponent] = useState<Opponent | undefined>();

    const [buttonVisibility, setButtonVisibility] = useState({
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
        pot: [],
        specialConditions: [""],
    });

    useEffect(() => {
        setOpponent(new Opponent(0, 1000, handleAction, endTurn));
    }, []);

    useEffect(() => {
        if (!gameState.isPlayersTurn) opponent?.makeMove();
    }, [gameState.isPlayersTurn]);

    useEffect(() => {
        checkAndApplySpecialConditions();
        applyButtonVisibilities();
    }, [gameState]);

    /*
        SECTION -------
        Functions
    */

    function checkAndApplySpecialConditions() {
        if (gameState.pot.length >= 8) {
            setGameState({
                ...gameState,
                specialConditions: ["must bet"],
            });
        }
    }

    function endTurn() {
        setGameState({
            ...gameState,
            isPlayersTurn: !gameState.isPlayersTurn,
        });
    }

    function handleAction(
        actionName: string,
        calledFromOpponent: boolean = false
    ) {
        switch (actionName) {
            case "draw":
                draw();
                break;
            case "bet":
                break;
            case "pass":
                break;
            default:
                throw new Error(
                    "Unexpected button name was passed into handleActionbButtonClick"
                );
        }

        /*
            NOTE
            At this point in the process, we are potentially nested within a useEffect.
            If we are, meaning meaning the opponent is calling handleAction, then we need
            to escape everything so that an infinite loop isn't triggered.
        */
        if (calledFromOpponent) return null;
        endTurn();
    }

    function draw() {
        const pieceToAdd: IItem = Utils.getRandomFromArray(bag);
        const newPot: IItem[] = gameState.pot;

        newPot.push(pieceToAdd);

        setGameState({
            ...gameState,
            pot: newPot,
        });
    }

    function applyButtonVisibilities(devByPass: Boolean = false) {
        if (devByPass) {
            Utils.consoleWarnAboutDevByPassMode();
        }

        if (!gameState.isPlayersTurn && !devByPass) {
            setButtonVisibility({
                isDrawVisible: false,
                isBetVisible: false,
                isPassVisible: false,
            });
        } else {
            if (gameState.specialConditions.includes("must bet")) {
                setButtonVisibility({
                    isDrawVisible: false,
                    isBetVisible: true,
                    isPassVisible: false,
                });
            } else {
                setButtonVisibility({
                    isDrawVisible: true,
                    isBetVisible: true,
                    isPassVisible: false,
                });
            }
        }
    }

    /*
        SECTION -------
        Rendering
    */
    return (
        <div id="Game">
            {/* TODO -- Put scoreboard in subcomponent */}
            <div id="scoreboard">
                <div className="viking-score">
                    <div className="stockpile">
                        <p>Gold: {gameState.player.stockpile.gold}</p>
                        <p>Fish: {gameState.player.stockpile.gold}</p>
                    </div>
                    <div className="score">
                        <p>{gameState.player.score}</p>
                    </div>
                </div>

                <div className="viking-score">
                    <div className="score">
                        <p>{gameState.opponent.score}</p>
                    </div>
                    <div className="stockpile">
                        <p>Gold: {gameState.opponent.stockpile.gold} </p>
                        <p>Fish: {gameState.opponent.stockpile.fish} </p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------- */}

            <div id="pot">
                {gameState.pot.map((item) => {
                    return <PotItem {...item} />;
                })}
            </div>

            <div id="actionboard">
                <ActionButton
                    name="draw"
                    {...buttonVisibility}
                    handleAction={handleAction}
                />
                <ActionButton
                    name="bet"
                    {...buttonVisibility}
                    handleAction={handleAction}
                />
                <ActionButton
                    name="pass"
                    {...buttonVisibility}
                    handleAction={handleAction}
                />
            </div>
            <Footer />
        </div>
    );
};

export default Game;
