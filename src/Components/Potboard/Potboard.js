import React, { Component } from "react";
import Piece from "./Piece/Piece";
import "./Potboard.css";

class Potboard extends Component {
    render() {
        const piecePicUrl = this.props.pot.map(piece => {
            if (piece === "fish") {
                return "https://www.placecage.com/c/100/100";
            } else if (piece === "gold") {
                return "https://www.placecage.com/c/100/100";
            } else if (piece === "badfish") {
                return "https://www.placecage.com/g/100/100";
            } else if (piece === "badgold") {
                return "https://www.placecage.com/g/100/100";
            } else {
                console.log(`GAME ERROR: Failed to produce piecePicUrl url for #${this.props.potTotal}... 'item' identifier not recognized`);
            }
        });

        const potItems = piecePicUrl.map((item, index) => {
            return (
                <div>
                    <Piece tokenValue={item} imgUrl={piecePicUrl[index]} alt="game-piece-img" key={index}  />
                </div>
            )
        })

        return (
            <div className="pot"> {potItems} </div>
        );
    }
}

export default Potboard;
