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
          linkURL: "https://acaai.org/",
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
          description: "One of the first websites I built at Social Driver",
          backgroundImage: "../images/project-rewire.jpeg",
          linkURL: "https://www.talentrewire.org/",
        },
        {
          id: 5,
          title: "2018 U.S Senate elections",
          description:
            "My capstone project at General Asssembly to learn about D3 and SVGs. As a former research data analyst at a polling and consulting firm, I wanted to leverage my experience and learn how to built dynamic, interactive data visualizations.",
          backgroundImage: "../images/project-elections.jpg",
          linkURL: "http://project-5-election-site.surge.sh/",
        },
        {
          id: 6,
          title: "Petz",
          description:
            'A social media web app for pets. Users can create a profile for their pets, post comments, and "lick" other pet profiles. Built using React, MongoDB, Express, and Node.js. Front-end deployed on Surge and Backend deployed on Heroku. It was built with two other classmates at General Assembly.',
          backgroundImage: "../images/project-petz.jpg",
          linkURL: "https://github.com/Cathy347Le/project3frontend",
        },
        {
          id: 7,
          title: "Think Movie",
          description:
            "Allows users to create movie lists to manage movies they love, want to watch, or just to catalogue their entire movie collection. Built with Express, Handlebars, Node.js, and MongoDB. Deployed on Heroku.",
          backgroundImage: "../images/project-movie.jpg",
          linkURL: "https://thinkmovie.herokuapp.com/",
        },
        // {
        //   id: 8,
        //   title: "Wags to Wings",
        //   description:
        //     "Online store for pet supplies. The e-commerce website was built using Python, Django, and Bootstrap during a two-day, in-class Django Hackathon, where we had to develop a web app based on a UX design mockup. It was built with three other classmates.",
        //   backgroundImage: "../images/project-wags.jpg",
        //   linkURL: "https://github.com/Cathy347Le/MangoDjango",
        // },
        {
          id: 8,
          title: "Lunar New Year Jeopardy",
          description:
            "Self-scoring trivia game utilizing JavaScript, HTML, and CSS",
          backgroundImage: "../images/project-jeopardy.jpg",
          linkURL: "https://cathy347le.github.io/Lunar-New-Year-Jeopardy/",
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
                  <h2 className="section-title">Work</h2>
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
