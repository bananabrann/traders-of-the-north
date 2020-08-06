import React from "react";
import "./SideMenu.scss";

class SideMenu extends React.Component {
  render() {
    return(
      <div id="sidemenu">
        {/* TODO - Waiting on the image from Aditya. */}

        <i onClick={() => this.props.handleScreenSelectionClick("title")} class="fa-2x fas fa-home"></i>
      </div>
    )
  }
}

export default SideMenu;
