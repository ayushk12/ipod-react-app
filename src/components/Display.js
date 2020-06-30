// importing required files
import React from "react";
import "./ipod.css";

const Display = (props) => {
  return (
    <div>
      <div unselectable="off" className="screen" id="display">
        {props.dispItems.map((item, index) => (
          <div className="screen-elements" id={item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div id="Video-screen" className="newScreen"></div>
      <div id="Music-screen" className="newScreen"></div>

      <div id="Settings-screen" className="newScreen"></div>
    </div>
  );
};

//Exporting Screen
export default Display;
