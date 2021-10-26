import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <div className="col-xs-12 col-sm-6 bckgrd-purple section-title">
          <h1>Contact</h1>
        </div>
        <div className="col-xs-12 col-sm-6 bckgrd-white">
          <h3>I love meeting new people</h3>
          <h3>just say hello.</h3>
          <p>
            I’m always open to discussing new projects, creative ideas or
            opportunities to be a part of your team. Feel free to email me.
          </p>
          <h4>Cathy Le</h4>
          <p>Software Engineer</p>
          <a href="mailto:cathy347le@gmail.com" target="_blank">
            Cathy347Le@gmail.com
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
