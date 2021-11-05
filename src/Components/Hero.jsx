import React, { Component } from "react";
import "./Hero.scss";
import Menu from "./Menu";

class Hero extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="outer-box">
          <span className="outerlightbar bar1"></span>
          <span className="outerlightbar bar2"></span>
          <span className="outerlightbar bar3"></span>
          <span className="outerlightbar bar4"></span>
          <div className="inner-box">
            <div className="hero-content-section">
              <div className="lightbarcontent"></div>
              <div className="coverlayer"></div>
              <h1>Cathy Le</h1>
              <h2>Software Engineer</h2>
            </div>
            <Menu />
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
