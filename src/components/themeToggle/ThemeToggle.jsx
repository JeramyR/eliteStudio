import { useTheme } from '../../context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-switcher-grid ${isDarkMode ? 'night-theme' : ''}`}
      onClick={toggleTheme}
      aria-label="Switch theme"
    >
      <div className="sun" aria-hidden="true"></div>
      <div className="moon-overlay" aria-hidden="true"></div>
      <div
        className="cloud-ball cloud-ball-left"
        id="ball1"
        aria-hidden="true"
      ></div>
      <div
        className="cloud-ball cloud-ball-middle"
        id="ball2"
        aria-hidden="true"
      ></div>
      <div
        className="cloud-ball cloud-ball-right"
        id="ball3"
        aria-hidden="true"
      ></div>
      <div
        className="cloud-ball cloud-ball-top"
        id="ball4"
        aria-hidden="true"
      ></div>
      {/* <div className="star" id="star1" aria-hidden="true"></div>
      <div className="star" id="star2" aria-hidden="true"></div>
      <div className="star" id="star3" aria-hidden="true"></div>
      <div className="star" id="star4" aria-hidden="true"></div> */}
    </button>
  );
}

export default ThemeToggle;
