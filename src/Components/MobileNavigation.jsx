import React, { Component } from 'react';
import './MobileNavigation.scss';
import resume from '../assets/Cathy-Le-Resume.pdf';
import { IdResponsiveRenderOnlyIn, Responsive } from 'responsive-react';

class MobileNavigation extends Component {
  render() {
    return (
      <Responsive displayIn={IdResponsiveRenderOnlyIn.Mobile}>
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
      </Responsive>
    );
  }
}

export default MobileNavigation;
