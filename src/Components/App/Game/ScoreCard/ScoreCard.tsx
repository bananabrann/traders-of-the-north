import React from "react";
import { IRune} from "../Game";


interface IScoreCard {
    gold: number;
    fish: number;
    runes: IRune[];
    vikingName?: string;
}

const ScoreCard: React.FC<IScoreCard> = (props) => {
    return (
        <div className="scorecard">
            <p></p>
        </div>
    );
};

export default ScoreCard;
