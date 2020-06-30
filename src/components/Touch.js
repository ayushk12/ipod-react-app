import React from "react";
import "./ipod.css";

const Touch = (props) => {
  return (
    <div
      unselectable="off"
      id="menu"
      className="controls"
      onClick={props.scroll}
    >
      {/* menu item  */}
      <button id="menu-button" className="buttons" onClick={props.mainScr}>
        MENU
      </button>

      {/* click inner button  */}
      <div>
        <button className="small-button" onClick={props.optn}></button>
      </div>
    </div>
  );
};

export default Touch;
