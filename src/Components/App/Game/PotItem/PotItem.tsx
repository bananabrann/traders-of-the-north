import React from "react";
import { IItem } from "../Game";
import "./PotItem.scss";

const PotItem: React.FC<IItem> = (props) => {
    /*
    const RES_PATH = "../../../../res/items";
    const path = `./../../../../res/items/${props.fileName}`;
    */

    return (
        // FIXME -- Using the above variables don't work for some reason
        <img
            className="pot-item"
            src={require(`./../../../../res/items/${props.fileName}`)}
            alt={`${props.name}`}
        />
    );
};

export default PotItem;
