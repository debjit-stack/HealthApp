import styles from './home.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            AI-Powered • Blockchain Secured • Healthcare OS
          </span>
          <h1>
            The Modern
            <br />
            Healthcare Ecosystem
            <br />
            Runs On Intelligence.
          </h1>
          <p>
            Secure, interoperable, and AI-driven healthcare solutions
            designed to connect providers, hospitals, patients, and
            governments on a single platform.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/company#contact" className={styles.primaryBtn}>Get Started</Link>
            <Link to="/platform" className={styles.secondaryBtn}>Learn More</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/hero-image.jpeg" alt="Healthcare technology platform" />
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div>
          <h2>50+</h2>
          <p>Healthcare Partners</p>
        </div>
        <div>
          <h2>1M+</h2>
          <p>Records Processed</p>
        </div>
        <div>
          <h2>99.99%</h2>
          <p>Data Security</p>
        </div>
        <div>
          <h2>24/7</h2>
          <p>Platform Availability</p>
        </div>
      </section>

      {/* Solutions */}
      <section className={styles.solutions}>
        <h2>Solutions Built For Modern Healthcare</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏥</div>
            <h3>Hospitals</h3>
            <p>Centralized patient records, workflows, reporting and AI-assisted operations.</p>
            <Link to="/products#hospitals" className={styles.cardLink}>Explore →</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🩺</div>
            <h3>Clinics</h3>
            <p>Simplified practice management and seamless patient engagement.</p>
            <Link to="/products#clinics" className={styles.cardLink}>Explore →</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🔬</div>
            <h3>Diagnostics</h3>
            <p>Faster reporting, image management, and interoperability.</p>
            <Link to="/products" className={styles.cardLink}>Explore →</Link>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏛️</div>
            <h3>Government</h3>
            <p>Large-scale digital healthcare infrastructure and analytics.</p>
            <Link to="/products#enterprise" className={styles.cardLink}>Explore →</Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <span className={styles.badge}>Our Approach</span>
          <h2>Transforming Healthcare Through Technology</h2>
          <p>
            We combine Artificial Intelligence, Blockchain Security, and Healthcare
            Interoperability standards to create a connected healthcare ecosystem.
          </p>
          <p>
            Our platform enables providers to improve patient outcomes while
            reducing operational complexity — from single clinics to national health programs.
          </p>
          <Link to="/company#about" className={styles.primaryBtn} style={{ display: 'inline-block', marginTop: '1.5rem' }}>
            Our Story →
          </Link>
        </div>
        <div className={styles.aboutImage}>
          <img src="/about-image.jpeg" alt="Doctor using Plenome platform" />
        </div>
      </section>

      {/* Trusted By */}
      <section className={styles.trust}>
        <p className={styles.trustLabel}>Recognized & Incubated By</p>
        <div className={styles.trustBadges}>
          <div className={styles.trustBadge}>IIT Madras</div>
          <div className={styles.trustBadge}>MeitY Recognized</div>
          <div className={styles.trustBadge}>ABDM Compliant</div>
          <div className={styles.trustBadge}>HL7 FHIR Ready</div>
          <div className={styles.trustBadge}>ISO 27001</div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready To Modernize Healthcare?</h2>
        <p>
          Join organizations building the future of healthcare with
          secure, intelligent, and interoperable technology.
        </p>
        <div className={styles.ctaButtons}>
          <Link to="/company#contact" className={styles.ctaPrimary}>Schedule a Demo</Link>
          <Link to="/platform" className={styles.ctaSecondary}>Explore Platform</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
