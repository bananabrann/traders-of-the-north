import React, { Component } from "react";
import Piece from "./Piece/Piece";
import "./Potboard.css";

class Potboard extends Component {
    render() {

        let potItems = this.props.pot.map((item, index) => {
            return (
                <div>
                    <Piece className="pot-item" tokenValue={item} key={index} />
                </div>
            )
        })

        return (
            <div className="pot"> {potItems} </div>
        );
    }
}

export default Potboard;
