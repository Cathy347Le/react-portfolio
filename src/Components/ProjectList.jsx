import React, { Component } from "react";
import Project from "./Project";


class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [
            { id: 1, title: "GMMB", description: "Interactive and creative website using parallax, animations, and hover effects", backgroundImage: "../Images/project-acaai.jpeg", 
            linkURL: "https://www.gmmb.com/"},
            { id: 2, title: "American College of Allergy, Asthma, & Immunology", description: "Interactive and creative website using parallax, animations, and hover effects", imageURL: "", 
            linkURL: "https://www.gmmb.com/"},
            { id: 3, title: "Kuni Foundation", description: "Wordpress website built with accessibility in mind", backgroundImage: "", 
            linkURL: "https://www.kunifoundation.org/"},
            { id: 4, title: "Talent Rewire", description: "One of the first websites I did at Social Driver", backgroundImage: "", 
            linkURL: "https://www.talentrewire.org/"},
            { id: 5, title: "2018 U.S Senate elections", description: "My capstone project at GA to learn about D3 and SVGs. As a former research data analyst at a polling and consulting firm, I wanted to embrace my former career and learn how to built dynamic, interactive data visualizations.", backgroundImage: "", 
            linkURL: "http://project-5-election-site.surge.sh/"},
        ] }
    }
    render() { 
        return (  );
    }
}
 
export default ProjectList;
