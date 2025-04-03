import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="footer" aria-label="Site footer" role="contentinfo">
      <div
        className="footer-content"
        role="navigation"
        aria-label="Footer navigation"
      >
        <div
          className="footer-section"
          aria-label="Contact information"
          role="complementary"
        >
          <h3 id="contact-heading">Contact Us</h3>
          <a
            href="https://www.google.com/maps/search/?api=1&query=1046+Willow+Creek+Rd+Suite+26+Prescott+AZ+86301"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View our location on Google Maps"
            title="Click to view our location on Google Maps"
            aria-describedby="contact-heading"
          >
            <p>1046 Willow Creek Rd. Suite 26</p>
            <p>Prescott, AZ 86301</p>
          </a>
          <a
            href="tel:9285141352"
            aria-label="Call us at (928) 514-1352"
            title="Click to call us at (928) 514-1352"
            aria-describedby="contact-heading"
          >
            (928) 514-1352
          </a>
          <a
            href="mailto:eliteinjectionstudio@gmail.com"
            aria-label="Email us at eliteinjectionstudio@gmail.com"
            title="Click to email us at eliteinjectionstudio@gmail.com"
            aria-describedby="contact-heading"
          >
            eliteinjectionstudio@gmail.com
          </a>
        </div>

        <div
          className="footer-section"
          aria-label="Business hours"
          role="complementary"
        >
          <h3 id="hours-heading">Hours</h3>
          <div aria-labelledby="hours-heading">
            <p>Monday: 10:00 AM - 5:00 PM</p>
            <p>Saturday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div
          className="footer-section"
          aria-label="Navigation links"
          role="navigation"
        >
          <h3 id="quick-links-heading">Quick Links</h3>
          <ul role="list" aria-labelledby="quick-links-heading">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                aria-label="Go to home page"
                title="Return to the home page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={scrollToTop}
                aria-label="View our services"
                title="View our available services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                aria-label="Contact us"
                title="Get in touch with us"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                onClick={scrollToTop}
                aria-label="View our legal policies and terms of service"
                title="View our legal policies and terms of service"
              >
                Legal & Policies
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="footer-section"
          aria-label="Social media and reviews"
          role="complementary"
        >
          <h3 id="social-heading">Follow Us</h3>
          <div className="social-links" aria-labelledby="social-heading">
            <a
              href="https://www.instagram.com/"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
              role="link"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                aria-hidden="true"
              />
              <span title="Leave us a review on Google">
                How was your experience with us? Please let us know today by
                leaving us a review on Google.
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" role="contentinfo">
        <p title="© 2024 Reid-Roost Development Team. All rights reserved.">
          &copy; {new Date().getFullYear()} Reid-Roost Development Team. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
