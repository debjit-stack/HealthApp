import React from 'react';
import styles from './header.module.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdPhone, MdKeyboardArrowDown, MdArrowForward } from 'react-icons/md';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* --- TOP BAR --- */}
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

      {/* --- MAIN NAVIGATION --- */}
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          {/* Replace with your actual logo image if needed */}
          <div className={styles.logoIcon}>P</div>
          <span className={styles.logoText}>Plenome</span>
        </div>

        <nav className={styles.navLinks}>
          <a href="#home" className={styles.activeLink}>Home</a>
          
          <div className={styles.dropdown}>
            <a href="#platform">Platform <MdKeyboardArrowDown className={styles.caret} /></a>
          </div>
          
          <div className={styles.dropdown}>
            <a href="#products">Products <MdKeyboardArrowDown className={styles.caret} /></a>
          </div>
          
          <div className={styles.dropdown}>
            <a href="#company">Company <MdKeyboardArrowDown className={styles.caret} /></a>
          </div>
        </nav>

        <div className={styles.actionButtons}>
          <button className={styles.outlineBtn}>
            <MdPhone className={styles.btnIcon} /> Sales Enquiry
          </button>
          <button className={styles.outlineBtn}>
            Contact Us <MdArrowForward className={styles.btnIconRight} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;