import React, { Component } from 'react';
import './About.scss';
import Menu from './Menu';
import profileImage from '../assets/profile_pic.jpeg';

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about-section">
        <div
          className="col-xs-12 col-sm-6 bckgrd-black title-section"
          id="title-section"
        >
          <div className="title-wrapper">
            <div className="title-container">
              <h2 className="neon-sign">
                A<span>b</span>ou<span>t</span>
              </h2>
            </div>
            <div className="profile-container">
              <img
                className="profile-image"
                src={profileImage}
                alt="Cathy's head shot"
              />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* <Menu /> */}
        </div>
        <div
          className="col-xs-12 col-sm-6 bckgrd-white content-section"
          id="test-section"
        >
          <div className="content-container">
            <h3 className="purple-text">Hello, my name is Cathy Le.</h3>
            <p>
              I am a full stack software engineer and a former political
              research data analyst. I now specialize in developing
              enterprise-level cloud native applications and microservices. I am
              a lifelong learner that is most fulfilled when collaborating with
              others to find simple, user-friendly solutions to complex
              problems. Technology should be enjoyable and easy to use!
            </p>
            <p>
              Similar to the tech industry, the political polling industry
              relies on good coordination. I take pride in knowing how to work
              with people of different skill sets, personalities, and
              backgrounds to accomplish the task at hand. While I excel at
              solving problems on my own, I believe accomplishments and success
              are better experienced when you get to share them with others.
            </p>
            <p>
              When I&rsquo;m not coding, I'm likely dabbling in woodworking,
              playing fetch with my dog Gouda, or out with friends at a
              biergarten.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
