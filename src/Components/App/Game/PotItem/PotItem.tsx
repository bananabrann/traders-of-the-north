import React from "react";
import { IItem } from "../Game";
import PNGGold from "../../../../res/items/gold.png";
import PNGFish from "../../../../res/items/fish.png";
import PNGBadGold from "../../../../res/items/gold_bad.png";
import PNGBadFish from "../../../../res/items/fish_bad.png";
import "./PotItem.scss";

interface IPotItemProps {
    name: string;
    value: number;
}

const PotItem: React.FC<IItem> = (props: IPotItemProps) => {
    let item;

    switch (props.name) {
        case "fish":
            item = (
                <img className="pot-item" src={PNGFish} alt={`${props.name}`} />
            );
            break;

        case "gold":
            item = (
                <img className="pot-item" src={PNGGold} alt={`${props.name}`} />
            );
            break;

        case "badgold":
            item = (
                <img
                    className="pot-item"
                    src={PNGBadGold}
                    alt={`${props.name}`}
                />
            );
            break;

        case "badfish":
            item = (
                <img
                    className="pot-item"
                    src={PNGBadFish}
                    alt={`${props.name}`}
                />
            );
            break;
    }
    return <div>{item}</div>;
};

export default PotItem;
