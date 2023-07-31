import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './Work.scss';
import Menu from './Menu';
import Project from './Project';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          title: 'GMMB',
          description:
            'Interactive and creative agency website using parallax, animations, and hover effects',
          backgroundImage: '../images/project-gmmb.jpeg',
          linkURL: 'https://www.gmmb.com/',
        },
        {
          id: 2,
          title: 'American College of Allergy, Asthma, & Immunology',
          description:
            'Website built for ACAAI members and for the public. Site includes Find an Allergist tool, linkify text, and in-page navigation.',
          backgroundImage: '../images/project-acaai.jpeg',
          linkURL: 'https://acaai.org/',
        },
        {
          id: 3,
          title: 'Kuni Foundation',
          description: 'Wordpress website built with accessibility in mind',
          backgroundImage: '../images/project-kuni.jpg',
          linkURL: 'https://www.kunifoundation.org/',
        },
        {
          id: 4,
          title: '2018 U.S Senate elections',
          description:
            'My capstone project at General Asssembly to learn about D3 and SVGs. As a former research data analyst at a polling and consulting firm, I wanted to leverage my experience and learn how to built dynamic, interactive data visualizations.',
          backgroundImage: '../images/project-elections.jpg',
          linkURL: 'http://project-5-election-site.surge.sh/',
        },
        {
          id: 5,
          title: 'Petz',
          description:
            'A social media web app for pets. Users can create a profile for their pets, post comments, and "lick" other pet profiles. Built using React, MongoDB, Express, and Node.js. Front-end deployed on Surge and Backend deployed on Heroku. It was built with two other classmates at General Assembly.',
          backgroundImage: '../images/project-petz.jpg',
          linkURL: 'https://github.com/Cathy347Le/project3frontend',
        },
        {
          id: 6,
          title: 'Think Movie',
          description:
            'Allows users to create movie lists to manage movies they love, want to watch, or just to catalogue their entire movie collection. Built with Express, Handlebars, Node.js, and MongoDB. Deployed on Heroku.',
          backgroundImage: '../images/project-movie.jpg',
          linkURL: 'https://thinkmovie.herokuapp.com/',
        },
        {
          id: 7,
          title: 'Lunar New Year Jeopardy',
          description:
            'Self-scoring trivia game utilizing JavaScript, HTML, and CSS',
          backgroundImage: '../images/project-jeopardy.jpg',
          linkURL: 'https://cathy347le.github.io/Lunar-New-Year-Jeopardy/',
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
