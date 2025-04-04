function Testimonials() {
  return (
    <section
      id="medspa-reviews"
      className="testimonials"
      aria-label="Client testimonials and medspa reviews"
    >
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>
            "The best botox experience I've ever had. Natural results and
            professional service!"
          </p>
          <div className="testimonial-author">
            <span className="author-name">Sarah M.</span>
            <span className="author-title">Regular Client</span>
          </div>
        </div>
        <div className="testimonial-card">
          <p>
            "I've finally found something that works. I feel healthier, more
            confident, and supported every step of the way!"
          </p>
          <div className="testimonial-author">
            <span className="author-name">Jennifer R.</span>
            <span className="author-title">Long-term Client</span>
          </div>
        </div>
        <div className="testimonial-card">
          <p>
            "The facial treatments are incredible. My skin has never looked
            better!"
          </p>
          <div className="testimonial-author">
            <span className="author-name">Emily T.</span>
            <span className="author-title">New Client</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
