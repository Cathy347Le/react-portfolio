import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.scss';
import Menu from './Menu';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <div className="contact-section" id="contact-section">
      <div className="col-xs-12 col-sm-6 bckgrd-purple title-section">
        <div className="title-wrapper">
          <div className="title-container">
            <h2 className="section-title">Contact</h2>
          </div>
          {isTabletOrDesktop && <Menu />}
        </div>
      </div>
      <div className="col-xs-12 col-sm-6 bckgrd-white content-section">
        <div className="content-container">
          <h3>I love meeting new people.</h3>
          <h3>Just say hello.</h3>
          <p>
            I’m always open to discussing new projects, creative ideas or
            opportunities to be a part of your team. Feel free to email me.
          </p>
          <h3 className="signature">Cathy Le</h3>
          <p className="title">Software Engineer</p>
          <a
            href="mailto:cathy347le@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Cathy347Le@gmail.com
          </a>
          <div className="social-icons-container">
            <div className="btn ln-btn">
              <a
                href="https://www.linkedin.com/in/cathyxle/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="btn gh-btn">
              <a
                href="https://github.com/Cathy347Le"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="btn gm-btn">
              <a
                href="mailto:Cathy347Le@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
