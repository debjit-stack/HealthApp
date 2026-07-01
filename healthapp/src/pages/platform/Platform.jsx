import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './platform.module.css';

const features = [
  { icon: '🔗', label: 'ABDM Compliant' },
  { icon: '🔒', label: 'Blockchain Secured' },
  { icon: '⚡', label: 'Real-Time Sync' },
  { icon: '🌐', label: 'HL7 FHIR Ready' },
  { icon: '🤖', label: 'AI-Powered' },
  { icon: '📱', label: 'Mobile First' },
];

const careosModules = [
  { title: 'Patient Registry', desc: 'Unified longitudinal health records with blockchain-backed audit trails and consent management.' },
  { title: 'Clinical Workflows', desc: 'Configurable care pathways, order sets, and clinical decision support built for Indian healthcare contexts.' },
  { title: 'Revenue Cycle', desc: 'End-to-end billing, insurance claims, and financial reporting with TPA integration.' },
  { title: 'Analytics Dashboard', desc: 'Real-time operational intelligence, KPIs, and custom report builder for administrators.' },
  { title: 'Interoperability Hub', desc: 'Seamless data exchange across labs, pharmacies, imaging centers, and partner institutions.' },
  { title: 'Telemedicine', desc: 'Integrated video consultations, remote monitoring, and asynchronous messaging for care continuity.' },
];

const intelligenceCapabilities = [
  {
    title: 'Diagnostic Assistance',
    desc: 'AI models trained on Indian patient data provide differential diagnoses, flagging critical findings and reducing diagnostic errors by up to 34%.',
    stat: '34%',
    statLabel: 'Fewer diagnostic errors',
  },
  {
    title: 'Predictive Risk Scoring',
    desc: 'Continuous patient risk stratification identifies high-risk individuals before deterioration, enabling proactive intervention.',
    stat: '2.4x',
    statLabel: 'Earlier interventions',
  },
  {
    title: 'Clinical NLP',
    desc: 'Extract structured data from unstructured clinical notes, discharge summaries, and prescriptions in multiple Indian languages.',
    stat: '12+',
    statLabel: 'Languages supported',
  },
  {
    title: 'Drug Interaction Engine',
    desc: 'Real-time polypharmacy checks and contraindication alerts integrated into the prescribing workflow.',
    stat: '99.8%',
    statLabel: 'Detection accuracy',
  },
];

const plusFeatures = [
  { icon: '📋', title: 'Health Locker', desc: 'Patients own and control their complete health history — accessible anywhere, shared with any provider.' },
  { icon: '💊', title: 'Medication Reminders', desc: 'Smart reminders with adherence tracking and refill alerts to keep patients on track.' },
  { icon: '📊', title: 'Vitals Tracking', desc: 'Connect wearables and IoT devices to build a continuous longitudinal health picture.' },
  { icon: '🩺', title: 'Virtual Consultations', desc: 'Book, attend, and review video consultations — all within a single trusted application.' },
  { icon: '🔔', title: 'Health Alerts', desc: 'Personalized health nudges, screening reminders, and preventive care recommendations.' },
  { icon: '👨‍👩‍👧', title: 'Family Profiles', desc: 'Manage health records for the entire family from one account with role-based access.' },
];

const egovSolutions = [
  {
    title: 'State Health Missions',
    desc: 'End-to-end program management for government health schemes — from beneficiary enrollment to outcome tracking.',
    tag: 'Government',
  },
  {
    title: 'National Health Registry',
    desc: 'Scalable citizen health ID infrastructure with deduplication, consent framework, and ABDM integration.',
    tag: 'Infrastructure',
  },
  {
    title: 'Disease Surveillance',
    desc: 'Real-time epidemiological monitoring with outbreak detection, contact tracing, and public health dashboards.',
    tag: 'Surveillance',
  },
  {
    title: 'Supply Chain Management',
    desc: 'Track pharmaceuticals, vaccines, and medical equipment across district and sub-district health facilities.',
    tag: 'Logistics',
  },
];

const Platform = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>The Plenome Platform</span>
          <h1>One Platform.<br />Every Care Setting.</h1>
          <p>
            Built from the ground up for India's healthcare complexity — CareOS unifies
            providers, patients, and policymakers on a single blockchain-secured, AI-powered layer.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/company#contact" className={styles.btnPrimary}>Request a Demo</Link>
            <Link to="/products" className={styles.btnOutline}>View Products</Link>
          </div>
        </div>
        <div className={styles.featurePills}>
          {features.map((f) => (
            <div key={f.label} className={styles.pill}>
              <span>{f.icon}</span> {f.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── CAREOS ── */}
      <section id="careos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Foundation Layer</span>
          <h2>CareOS</h2>
          <p>
            The operating system powering every clinical and administrative workflow.
            CareOS is modular, configurable, and built to scale from a 5-bed clinic to
            a 2,000-bed tertiary hospital without changing the underlying platform.
          </p>
        </div>
        <div className={styles.moduleGrid}>
          {careosModules.map((m) => (
            <div key={m.title} className={styles.moduleCard}>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.architectureBar}>
          <div className={styles.archItem}>
            <span className={styles.archDot} style={{ background: '#eab308' }} />
            <span>FHIR R4 APIs</span>
          </div>
          <div className={styles.archDivider} />
          <div className={styles.archItem}>
            <span className={styles.archDot} style={{ background: '#577c83' }} />
            <span>Blockchain Audit Layer</span>
          </div>
          <div className={styles.archDivider} />
          <div className={styles.archItem}>
            <span className={styles.archDot} style={{ background: '#a855f7' }} />
            <span>Zero-Knowledge Consent</span>
          </div>
          <div className={styles.archDivider} />
          <div className={styles.archItem}>
            <span className={styles.archDot} style={{ background: '#22c55e' }} />
            <span>99.99% Uptime SLA</span>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE ── */}
      <section id="intelligence" className={styles.sectionDark}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagLight}>AI Engine</span>
          <h2 className={styles.headingLight}>Plenome Intelligence</h2>
          <p className={styles.subLight}>
            A dedicated AI layer trained on anonymized Indian clinical data,
            embedded directly into the care workflow — not bolted on after.
          </p>
        </div>
        <div className={styles.intelGrid}>
          {intelligenceCapabilities.map((c) => (
            <div key={c.title} className={styles.intelCard}>
              <div className={styles.intelStat}>
                <span className={styles.statNum}>{c.stat}</span>
                <span className={styles.statLabel}>{c.statLabel}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLENOME+ ── */}
      <section id="plus" className={styles.section}>
        <div className={styles.plusLayout}>
          <div className={styles.plusLeft}>
            <span className={styles.tag}>Patient Layer</span>
            <h2>Plenome+</h2>
            <p>
              Healthcare doesn't end at discharge. Plenome+ keeps patients
              connected to their care team, their records, and their health
              goals — in the language and format they prefer.
            </p>
            <div className={styles.plusStats}>
              <div className={styles.plusStat}>
                <span className={styles.plusStatNum}>4.8★</span>
                <span className={styles.plusStatLabel}>App Store Rating</span>
              </div>
              <div className={styles.plusStat}>
                <span className={styles.plusStatNum}>500K+</span>
                <span className={styles.plusStatLabel}>Active Patients</span>
              </div>
              <div className={styles.plusStat}>
                <span className={styles.plusStatNum}>8</span>
                <span className={styles.plusStatLabel}>Indian Languages</span>
              </div>
            </div>
            <Link to="/company#contact" className={styles.btnPrimary}>Get Early Access</Link>
          </div>
          <div className={styles.plusRight}>
            {plusFeatures.map((f) => (
              <div key={f.title} className={styles.plusFeature}>
                <span className={styles.plusIcon}>{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTERPRISE & EGOV ── */}
      <section id="enterprise" className={styles.sectionGold}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagDark}>Public Sector</span>
          <h2>Enterprise & eGov</h2>
          <p>
            Governments and large health systems need infrastructure that is
            sovereign, auditable, and built for population-scale. Plenome's
            eGov suite has been deployed across state health missions and
            national digital health initiatives.
          </p>
        </div>
        <div className={styles.egovGrid}>
          {egovSolutions.map((s) => (
            <div key={s.title} className={styles.egovCard}>
              <span className={styles.egovTag}>{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.egovCta}>
          <Link to="/company#contact" className={styles.btnDark}>Talk to Our Government Team</Link>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className={styles.bottomCta}>
        <h2>See the Full Platform in Action</h2>
        <p>A 30-minute walkthrough tailored to your care setting.</p>
        <Link to="/company#contact" className={styles.btnPrimary}>Book a Demo</Link>
      </section>

    </main>
  );
};

export default Platform;
