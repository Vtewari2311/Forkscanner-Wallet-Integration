import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Forkscanner</h4>
            <p>Forkscanner allows for the monitoring of multiple bitcoin nodes for a variety of anomalies: nodes lagging behind, inflated blocks, stale blocks and transactions from user-specified addresses.</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Nodes</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://twitter.com/forkscanner"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className="list-inline-item"><a href="https://github.com/forkscanner"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p className="text-center">&copy; 2023 Forkscanner. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
