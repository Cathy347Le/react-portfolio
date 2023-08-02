import React, { Component } from 'react';

class Project extends Component {
  render() {
    const { backgroundImage, description, linkURL, title } = this.props.project;
    return (
      <div
        className="project-item-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="project-content">
          <h3>{title}</h3>
          <h4 className="description">{description}</h4>
          <div className="button-container">
            <a href={linkURL} target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              View
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
