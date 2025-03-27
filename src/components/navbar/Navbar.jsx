import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Hamburger from '../hamburger/Hamburger';
import Logo from '../logo/Logo';
import Phone from '../phone/Phone';

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
    <>
      <nav className="navbar full">
        <div className="navbar-container">
          <Logo />
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
          <ThemeToggle />
        </div>
      </nav>
      <nav className="navbar mobile">
        <div className="navbar-container">
          <div className="left-buttons">
            <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
            <ThemeToggle />
          </div>
          <Logo />
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

          <Phone />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
