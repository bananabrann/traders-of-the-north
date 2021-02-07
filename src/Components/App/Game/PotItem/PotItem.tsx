import React from "react";
import { IItem } from "../Game";
import "./PotItem.scss";

const PotItem: React.FC<IItem> = (props) => {
    const RES_PATH = "../../../../res/items";
    const path = `./../../../../res/items/${props.fileName}`;

    return (
        // FIXME -- Using the above variables don't work for some reason
        <img
            key=""
            className="pot-item"
            src={require(`./../../../../res/items/${props.fileName}`)}
        />
    );
};

export default PotItem;
