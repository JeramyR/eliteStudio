import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>1046 Willow Creek Rd. Suite 26</p>
          <p>Prescott, AZ 86301</p>
          <p>Phone: (928) 514-1352</p>
          <p>Email: eliteinjectionstudio@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: 10:00 AM - 4:00 PM</p>
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
              <Link to="/gallery">Gallery</Link>
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
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Reid-Roost Development. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
