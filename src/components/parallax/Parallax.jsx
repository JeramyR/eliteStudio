import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Parallax({ image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['600%', '-600%']);
  const buttonY = useTransform(scrollYProgress, [0, 1], ['800%', '-900%']);

  return (
    <section
      id="laser-treatments"
      className="parallax-container"
      ref={ref}
      aria-label="Laser treatments and advanced skincare section"
    >
      {/* text */}
      <motion.div className="parallax-content" style={{ y: textY }}>
        <h1 className="parallax-header">own your youth</h1>
        <h2 className="parallax-header-2">treat yourself</h2>
        <p className="parallax-text b-600">
          Now we can reverse the aged sun damaged skin with the use of cosmetic
          lasers, radio frequency and chemical peels. C02 fractional skin
          resurfacing can turn back your clock by giving you back your youthful
          complexion.
        </p>
        <p className="parallax-text-2 b-600">
          LaserGirl operates in sterile conditions and practices strict
          sanitation.
        </p>
      </motion.div>
      <motion.div className="parallax-link" style={{ y: buttonY }}>
        <div className="laser">
          <a
            className="laser-link"
            href="https://lasergirlskin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="laser-span"></span>
            <span className="laser-span"></span>
            <span className="laser-span"></span>
            <span className="laser-span"></span>
            <span className="laser-top">LASERGIRL</span>
          </a>
        </div>
      </motion.div>
      <div
        className="parallax-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="color-gradient"></div>
      </div>
    </section>
  );
}
