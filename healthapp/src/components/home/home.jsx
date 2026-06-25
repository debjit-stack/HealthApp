import styles from "./Home.module.css";

const Home = () => {
  return (
    <main className={styles.home}>
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
            <button className={styles.primaryBtn}>
              Get Started
            </button>

            <button className={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
            alt="Healthcare"
          />
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
            <h3>Hospitals</h3>
            <p>
              Centralized patient records, workflows,
              reporting and AI-assisted operations.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Clinics</h3>
            <p>
              Simplified practice management and
              seamless patient engagement.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Diagnostics</h3>
            <p>
              Faster reporting, image management,
              and interoperability.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Government</h3>
            <p>
              Large-scale digital healthcare
              infrastructure and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>Transforming Healthcare Through Technology</h2>

          <p>
            We combine Artificial Intelligence,
            Blockchain Security, and Healthcare
            Interoperability standards to create a
            connected healthcare ecosystem.
          </p>

          <p>
            Our platform enables providers to
            improve patient outcomes while
            reducing operational complexity.
          </p>
        </div>

        <div className={styles.aboutImage}>
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c"
            alt="Doctor"
          />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready To Modernize Healthcare?</h2>

        <p>
          Join organizations building the future
          of healthcare with secure and intelligent technology.
        </p>

        <button className={styles.primaryBtn}>
          Schedule Demo
        </button>
      </section>
    </main>
  );
};

export default Home;