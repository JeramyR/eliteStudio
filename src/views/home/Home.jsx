import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../../components/about/About';
import Parallax from '../../components/parallax/Parallax';
import PremiumService from '../../components/premiumService/PremiumService';
import SmallSection from '../../components/sectionBreak/SectionBreak';
import Testimonials from '../../components/testimonials/Testimonials';
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

      {/* laser girl link */}
      <TitleSection text="Advanced Laser Services for Face & Body" />
      <SmallSection text="LaserGirl® Skincare Services" />
      <Parallax image={lasergirl} />
      <div className="break" />

      {/* About Section */}
      <TitleSection text="Elevating Beauty, Backed by Credentials" />
      <SmallSection text="Welcome to Elite Injection Studio!" />
      <About />
      <div className="break" />

      {/* Featured Services */}
      <TitleSection text="Premium Skin & Wellness" />
      <SmallSection text="Therapies" />
      <PremiumService />
      <div className="break" />

      {/* Testimonials */}
      <TitleSection text="Our Clients Love Their Results" />
      <SmallSection text="Testimonials" />
      <Testimonials />
      <div className="break" />

      {/* Call to action Section */}
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
