import React, { Component } from "react";
import "./About.scss";
import Menu from "./Menu";
import profileImage from "../images/profile_pic.jpeg";

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about-section">
        <div className="col-xs-12 col-sm-6 bckgrd-black title-section">
          <div className="about-details-wrap">
            <div className="title-container">
              <h1>About</h1>
            </div>
            <div className="profile-container">
              <img
                class="profile-image"
                src={profileImage}
                alt="Cathy's head shot"
              />
              <span></span>
              <span></span>
            </div>
          </div>
          <Menu />
        </div>
        <div className="col-xs-12 col-sm-6 bckgrd-white">
          <div className="content-container">
            <h3 className="outline-shadow-effect">
              Hello, my name is Cathy Le.
            </h3>
            <p>
              I am a full stack software engineer, and formerly a political
              research data analyst at{" "}
              <a href="https://www.gqrr.com/" target="_blank" rel="noreferrer">
                Greenberg Quinlan Rosner
              </a>
              , which is a political polling and consulting firm. As a software
              engineer, I enjoying breaking down complex problems and presenting
              simple user-friendly solutions. I believe technology should be
              enjoyable and easy to use!
            </p>
            <p>
              Similar to the tech industry, the polling industry relies on good
              coordination. I take pride in knowing how to work with people of
              different skillsets, personalities, and backgrounds to accomplish
              the task at hand.
            </p>
            <p>
              While I excel at solving problems on my own, I am most fulfilled
              when collaborating with others to find solutions. I believe
              accomplishments and success are better experienced when you get to
              share them with others.
            </p>
            <p>
              In my free time, I enjoy hosting dinner parties, watching the San
              Francisco 49ers and Giants on TV, gardening, and spending time
              with my labradoodle named Gouda. When I’m not coding, I’m probably
              out with Gouda taking her for a walk or with friends at a
              biergarten.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
