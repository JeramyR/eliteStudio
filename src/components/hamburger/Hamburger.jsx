function Hamburger({ isOpen, toggleMenu }) {
  return (
    <button
      className={`navbar-toggle ${isOpen ? 'active' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle navigation menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburger;
