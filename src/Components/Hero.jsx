import React, { Component } from "react";
import "./Hero.scss";
// import Menu from "./Menu";

class Hero extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="outer-box">
          <div className="inner-box">
            <span className="innerlightbar bar1"></span>
            <span className="innerlightbar bar2"></span>
            <span className="innerlightbar bar3"></span>
            <span className="innerlightbar bar4"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
