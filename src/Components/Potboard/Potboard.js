import React, { Component } from "react";
import Badfish from "./Badfish/Badfish";
import Badgold from "./Badgold/Badgold";
import Fish from "./Fish/Fish";
import Gold from "./Gold/Gold";
import Piece from "./Piece/Piece";
import "./Potboard.css";

class Potboard extends Component {
    render() {
        // let potItems = [];
        
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
