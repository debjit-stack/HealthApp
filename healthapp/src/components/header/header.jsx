import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdPhone, MdKeyboardArrowDown, MdArrowForward } from 'react-icons/md';

const platformLinks = [
  { label: 'CareOS', desc: 'The unified healthcare operating system', href: '/platform#careos' },
  { label: 'Plenome Intelligence', desc: 'AI engine powering clinical decisions', href: '/platform#intelligence' },
  { label: 'Plenome+', desc: 'Patient-facing health companion app', href: '/platform#plus' },
  { label: 'Enterprise & eGov', desc: 'Large-scale digital health infrastructure', href: '/platform#enterprise' },
];

const productLinks = [
  { label: 'CareOS for Clinics', desc: 'Simplified practice management', href: '/products#clinics' },
  { label: 'CareOS for Hospitals', desc: 'End-to-end hospital operations', href: '/products#hospitals' },
  { label: 'Ashwin AI', desc: 'Clinical decision support system', href: '/products#ashwin' },
  { label: 'Aayush', desc: 'Preventive health & wellness platform', href: '/products#aayush' },
  { label: 'Enterprise Solutions', desc: 'Public sector healthcare at scale', href: '/products#enterprise' },
];

const companyLinks = [
  { label: 'About Us', desc: 'Our story, mission & team', href: '/company#about' },
  { label: 'Careers', desc: 'Join us in transforming healthcare', href: '/company#careers' },
  { label: 'Contact Us', desc: 'Get in touch with our team', href: '/company#contact' },
];

const Dropdown = ({ label, items, isActive }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={styles.dropdown}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`${styles.navBtn} ${isActive ? styles.activeLink : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <MdKeyboardArrowDown className={`${styles.caret} ${open ? styles.caretOpen : ''}`} />
      </button>

      {open && (
        <div className={styles.megaMenu}>
          <div className={styles.megaMenuInner}>
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={styles.megaItem}
                onClick={() => setOpen(false)}
              >
                <span className={styles.megaLabel}>{item.label}</span>
                <span className={styles.megaDesc}>{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className={styles.headerContainer}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.contactInfo}>
          <a href="mailto:info@plenome.com" className={styles.topLink}>
            <FaEnvelope className={styles.icon} /> info@plenome.com
          </a>
          <span className={styles.divider}>|</span>
          <span className={styles.topLink}>
            <FaMapMarkerAlt className={styles.icon} /> IITM Research Park
          </span>
        </div>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <span className={styles.divider}>|</span>
          <a href="#" aria-label="X (Twitter)"><FaXTwitter /></a>
          <span className={styles.divider}>|</span>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <span className={styles.divider}>|</span>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className={styles.mainNav}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>P</div>
          <span className={styles.logoText}>Plenome</span>
        </Link>

        <nav className={styles.navLinks}>
          <Link to="/" className={`${styles.navLink} ${path === '/' ? styles.activeLink : ''}`}>
            Home
          </Link>
          <Dropdown label="Platform" items={platformLinks} isActive={path === '/platform'} />
          <Dropdown label="Products" items={productLinks} isActive={path === '/products'} />
          <Dropdown label="Company" items={companyLinks} isActive={path === '/company'} />
        </nav>

        <div className={styles.actionButtons}>
          <Link to="/company#contact" className={styles.outlineBtn}>
            <MdPhone className={styles.btnIcon} /> Sales Enquiry
          </Link>
          <Link to="/company#contact" className={styles.outlineBtn}>
            Contact Us <MdArrowForward className={styles.btnIconRight} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
