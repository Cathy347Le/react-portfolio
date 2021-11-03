import React, { Component } from "react";
import "./Hero.scss";
import Menu from "./Menu";

class Hero extends Component {
  render() {
    return (
      <div className="hero-section">
        <div className="hero-animation-container">
          <div className="box box1"></div>
          <div className="box box2 hidden-box"></div>
          <div className="box box3"></div>
          <div className="box box4"></div>
          <div className="box box5 main-box">
            <h1>Hello5</h1>
          </div>
          <div className="box box6"></div>
          <div className="box box7 hidden-box"></div>
          <div className="box box8 hidden-box">
            <Menu />
          </div>
          <div className="box box9 hidden-box"></div>
        </div>
      </div>
    );
  }
}

export default Hero;
