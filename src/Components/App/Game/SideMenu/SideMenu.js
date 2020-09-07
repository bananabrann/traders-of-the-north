import React from "react";
import "./SideMenu.scss";

class SideMenu extends React.Component {
  render() {
    return(
      <div id="sidemenu">
        <i onClick={() => this.props.handleScreenSelectionClick("title")} className="fa-3x fas fa-home"></i>
      </div>
    )
  }
}

export default SideMenu;
