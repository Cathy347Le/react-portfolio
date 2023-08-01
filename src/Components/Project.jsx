import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div
        className="project-item-container"
        style={{
          backgroundImage: `url(${this.props.project.backgroundImage})`,
        }}
      >
        <div className="project-content">
          <h3>{this.props.project.title}</h3>
          <h4 className="description">{this.props.project.description}</h4>
          <div className="button-container">
            <a
              href={this.props.project.linkURL}
              target="_blank"
              rel="noreferrer"
            >
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
