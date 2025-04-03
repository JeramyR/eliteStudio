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
    <main className="home-page">
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
      <header
        className="hero-section"
        aria-label="Hero section introducing Elite Injection Studio and services"
      >
        <div className="hero-content">
          <h1>Transform Your Beauty</h1>
          <h2>
            Experience luxury beauty treatments and services with Elite
            Injection Studio
          </h2>
          <Link to="/contact" className="button">
            Book Appointment
          </Link>
        </div>
      </header>
      <SmallSection
        text="Botox, Microneedling & More in Prescott, AZ"
        level="h2"
      />
      <div className="break" />

      {/* laser girl link */}
      <TitleSection text="Advanced Laser Services for Face & Body" level="h2" />
      <SmallSection text="LaserGirl® Skincare Services" level="h3" />
      <Parallax image={lasergirl} />
      <div className="break" />

      {/* About Section */}
      <TitleSection
        text="Elevating Beauty with a Certified Aesthetic Nurse"
        level="h2"
      />
      <SmallSection text="Welcome to Elite Injection Studio!" level="h3" />
      <About />
      <div className="break" />

      {/* Featured Services */}
      <TitleSection text="Premium Skin & Wellness in Prescott" level="h2" />
      <SmallSection text="Skin Therapies" level="h3" />
      <PremiumService />
      <div className="break" />

      {/* Testimonials */}
      <TitleSection
        text="What Our Clients Say About Elite Injection Studio"
        level="h2"
      />
      <SmallSection text="Testimonials" level="h3" />
      <Testimonials />
      <div className="break" />

      {/* Call to action Section */}
      <section
        id="book-now"
        className="cta-section"
        aria-label="Call to action encouraging users to schedule an appointment"
      >
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
    </main>
  );
}

export default Home;
