import React from "react";
import Footer from "../Footer/Footer";
import btnBetPNG from "../../../res/buttons/bt_bet_normal.png";
import btnDrawPNG from "../../../res/buttons/bt_draw_normal.png";
import btnPassPNG from "../../../res/buttons/bt_pass_normal.png";
import "./Game.scss";

const Game: React.FC<any> = () => {
    return(
        <div id="Game">

            <div id="scoreboard">

            </div>

            <div id="pot">

            </div>

            <div id="actionboard">
                <img src={btnDrawPNG} />                
                <img src={btnBetPNG} />
                <img src={btnPassPNG} />
            </div>
            <Footer />
        </div>
    )
}

export default Game;
