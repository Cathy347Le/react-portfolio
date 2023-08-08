import React, { Component } from 'react';
import './Menu.scss';
import resume from '../assets/Cathy-Le-Resume.pdf';
import { IdResponsiveRenderOnlyIn, Responsive } from 'responsive-react';

class Menu extends Component {
  render() {
    return (
      <Responsive
        displayIn={[
          IdResponsiveRenderOnlyIn.Laptop,
          IdResponsiveRenderOnlyIn.Tablet,
        ]}
      >
        <div className="menu-container">
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

export default Menu;
