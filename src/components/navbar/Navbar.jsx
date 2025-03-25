import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../themeToggle/ThemeToggle';
const phone = '/images/phone.webp';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function isActive(path) {
    return location.pathname === path ? 'active' : '';
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>
            <span className="E">E</span>
            <span className="lite">lite Injection Studio</span>
          </h1>
        </Link>
        <div className="navbar-spacer">
          <ThemeToggle />
          <a href="tel:+1928-514-1352" className="navbar-phone">
            <img className="navbar-phone-icon" src={phone} alt="Phone" />
          </a>
          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <Link
              to="/"
              className={`navbar-link ${isActive('/')}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`navbar-link ${isActive('/services')}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`navbar-link ${isActive('/contact')}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
