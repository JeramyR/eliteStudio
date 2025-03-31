import { Link } from 'react-router-dom';

function ServiceCard({ id, title, goal, description, src }) {
  return (
    <div
      className="service-card"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <span className="line top"></span>
      <span className="line right"></span>
      <span className="line bottom"></span>
      <span className="line left"></span>

      <div className="overlay">
        <div className="overlay-content">
          <h3 className="service-card-title">{title}</h3>
          <h4 className="service-card-goal">{goal}</h4>
          <p className="service-card-description">{description}</p>
          <Link className="service-card-link" to={`/${id}`}>
            Learn More ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ServiceCard;
