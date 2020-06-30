// importing required files
import React from "react";
import "./ipod.css";
import ZingTouch from "zingtouch";
import Touch from "./Touch";
import Display from "./Display";

import Settings_ from "./Image/settings.jpg";
import Music from "./Image/music.jpeg";
import Video from "./Image/video.jpg";
import IpodPic from "./Image/ipod.jpg";

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ["Video", "Music", "Settings", "Message"],
    };
  }

  handleColor = () => {
    let div = document.getElementById("Video");
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div = document.getElementById("Music");
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div = document.getElementById("Message");
    div.style.backgroundColor = "white";
    div.style.color = "black";
    div = document.getElementById("Settings");
    div.style.backgroundColor = "white";
    div.style.color = "black";
  };

  handleScroll = () => {
    let angle = 0;
    const target = document.getElementById("menu");
    const region = new ZingTouch.Region(target);
    region.bind(target, "rotate", (e) => {
      angle = angle + e.detail.distanceFromLast;

      // functionality for Video
      if (Math.abs(angle) > 0 && Math.abs(angle) < 20) {
        this.handleColor();
        let curEle = document.getElementById("Video");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }

      // functionality for Music
      if (Math.abs(angle) > 15 && Math.abs(angle) < 35) {
        this.handleColor();
        let curEle = document.getElementById("Music");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }

      // functionality for message
      if (Math.abs(angle) > 30 && Math.abs(angle) < 50) {
        this.handleColor();
        let curEle = document.getElementById("Message");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }

      // functionality for
      if (Math.abs(angle) >= 45 && Math.abs(angle) < 65) {
        this.handleColor();
        let curEle = document.getElementById("Settings");
        curEle.style.backgroundColor = "blue";
        curEle.style.color = "white";
      }

      if (Math.abs(angle) > 65) {
        angle = 0;
      }
    });
  };

  //handling the main screen element
  mainDisplay = () => {
    let current = document.getElementsByClassName("newDisplay");

    let currentDisplay = "";

    for (currentDisplay of current) {
      if (currentDisplay.style.visibility === "visible") {
        break;
      }
    }

    currentDisplay.style.visibility = "hidden";
    currentDisplay.style.height = "0";
    currentDisplay.style.width = "0";
  };

  //handling switching screen
  switchDisplay = (e) => {
    let home = document.getElementById("display");
    home.style.visibility = "hidden";
    home.style.height = "0";
    home.style.width = "0";
    let display = document.getElementById(e.innerHTML + "-display");

    if (document.getElementById("title") != null) {
      document.getElementById("title").remove();
    }

    let img = document.createElement("img");

    if (e.innerHTML === "Music") {
      img.setAttribute("src", Music);
    } else if (e.innerHTML === "Settings") {
      img.setAttribute("src", Settings_);
    } else {
      img.setAttribute("src", Video);
    }
    img.id = "title";
    img.style.height = "100%";
    img.style.width = "100%";

    display.appendChild(img);
  };

  //handling click
  Click = () => {
    let elements = document.getElementsByClassName("screen-elements");

    let ele;
    for (ele of elements) {
      if (ele.style.backgroundColor === "black") {
        break;
      }
    }
    this.switchDisplay(ele);
  };

  render() {
    return (
      <div className="Ipod">
        <img src={IpodPic} alt="" style={({ height: 600 }, { width: 600 })} />

        <Display dispItems={this.state.display} />

        {/* render the Touch */}
        <Touch
          scroll={this.handleScroll}
          mainScr={this.mainScreen}
          optn={this.Click}
        />
      </div>
    );
  }
}

export default Ipod;
