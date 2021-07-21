import React from "react";
import logoPNG from "../../../res/misc/logo.png";
import "./Footer.scss";

const Footer: React.FC<any> = () => {
  return (
    <div className="footer">
      {/* <i className="fas fa-5x fa-home" /> */}
      <img src={logoPNG} alt="Logo for Traders of the North" />
      <div className="bar" />
    </div>
  );
};

export default Footer;
