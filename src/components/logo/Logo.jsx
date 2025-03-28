import { Link } from 'react-router-dom';
function Logo() {
  return (
    <Link to="/" className="navbar-logo">
      <h1>
        <span className="E">E</span>
        <span className="lite">lite Injection Studio</span>
      </h1>
    </Link>
  );
}
export default Logo;
