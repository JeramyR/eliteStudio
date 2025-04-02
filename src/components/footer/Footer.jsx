import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=1046+Willow+Creek+Rd+Suite+26+Prescott+AZ+86301"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>1046 Willow Creek Rd. Suite 26</p>
            <p>Prescott, AZ 86301</p>
          </a>
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
              <Link to="/" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={scrollToTop}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={scrollToTop}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                onClick={scrollToTop}
                title="View our legal policies and terms of service"
                aria-label="Legal policies and terms of service"
              >
                Legal & Policies
              </Link>
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
