import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";
import "./Work.scss";
import Menu from "./Menu";
import Project from "./Project";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          title: "GMMB",
          description:
            "Interactive and creative website using parallax, animations, and hover effects",
          backgroundImage: "../images/project-gmmb.jpeg",
          linkURL: "https://www.gmmb.com/",
        },
        {
          id: 2,
          title: "American College of Allergy, Asthma, & Immunology",
          description:
            "Interactive and creative website using parallax, animations, and hover effects",
          backgroundImage: "../images/project-acaai.jpeg",
          linkURL: "https://www.gmmb.com/",
        },
        {
          id: 3,
          title: "Kuni Foundation",
          description: "Wordpress website built with accessibility in mind",
          backgroundImage: "../images/project-kuni.jpg",
          linkURL: "https://www.kunifoundation.org/",
        },
        {
          id: 4,
          title: "Talent Rewire",
          description: "One of the first websites I did at Social Driver",
          backgroundImage: "../images/project-rewire.jpeg",
          linkURL: "https://www.talentrewire.org/",
        },
        {
          id: 5,
          title: "2018 U.S Senate elections",
          description:
            "My capstone project at GA to learn about D3 and SVGs. As a former research data analyst at a polling and consulting firm, I wanted to embrace my former career and learn how to built dynamic, interactive data visualizations.",
          backgroundImage: "../images/project-elections.jpg",
          linkURL: "http://project-5-election-site.surge.sh/",
        },
      ],
    };
  }
  render() {
    return (
      <StickyContainer>
        <div className="work-section clearfix" id="work-section">
          <Sticky disableCompensation>
            {({ style }) => (
              <div style={style} className="bckgrd-white title-section">
                <div className="title-container">
                  <h1>Work</h1>
                </div>
                <Menu />
              </div>
            )}
          </Sticky>
          <div className="projects-section">
            {this.state.projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </StickyContainer>
    );
  }
}

export default Work;
