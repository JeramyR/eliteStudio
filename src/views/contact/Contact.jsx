function ContactInfo() {
  return (
    <div className="contact-info-page">
      {/* Header Section */}
      <section className="contact-info-header">
        <h1>Contact Information</h1>
        <p>Get in touch with us for appointments and inquiries</p>
      </section>

      {/* Main Content */}
      <div className="contact-info-container">
        {/* Business Details */}
        <section className="business-details">
          <div className="detail-card">
            <h2>Business Hours</h2>
            <div className="hours-list">
              <div className="hours-item">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <h2>Contact Methods</h2>
            <div className="contact-methods">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@beautysalon.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div className="contact-details">
                  <h3>Appointments</h3>
                  <p>Book online or call us</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="location-section">
          <div className="location-card">
            <h2>Our Location</h2>
            <div className="address">
              <i className="fas fa-map-marker-alt"></i>
              <div className="address-details">
                <h3>Address</h3>
                <p>123 Beauty Lane</p>
                <p>City, State 12345</p>
              </div>
            </div>
            <div className="map-container">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.662418891809!2d-112.48683232426158!3d34.562101772969164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d2ed0a021fc3f%3A0x1cb7aeb024a0fddd!2s1046%20Willow%20Creek%20Rd%20%2326%2C%20Prescott%2C%20AZ%2086301!5e0!3m2!1sen!2sus!4v1743134300806!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="additional-info">
          <div className="info-card">
            <h2 className="centered margin-bottom">Additional Information</h2>
            <div className="info-content">
              <div className="info-item">
                <h3>Parking</h3>
                <p>Free parking available in our private lot</p>
              </div>
              <div className="info-item">
                <h3>Accessibility</h3>
                <p>Wheelchair accessible entrance and facilities</p>
              </div>
              <div className="info-item">
                <h3>Payment Methods</h3>
                <p>We accept all major credit cards and cash</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactInfo;
