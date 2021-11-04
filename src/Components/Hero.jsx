import React, { Component } from "react";
import "./Hero.scss";
// import Menu from "./Menu";

class Hero extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="outer-box">
          <div className="inner-box">
            <span className="lightbar bar1"></span>
            <span className="lightbar bar2"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
