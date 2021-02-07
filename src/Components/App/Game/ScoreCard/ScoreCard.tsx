import React from "react";
import { IRune } from "../Game";

interface IScoreCard {
    runes: IRune[];
    vikingName?: string;
    stockpile: {
        gold: number;
        fish: number;
    };
}

const ScoreCard: React.FC<IScoreCard> = (props) => {
    return (
        <div className="scorecard">
            <p></p>
        </div>
    );
};

export default ScoreCard;
