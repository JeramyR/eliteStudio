import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>1046 Willow Creek Rd. Suite 26</p>
          <p>Prescott, AZ 86301</p>
          <a href="tel:9285141352">(928) 514-1352</a>
          <a href="mailto:eliteinjectionstudio@gmail.com">
            eliteinjectionstudio@gmail.com
          </a>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday: 10:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 5:00 PM</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/legal">Terms & Privacy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Reid-Roost Development Team. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
