import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function toggleFooter() {
    setIsExpanded(!isExpanded);
  }

  // Animation variants
  const footerVariants = {
    collapsed: {
      y: 0,
      paddingBottom: '1rem',
    },
    expanded: {
      y: -20,
      paddingBottom: '3rem',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const teamCreditsVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const headingVariants = {
    collapsed: {
      opacity: 0,
      y: 10,
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  const teamMemberVariants = {
    collapsed: {
      opacity: 0,
      y: 20,
    },
    expanded: index => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3 + index * 0.1,
      },
    }),
  };

  const nameVariants = {
    collapsed: {
      opacity: 0,
      x: -10,
    },
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const roleVariants = {
    collapsed: {
      opacity: 0,
      x: 10,
    },
    expanded: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const footerBottomVariants = {
    collapsed: {
      marginTop: '3rem',
    },
    expanded: {
      marginTop: '5rem',
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.footer
      className="footer"
      aria-label="Site footer"
      role="contentinfo"
      onClick={toggleFooter}
      initial="collapsed"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={footerVariants}
    >
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
            <p title="We are open Monday from 10:00 AM to 5:00 PM">
              Monday: 10:00 AM - 5:00 PM
            </p>
            <p title="We are open Saturday from 10:00 AM to 5:00 PM">
              Saturday: 10:00 AM - 5:00 PM
            </p>
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
                aria-label="View our terms of service and privacy policy"
                title="View our terms of service and privacy policy"
              >
                Terms & Privacy
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
            <div className="social-icons-container">
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
              </a>
              {/* Additional social media icons can be added here in the future */}
            </div>
          </div>
        </div>
      </div>

      <div className="google-reviews-container">
        <h2 id="google-reviews" className="google-reviews-heading">
          Google Reviews for Elite Injection Studio
        </h2>
        <p className="google-reviews-text">
          How was your experience with us? Please let us know today by leaving
          us a review on{' '}
          <a
            href="https://www.google.com/maps/place/Elite+Injection+Studio/@34.5404998,-112.4683998,17z/data=!3m1!4b1!4m6!3m5!1s0x872da4b5c5c5c5c5:0x5c5c5c5c5c5c5c5c!8m2!3d34.5404998!4d-112.4683998!5m1!1e1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leave us a review on Google"
            title="Click to leave us a review on Google"
          >
            Google
          </a>
          .
        </p>
      </div>

      {/* Team Credits Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="team-credits"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={teamCreditsVariants}
          >
            <div className="team-credits-content">
              <motion.h4 variants={headingVariants}>Development Team</motion.h4>
              <motion.div
                className="team-member"
                custom={0}
                variants={teamMemberVariants}
              >
                <motion.div
                  className="team-member-name"
                  variants={nameVariants}
                >
                  Sarah Johnson
                </motion.div>
                <motion.div
                  className="team-member-role"
                  variants={roleVariants}
                >
                  Supreme Leader
                </motion.div>
              </motion.div>
              <motion.div
                className="team-member"
                custom={1}
                variants={teamMemberVariants}
              >
                <motion.div
                  className="team-member-name"
                  variants={nameVariants}
                >
                  Michael Chen
                </motion.div>
                <motion.div
                  className="team-member-role"
                  variants={roleVariants}
                >
                  Code Wizard
                </motion.div>
              </motion.div>
              <motion.div
                className="team-member"
                custom={2}
                variants={teamMemberVariants}
              >
                <motion.div
                  className="team-member-name"
                  variants={nameVariants}
                >
                  Emily Rodriguez
                </motion.div>
                <motion.div
                  className="team-member-role"
                  variants={roleVariants}
                >
                  Design Enchantress
                </motion.div>
              </motion.div>
              <motion.div
                className="team-member"
                custom={3}
                variants={teamMemberVariants}
              >
                <motion.div
                  className="team-member-name"
                  variants={nameVariants}
                >
                  David Wilson
                </motion.div>
                <motion.div
                  className="team-member-role"
                  variants={roleVariants}
                >
                  Backend Ninja
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="footer-bottom"
        role="contentinfo"
        variants={footerBottomVariants}
      >
        <p title="© 2024 Reid-Roost Development Team. All rights reserved.">
          &copy; {new Date().getFullYear()} Reid-Roost Development Team. All
          rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
