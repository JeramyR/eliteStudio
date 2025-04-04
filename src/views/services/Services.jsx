import SectionBreak from '../../components/sectionBreak/SectionBreak';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

function Services() {
  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <SectionTitle level="h1" text="Elite Injection Services" />
        <SectionBreak
          level="h2"
          text="Experience the latest in beauty and wellness treatments"
        />
      </section>

      {/* Injectable Treatments */}
      <section className="services-section">
        <div className="section-header">
          <h2>Injectable Treatments</h2>
          <p>Advanced solutions for natural-looking results</p>
        </div>
        <div className="services-grid">
          <div className="services-cards">
            <i className="fas fa-syringe"></i>

            <h3>Neurotoxins</h3>

            <p>
              Professional botulinum toxin treatments to reduce fine lines and
              wrinkles, creating a more youthful appearance.
            </p>

            <ul>
              <li>Forehead lines</li>
              <li>Crow's feet</li>
              <li>Frown lines</li>
              <li>Natural-looking results</li>
            </ul>
          </div>

          <div className="services-cards">
            <i className="fas fa-microscope"></i>
            <h3>Microneedling</h3>
            <p>
              Advanced skin rejuvenation treatment that stimulates collagen
              production and improves skin texture.
            </p>
            <ul>
              <li>Collagen induction</li>
              <li>Scar reduction</li>
              <li>Pore refinement</li>
              <li>Skin texture improvement</li>
            </ul>
          </div>

          <div className="services-cards">
            <i className="fas fa-tint"></i>
            <h3>PRP/PRF Injections</h3>
            <p>
              Natural healing treatments using your body's own growth factors
              for tissue regeneration.
            </p>
            <ul>
              <li>Hair restoration</li>
              <li>Facial rejuvenation</li>
              <li>Natural healing</li>
              <li>Long-lasting results</li>
            </ul>
          </div>

          <div className="services-cards">
            <i className="fas fa-pump-medical"></i>
            <h3>BioFiller</h3>
            <p>
              Natural dermal filler treatment for volume restoration and facial
              contouring.
            </p>
            <ul>
              <li>Volume enhancement</li>
              <li>Natural ingredients</li>
              <li>Long-lasting results</li>
              <li>Minimal downtime</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="break" />
      {/* Wellness Services */}
      <section className="services-section wellness-section">
        <div className="section-header">
          <h2>Wellness Services</h2>
          <p>Comprehensive health and wellness solutions</p>
        </div>
        <div className="services-grid">
          <div className="services-cards">
            <i className="fas fa-droplet"></i>
            <h3>IV and Injection Therapy</h3>
            <p>
              Customized vitamin and nutrient infusions for optimal health and
              wellness.
            </p>
            <ul>
              <li>Vitamin infusions</li>
              <li>Hydration therapy</li>
              <li>Energy boost</li>
              <li>Immune support</li>
            </ul>
          </div>

          <div className="services-cards">
            <i className="fas fa-weight"></i>
            <h3>Weight Loss Services</h3>
            <p>Personalized weight management programs and treatments.</p>
            <ul>
              <li>Customized plans</li>
              <li>Nutrition guidance</li>
              <li>Body contouring</li>
              <li>Lifestyle support</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="break" />
      {/* Facial Services */}
      <section className="services-section">
        <div className="section-header">
          <h2>Facial Services</h2>
          <p>Professional skincare treatments for radiant skin</p>
        </div>
        <div className="services-grid">
          <div className="services-cards">
            <i className="fas fa-spa"></i>
            <h3>Customized Facials</h3>
            <p>
              Tailored facial treatments designed for your unique skin type and
              concerns.
            </p>
            <ul>
              <li>Skin analysis</li>
              <li>Custom treatment</li>
              <li>Deep cleansing</li>
              <li>Hydration boost</li>
            </ul>
          </div>

          <div className="services-cards">
            <i className="fas fa-flask"></i>
            <h3>Chemical Peels</h3>
            <p>
              Professional exfoliation treatments for improved skin texture and
              tone.
            </p>
            <ul>
              <li>Skin renewal</li>
              <li>Pigmentation correction</li>
              <li>Acne treatment</li>
              <li>Customized strength</li>
            </ul>
          </div>

          <div className="services-cards">
            <i className="fas fa-cut"></i>
            <h3>Dermaplaning</h3>
            <p>
              Gentle exfoliation treatment that removes dead skin cells and fine
              facial hair.
            </p>
            <ul>
              <li>Deep exfoliation</li>
              <li>Hair removal</li>
              <li>Product absorption</li>
              <li>Instant results</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="break" />
      {/* Laser Services */}
      <section className="services-section laser-section">
        <div className="section-header">
          <h2>LaserGirl® Skincare Services</h2>
          <p>Advanced laser treatments for face and body</p>
        </div>
        <div className="services-grid">
          <div className="services-cards">
            <i className="fas fa-laser"></i>
            <h3>Advanced Laser Services</h3>
            <p>State-of-the-art laser treatments for various skin concerns.</p>
            <ul>
              <li>Hair removal</li>
              <li>Skin rejuvenation</li>
              <li>Pigmentation treatment</li>
              <li>Vascular therapy</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="break" />
      {/* Consultation Section */}
      <section className="consultation-section">
        <div className="consultation-content">
          <h2>Ready to Transform Your Beauty?</h2>
          <p>
            Book a consultation with our experts to create your personalized
            treatment plan
          </p>
          <button className="button">Book Consultation</button>
        </div>
      </section>
    </div>
  );
}

export default Services;
