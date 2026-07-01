import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './company.module.css';

const timeline = [
  { year: '2019', title: 'Founded at IIT Madras', desc: 'Plenome was incorporated as a research spin-off within the IIT Madras ecosystem, focused on blockchain-based health data interoperability.' },
  { year: '2020', title: 'First Product: CareOS v1', desc: 'Deployed CareOS in three pilot clinics in Chennai, processing the first 10,000 electronic health records on our platform.' },
  { year: '2021', title: 'MeitY Recognition', desc: 'Recognized by the Ministry of Electronics and Information Technology under the startup scheme, unlocking enterprise government partnerships.' },
  { year: '2022', title: 'ABDM Integration', desc: 'Became one of the first HMS providers to complete ABDM integration, enabling ABHA-linked health records for all platform users.' },
  { year: '2023', title: 'Ashwin AI Launch', desc: 'Launched Ashwin AI clinical decision support, trained on 10M+ anonymized Indian patient records in partnership with academic hospitals.' },
  { year: '2024', title: 'Scale & Expansion', desc: 'Crossed 50 healthcare partners, 1M records processed, and expanded to enterprise government health programs across two states.' },
];

const team = [
  { name: 'Dr. Arjun Krishnamurthy', role: 'Co-Founder & CEO', bg: '#577c83', initials: 'AK', bio: 'MBBS, MD (AIIMS Delhi). Former clinical informaticist at Apollo Hospitals. Alumnus of IIT Madras Healthcare Technology program.' },
  { name: 'Priya Raghunathan', role: 'Co-Founder & CTO', bg: '#3d5f65', initials: 'PR', bio: 'MS Computer Science, Stanford. Ex-Google Health and ex-Practo. Led data architecture for 50M+ patient records at scale.' },
  { name: 'Sanjay Iyer', role: 'Chief Product Officer', bg: '#0f172a', initials: 'SI', bio: '15 years in healthcare IT product management across India and Southeast Asia. Former Head of Product at Fortis Hospitals.' },
  { name: 'Dr. Meera Subramaniam', role: 'Chief Medical Officer', bg: '#4a7c59', initials: 'MS', bio: 'MD, FACS. Practicing surgeon and healthcare quality expert. NABH lead assessor with experience across 80+ hospital accreditations.' },
];

const openRoles = [
  { title: 'Senior Backend Engineer — Go/Node.js', dept: 'Engineering', location: 'Chennai / Remote', type: 'Full-time' },
  { title: 'Product Manager — Clinical Workflows', dept: 'Product', location: 'Chennai', type: 'Full-time' },
  { title: 'Machine Learning Engineer — Clinical NLP', dept: 'AI Research', location: 'Chennai / Remote', type: 'Full-time' },
  { title: 'Implementation Consultant', dept: 'Customer Success', location: 'Pan-India (Travel Required)', type: 'Full-time' },
  { title: 'UI/UX Designer — Healthcare Products', dept: 'Design', location: 'Chennai / Remote', type: 'Full-time' },
  { title: 'Business Development Manager — Government Health', dept: 'Sales', location: 'Delhi / Mumbai', type: 'Full-time' },
];

const values = [
  { icon: '🏥', title: 'Patient First', desc: 'Every product decision is evaluated against one question: does this improve the patient experience or outcome?' },
  { icon: '🔒', title: 'Security by Default', desc: 'Privacy and security are non-negotiable constraints, not features we add after the fact.' },
  { icon: '🌍', title: 'India Scale', desc: 'We build for Bharat — offline-first, multilingual, and affordable across all healthcare tiers.' },
  { icon: '🤝', title: 'Openness', desc: 'We champion open standards (FHIR, ABDM) and open-source where possible. Healthcare data belongs to patients.' },
];

const Company = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: '', email: '', org: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Our Company</span>
        <h1>Healthcare Technology<br />Built in India, for India.</h1>
        <p>
          An IIT Madras incubated, MeitY-recognized startup on a mission to make
          secure, intelligent, and interoperable healthcare accessible to every
          Indian — regardless of where they live or where they seek care.
        </p>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.section}>
        <div className={styles.aboutLayout}>
          <div className={styles.aboutLeft}>
            <span className={styles.tag}>About Us</span>
            <h2>Why We Started Plenome</h2>
            <p>
              India has over 1.4 billion people and a healthcare system that runs on
              paper, siloed software, and fragmented data. A patient moving between a
              clinic, a diagnostic center, and a hospital carries their records in a
              plastic bag — if they carry them at all.
            </p>
            <p>
              We founded Plenome because we believe technology can fix this. Not by
              replicating Western EHR systems, but by building from the ground up for
              India's unique challenges: low bandwidth, multiple languages, extreme
              cost sensitivity, and the largest Ayushman Bharat beneficiary population
              in the world.
            </p>
            <p>
              Our blockchain-backed interoperability layer and AI clinical tools are
              designed to give every patient a longitudinal health record and every
              clinician the decision support they deserve.
            </p>
            <div className={styles.recognitions}>
              <div className={styles.recBadge}>🎓 IIT Madras Incubated</div>
              <div className={styles.recBadge}>🏛️ MeitY Recognized</div>
              <div className={styles.recBadge}>🔗 ABDM Compliant</div>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <div className={styles.missionCard}>
              <h3>Our Mission</h3>
              <p>"To make secure, intelligent, and interoperable healthcare accessible to every Indian."</p>
            </div>
            <div className={styles.statGrid}>
              <div className={styles.statItem}><span className={styles.statNum}>2019</span><span className={styles.statLabel}>Founded</span></div>
              <div className={styles.statItem}><span className={styles.statNum}>50+</span><span className={styles.statLabel}>Partners</span></div>
              <div className={styles.statItem}><span className={styles.statNum}>1M+</span><span className={styles.statLabel}>Records</span></div>
              <div className={styles.statItem}><span className={styles.statNum}>40+</span><span className={styles.statLabel}>Team Members</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeader}>
          <h2>What We Believe In</h2>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Our Journey</span>
          <h2>How We Got Here</h2>
        </div>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div key={item.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className={styles.timelineDot} />
            </div>
          ))}
          <div className={styles.timelineLine} />
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.teamSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Leadership</span>
          <h2>The Team</h2>
          <p>Clinicians, engineers, and product builders who have spent careers at the intersection of healthcare and technology.</p>
        </div>
        <div className={styles.teamGrid}>
          {team.map((m) => (
            <div key={m.name} className={styles.teamCard}>
              <div className={styles.avatar} style={{ background: m.bg }}>
                {m.initials}
              </div>
              <h3>{m.name}</h3>
              <span className={styles.role}>{m.role}</span>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section id="careers" className={styles.careersSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagLight}>Join Us</span>
          <h2 className={styles.lightHeading}>Build Healthcare Infrastructure</h2>
          <p className={styles.lightSub}>
            We're a small, ambitious team solving one of India's most important problems.
            If you want your work to matter, come build with us.
          </p>
        </div>
        <div className={styles.rolesGrid}>
          {openRoles.map((r) => (
            <div key={r.title} className={styles.roleCard}>
              <div className={styles.roleTop}>
                <span className={styles.roleDept}>{r.dept}</span>
                <span className={styles.roleType}>{r.type}</span>
              </div>
              <h3>{r.title}</h3>
              <div className={styles.roleLocation}>📍 {r.location}</div>
              <Link to="#contact" className={styles.applyBtn}>Apply Now →</Link>
            </div>
          ))}
        </div>
        <p className={styles.openApp}>
          Don't see your role?{' '}
          <Link to="#contact" className={styles.openLink}>Send us an open application.</Link>
        </p>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactLayout}>
          <div className={styles.contactInfo}>
            <span className={styles.tag}>Get In Touch</span>
            <h2>Let's Talk</h2>
            <p>
              Whether you're a clinic looking to digitize, a hospital evaluating an HMS,
              or a government body exploring health infrastructure — we'd love to hear from you.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <strong>General</strong>
                  <a href="mailto:info@plenome.com">info@plenome.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>💼</span>
                <div>
                  <strong>Sales</strong>
                  <a href="mailto:sales@plenome.com">sales@plenome.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919677005145">+91 96770 05145</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <strong>Office</strong>
                  <span>No: 1, 5th Floor, 'C' Block, Phase-II,<br />Health Technology Innovation Centre,<br />IIT Madras Research Park, Chennai 600113.</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✅</span>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. Our team will get back to you within one business day.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name *</label>
                    <input type="text" name="name" required placeholder="Dr. Ramesh Kumar" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Work Email *</label>
                    <input type="email" name="email" required placeholder="you@hospital.com" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Organization</label>
                  <input type="text" name="org" placeholder="Apollo Hospitals / State Health Dept." value={formData.org} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label>Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange}>
                    <option value="">Select a topic…</option>
                    <option>Product Demo Request</option>
                    <option>Sales Enquiry</option>
                    <option>Government / Enterprise Partnership</option>
                    <option>Careers / Open Application</option>
                    <option>Media / Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Message *</label>
                  <textarea name="message" required rows={5} placeholder="Tell us about your organization and what you're looking for…" value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit" className={styles.submitBtn}>Send Message →</button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            title="Plenome Office Location"
            className={styles.map}
            src="https://www.google.com/maps?q=IIT+Madras+Research+Park&output=embed"
            loading="lazy"
          />
        </div>
      </section>

    </main>
  );
};

export default Company;
