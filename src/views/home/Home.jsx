import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Parallax from '../../components/parallax/Parallax';
import PremiumService from '../../components/premiumService/PremiumService';
import SmallSection from '../../components/sectionBreak/SectionBreak';
import TitleSection from '../../components/sectionTitle/SectionTitle';

const lasergirl = '/images/bg-woman-1.webp';
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
          <Link to="/contact" className="button">
            Book Appointment
          </Link>
        </div>
      </section>

      <SmallSection text="Prescott's Premier Med Spa" />
      <div className="break" />
      <TitleSection text="Advanced Laser Services for Face & Body" />
      <SmallSection text="LaserGirl® Skincare Services" />
      <Parallax image={lasergirl} />
      <div className="break" />
      <TitleSection text="Elevating Beauty, Backed by Credentials" />
      <SmallSection text="Welcome to Elite Injection Studio!" />

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Enhance Your Natural Beauty</h2>
            <p>
              I’m Sabra, a licensed aesthetics nurse and I’m here to help you
              enhance your natural beauty with expert cosmetic injections as
              well as other medical aesthetic procedures. Whether you’re looking
              to smooth fine lines, add volume, or rejuvenate your skin, I offer
              personalized treatments that will leave you looking refreshed and
              youthful. I’m committed to providing safe, effective, and tailored
              care in a comfortable, relaxing environment. Your unique needs are
              my priority, and I can’t wait to help you feel your best.
            </p>
            <ul className="features-list">
              <li>✓ Licensed Medical Professional</li>
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
      {/* Featured Services */}
      <div className="break" />
      <TitleSection text="Premium Skin & Wellness" />
      <SmallSection text="Therapies" />
      <PremiumService />
      <div className="break" />
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
          <Link to="/contact" className="button">
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
