import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../themeToggle/ThemeToggle';

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
          <h1>Elite Injection Studio</h1>
          {/* <img className="logo-1" src={logo} alt="Elite Injection Studio" /> */}
        </Link>
        <div className="navbar-spacer">
          <ThemeToggle />
          <a href="tel:555-555-5555" className="navbar-phone">
            📞
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
