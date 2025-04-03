import { Link } from 'react-router-dom';

function ServiceCard({ id, _id, title, goal, description, src }) {
  return (
    <section
      id={_id}
      className="service-card"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <span className="line top"></span>
      <span className="line right"></span>
      <span className="line bottom"></span>
      <span className="line left"></span>
      {/* changed div to h2 */}
      <h2 className="service-card-front-title">{title}</h2>
      <div className="overlay">
        <div className="overlay-content">
          <div className="titles-div">
            <h3 className="service-card-title">{title}</h3>
            <h4 className="service-card-goal">{goal}</h4>
          </div>
          <p className="service-card-description">{description}</p>
          <Link className="service-card-link" to={`/services#${id}`}>
            Learn More ⟶
          </Link>
        </div>
      </div>
    </section>
  );
}
export default ServiceCard;
