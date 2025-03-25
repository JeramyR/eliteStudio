import { useEffect, useState } from 'react';
import Section from '../../components/sectionBreak/SectionBreak';

const images = [
  '/images/bg-1.webp',
  '/images/bg-2.webp',
  '/images/bg-3.webp',
  '/images/bg-4.webp',
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setAllImagesLoaded(true);
        }
      };
    });
  }, []);
  useEffect(() => {
    if (!allImagesLoaded) return;

    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 100); // fade timing delay before advancing index
    }, 6000);

    return () => clearInterval(interval);
  }, [allImagesLoaded, currentImageIndex]);

  return (
    <div className="home-page">
      {/* Hero Section */}
      {allImagesLoaded && (
        <>
          {/* Previous image fades out */}
          {previousImageIndex !== null && (
            <div
              className={`hero-bg ${isFading ? 'fade-out' : ''}`}
              style={{ backgroundImage: `url(${images[previousImageIndex]})` }}
            />
          )}

          {/* Current image fades in */}
          <div
            className={`hero-bg ${isFading ? 'fade-in' : 'visible'}`}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
        </>
      )}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Beauty</h1>
          <p>
            Experience luxury beauty treatments and expert aesthetic services
          </p>
          <button className="cta-button">Book Appointment</button>
        </div>
      </section>
      <Section text="Prescott's Premier Med Spa" />

      {/* Featured Services */}
      <section className="featured-services">
        <h2>Our Premium Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💉</div>
            <h3>Botox Treatments</h3>
            <p>Professional anti-aging solutions for natural-looking results</p>
          </div>
          <div className="service-card">
            <div className="service-icon">✂️</div>
            <h3>Hair Styling</h3>
            <p>Expert cuts, coloring, and styling for your perfect look</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💆</div>
            <h3>Facial Treatments</h3>
            <p>Luxurious facials and skin rejuvenation therapies</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💅</div>
            <h3>Nail Care</h3>
            <p>
              Professional manicures and pedicures for beautiful hands and feet
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Why Choose Us</h2>
            <p>
              With over 15 years of experience, our team of certified
              professionals provides the highest quality beauty and aesthetic
              services. We combine cutting-edge techniques with personalized
              care to help you achieve your desired look.
            </p>
            <ul className="features-list">
              <li>✓ Licensed Medical Professionals</li>
              <li>✓ Premium Products</li>
              <li>✓ Personalized Treatment Plans</li>
              <li>✓ Relaxing Environment</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-placeholder">Salon Interior</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>
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
              "Amazing hair styling and coloring. They always exceed my
              expectations!"
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Beauty?</h2>
          <p>
            Book your appointment today and experience the luxury you deserve
          </p>
          <button className="cta-button">Schedule Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
