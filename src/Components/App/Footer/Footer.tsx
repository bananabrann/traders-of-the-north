import React from "react";
import logoPNG from "../../../res/misc/logo.png";
import "./Footer.scss";

const Footer: React.FC<any> = () => {
    return(
        <div className="footer">
            <img src={logoPNG} />
            <div className="bar" />
        </div>
    )
}

export default Footer;
