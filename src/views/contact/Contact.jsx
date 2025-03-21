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
              <div className="map-placeholder">
                Google Maps will be embedded here
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
