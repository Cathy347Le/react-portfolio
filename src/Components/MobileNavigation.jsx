import React, { Component } from 'react';
import './MobileNavigation.scss';
import resume from '../assets/Cathy-Le-Resume.pdf';

class MobileNavigation extends Component {
  render() {
    return (
      <div className="mobile-menu-container">
        <ul>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#work-section">Work</a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MobileNavigation;
