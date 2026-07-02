import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './products.module.css';

const clinicFeatures = [
  'OPD Queue & Appointment Management',
  'e-Prescription with Drug Database',
  'Patient Communication (SMS/WhatsApp)',
  'Basic Lab & Radiology Integration',
  'GST-compliant Billing & Invoicing',
  'ABHA ID Linking',
  'Multi-location Practice Support',
  'Mobile App for Doctors',
];

const hospitalFeatures = [
  'Complete IPD & OPD Management',
  'Theatre & ICU Scheduling',
  'Nursing Station Workflows',
  'Blood Bank & Pharmacy Management',
  'NABH-ready Documentation',
  'Insurance & TPA Processing',
  'Real-time Bed Management Dashboard',
  'Multi-department Analytics',
];

const ashwinCapabilities = [
  {
    icon: '🧠',
    title: 'Differential Diagnosis Engine',
    desc: 'Trained on 10M+ anonymized Indian patient records, Ashwin surfaces ranked differential diagnoses at the point of care with confidence scores and clinical evidence.',
  },
  {
    icon: '⚠️',
    title: 'Early Warning Scores',
    desc: 'Continuously calculates NEWS2, SOFA, and custom sepsis scores — alerting nurses and physicians before clinical deterioration is visible.',
  },
  {
    icon: '💊',
    title: 'Smart Prescribing',
    desc: 'Context-aware dosage suggestions, allergy cross-checks, and generic alternatives built directly into the prescribing workflow.',
  },
  {
    icon: '📷',
    title: 'Radiology AI Assist',
    desc: 'Preliminary reads for chest X-rays, ECGs, and retinal scans — reducing radiologist turnaround time by up to 60%.',
  },
  {
    icon: '📝',
    title: 'Clinical NLP',
    desc: 'Converts unstructured discharge summaries and clinical notes into structured FHIR resources automatically.',
  },
  {
    icon: '📈',
    title: 'Population Risk Stratification',
    desc: 'Identifies high-risk cohorts across the patient population for proactive outreach and preventive care programs.',
  },
];

const aayushModules = [
  {
    title: 'Preventive Care Pathways',
    desc: 'Personalised annual wellness plans with screening checklists, vaccination schedules, and lifestyle guidance.',
    color: '#e0f2f7',
    accent: '#577c83',
  },
  {
    title: 'Chronic Disease Management',
    desc: 'Structured programs for diabetes, hypertension, and COPD with remote monitoring and automated care escalation.',
    color: '#fef3c7',
    accent: '#92400e',
  },
  {
    title: 'Mental Wellness',
    desc: 'Validated PHQ-9 and GAD-7 assessments, therapist matching, and confidential teletherapy sessions.',
    color: '#f3e8ff',
    accent: '#7c3aed',
  },
  {
    title: 'Nutrition & Fitness',
    desc: 'Dietitian-curated meal plans, calorie tracking, and integration with popular fitness wearables.',
    color: '#dcfce7',
    accent: '#15803d',
  },
];

const enterpriseTiers = [
  {
    name: 'District Health',
    desc: 'For district hospitals and CHCs managing 50K–500K population catchments.',
    features: ['Centralized patient registry', 'Program dashboards', 'Supply chain tracking', 'Community health worker app', 'Offline-first field tools'],
  },
  {
    name: 'State Health Mission',
    desc: 'For state health departments running population-scale programs.',
    features: ['Multi-district rollout', 'Beneficiary management', 'Scheme eligibility engine', 'Outcome tracking & MIS', 'ABDM & PMJAY integration'],
    highlight: true,
  },
  {
    name: 'National Program',
    desc: 'Custom infrastructure for central government health initiatives.',
    features: ['Sovereign cloud deployment', 'National health registry', 'Real-time surveillance', 'Custom compliance frameworks', 'Dedicated SRE team'],
  },
];

const comparisonData = [
  { feature: 'ABHA Integration', clinic: true, hospital: true, ashwin: true, aayush: false },
  { feature: 'AI Clinical Support', clinic: false, hospital: true, ashwin: true, aayush: false },
  { feature: 'Patient Mobile App', clinic: true, hospital: true, ashwin: false, aayush: true },
  { feature: 'Telemedicine', clinic: true, hospital: true, ashwin: false, aayush: true },
  { feature: 'NABH Ready', clinic: false, hospital: true, ashwin: true, aayush: false },
  { feature: 'Wearable Sync', clinic: false, hospital: false, ashwin: false, aayush: true },
  { feature: 'Drug Interaction Check', clinic: true, hospital: true, ashwin: true, aayush: false },
  { feature: 'Billing & Insurance', clinic: true, hospital: true, ashwin: false, aayush: false },
];

const Check = () => <span className={styles.check}>✓</span>;
const Cross = () => <span className={styles.cross}>–</span>;

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Plenome Products</span>
        <h1>Purpose-Built for Every<br />Role in Healthcare</h1>
        <p>
          From a solo general practitioner to a 500-bed hospital and a national health
          mission — Plenome products are designed to fit the workflow, not the other way around.
        </p>
        <div className={styles.productNav}>
          <button onClick={() => scrollTo('clinics')} className={styles.productNavItem}>CareOS Clinics</button>
          <button onClick={() => scrollTo('hospitals')} className={styles.productNavItem}>CareOS Hospitals</button>
          <button onClick={() => scrollTo('ashwin')} className={styles.productNavItem}>Ashwin AI</button>
          <button onClick={() => scrollTo('aayush')} className={styles.productNavItem}>Aayush</button>
          <button onClick={() => scrollTo('enterprise')} className={styles.productNavItem}>Enterprise</button>
        </div>
      </section>

      {/* ── CAREOS CLINICS ── */}
      <section id="clinics" className={styles.productSection}>
        <div className={styles.productLayout}>
          <div className={styles.productInfo}>
            <span className={styles.tag} style={{ background: '#e0f2f7', color: '#577c83' }}>For Clinics</span>
            <h2>CareOS for Clinics</h2>
            <p>
              Built for independent practitioners, polyclinics, and specialty clinics.
              Start in minutes, scale to multiple branches, and give every patient a
              connected digital health record from the first visit.
            </p>
            <ul className={styles.featureList}>
              {clinicFeatures.map((f) => (
                <li key={f}><span className={styles.checkMark}>✓</span>{f}</li>
              ))}
            </ul>
            <div className={styles.productCtas}>
              <Link to="/company#contact" className={styles.btnPrimary}>Start Free Trial</Link>
              <Link to="/company#contact" className={styles.btnGhost}>Talk to Sales</Link>
            </div>
          </div>
          <div className={styles.productVisual} style={{ background: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)' }}>
            <div className={styles.mockCard}>
              <div className={styles.mockHeader}>
                <div className={styles.mockDot} style={{ background: '#ef4444' }} />
                <div className={styles.mockDot} style={{ background: '#f59e0b' }} />
                <div className={styles.mockDot} style={{ background: '#22c55e' }} />
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#6b7280' }}>CareOS Clinic</span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockRow}><span className={styles.mockLabel}>Today's OPD</span><span className={styles.mockVal}>24 patients</span></div>
                <div className={styles.mockRow}><span className={styles.mockLabel}>Waiting</span><span className={styles.mockVal} style={{ color: '#f59e0b' }}>7</span></div>
                <div className={styles.mockRow}><span className={styles.mockLabel}>Completed</span><span className={styles.mockVal} style={{ color: '#22c55e' }}>17</span></div>
                <div className={styles.mockDivider} />
                <div className={styles.mockRow}><span className={styles.mockLabel}>Revenue Today</span><span className={styles.mockVal}>₹38,400</span></div>
                <div className={styles.mockRow}><span className={styles.mockLabel}>Pending Bills</span><span className={styles.mockVal} style={{ color: '#ef4444' }}>3</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREOS HOSPITALS ── */}
      <section id="hospitals" className={styles.productSectionAlt}>
        <div className={`${styles.productLayout} ${styles.reverse}`}>
          <div className={styles.productVisual} style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a4a)' }}>
            <div className={styles.mockCard} style={{ background: '#1e293b', borderColor: 'rgba(255,255,255,0.1)' }}>
              <div className={styles.mockHeader} style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className={styles.mockDot} style={{ background: '#ef4444' }} />
                <div className={styles.mockDot} style={{ background: '#f59e0b' }} />
                <div className={styles.mockDot} style={{ background: '#22c55e' }} />
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#6b7280' }}>CareOS Hospital</span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockRow}><span className={styles.mockLabel} style={{ color: '#9ca3af' }}>Total Beds</span><span className={styles.mockVal} style={{ color: '#fff' }}>480</span></div>
                <div className={styles.mockRow}><span className={styles.mockLabel} style={{ color: '#9ca3af' }}>Occupied</span><span className={styles.mockVal} style={{ color: '#eab308' }}>412</span></div>
                <div className={styles.mockRow}><span className={styles.mockLabel} style={{ color: '#9ca3af' }}>ICU Available</span><span className={styles.mockVal} style={{ color: '#22c55e' }}>6</span></div>
                <div className={styles.mockDivider} style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
                <div className={styles.mockRow}><span className={styles.mockLabel} style={{ color: '#9ca3af' }}>OT Scheduled</span><span className={styles.mockVal} style={{ color: '#fff' }}>8 today</span></div>
                <div className={styles.mockRow}><span className={styles.mockLabel} style={{ color: '#9ca3af' }}>Alerts</span><span className={styles.mockVal} style={{ color: '#ef4444' }}>2 critical</span></div>
              </div>
            </div>
          </div>
          <div className={styles.productInfo}>
            <span className={styles.tag} style={{ background: '#e0e7ff', color: '#3730a3' }}>For Hospitals</span>
            <h2>CareOS for Hospitals</h2>
            <p>
              An enterprise-grade HMS that replaces fragmented departmental software
              with a single, unified system — from emergency triage to discharge
              summary and insurance submission.
            </p>
            <ul className={styles.featureList}>
              {hospitalFeatures.map((f) => (
                <li key={f}><span className={styles.checkMark}>✓</span>{f}</li>
              ))}
            </ul>
            <div className={styles.productCtas}>
              <Link to="/company#contact" className={styles.btnPrimary}>Request Implementation Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASHWIN AI ── */}
      <section id="ashwin" className={styles.ashwinSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagDark}>AI Clinical Decision Support</span>
          <h2 className={styles.lightHeading}>Ashwin AI</h2>
          <p className={styles.lightSub}>
            Named after the Sanskrit word for the celestial physicians, Ashwin AI
            acts as an always-on clinical co-pilot — surfacing insights, flagging
            risks, and drafting documentation so clinicians can focus on the patient.
          </p>
        </div>
        <div className={styles.ashwinGrid}>
          {ashwinCapabilities.map((c) => (
            <div key={c.title} className={styles.ashwinCard}>
              <span className={styles.ashwinIcon}>{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.ashwinCta}>
          <Link to="/company#contact" className={styles.btnYellow}>Integrate Ashwin AI</Link>
        </div>
      </section>

      {/* ── AAYUSH ── */}
      <section id="aayush" className={styles.productSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag} style={{ background: '#dcfce7', color: '#15803d' }}>Preventive Health Platform</span>
          <h2>Aayush</h2>
          <p>
            Aayush — meaning "long life" in Sanskrit — is Plenome's preventive and
            wellness platform, shifting focus from sick care to well care.
            Designed for corporates, insurers, and health-conscious individuals.
          </p>
        </div>
        <div className={styles.aayushGrid}>
          {aayushModules.map((m) => (
            <div key={m.title} className={styles.aayushCard} style={{ background: m.color }}>
              <h3 style={{ color: m.accent }}>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/company#contact" className={styles.btnPrimary}>Get Aayush for Your Organization</Link>
        </div>
      </section>

      {/* ── ENTERPRISE ── */}
      <section id="enterprise" className={styles.enterpriseSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagGold}>Public Sector & Enterprise</span>
          <h2>Enterprise Solutions</h2>
          <p>
            Plenome's enterprise offering is not a rebundled SaaS product.
            It is purpose-designed infrastructure for governments, large health
            systems, and insurers who need sovereign, auditable, and scalable technology.
          </p>
        </div>
        <div className={styles.tierGrid}>
          {enterpriseTiers.map((t) => (
            <div key={t.name} className={`${styles.tierCard} ${t.highlight ? styles.tierHighlight : ''}`}>
              {t.highlight && <span className={styles.popularBadge}>Most Popular</span>}
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
              <ul className={styles.tierList}>
                {t.features.map((f) => (
                  <li key={f}><span>✓</span>{f}</li>
                ))}
              </ul>
              <Link to="/company#contact" className={t.highlight ? styles.btnYellow : styles.btnGhost}>
                Contact Sales
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className={styles.comparisonSection}>
        <div className={styles.sectionHeader}>
          <h2>Feature Comparison</h2>
          <p>Choose the right product for your care setting.</p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>CareOS Clinics</th>
                <th>CareOS Hospitals</th>
                <th>Ashwin AI</th>
                <th>Aayush</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.clinic ? <Check /> : <Cross />}</td>
                  <td>{row.hospital ? <Check /> : <Cross />}</td>
                  <td>{row.ashwin ? <Check /> : <Cross />}</td>
                  <td>{row.aayush ? <Check /> : <Cross />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.bottomCta}>
        <h2>Not Sure Which Product Fits?</h2>
        <p>Our solutions team will map the right Plenome stack to your workflows — no obligation.</p>
        <Link to="/company#contact" className={styles.btnYellow}>Talk to a Solutions Architect</Link>
      </section>

    </div>
  );
};

export default Products;
