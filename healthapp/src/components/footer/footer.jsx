import React from "react";
import styles from "./footer.module.css";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md"; 

const Footer = () => {
  const platformLinks = [
    "CareOS",
    "Plenome Intelligence",
    "Plenome+",
    "Enterprise & eGov",
  ];

  const productLinks = [
    "CareOS for Clinics",
    "CareOS for Hospitals",
    "Ashwin AI",
    "Aayush",
    "Enterprise and Public-Sector Healthcare Solutions",
  ];

  const companyLinks = ["About Us", "Careers", "Contact Us"];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          <div className={styles.about}>
            <div className={styles.logoWrapper}>
              {/* Fallback to text logo if image is missing, matching the header style */}
              <div className={styles.logoIcon}>P</div>
              <h2>Plenome</h2>
            </div>

            <p>
              Plenome is an IIT Madras incubated and MeitY-recognized startup
              working on blockchain technology for medical data security and
              interoperability.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="X"><FaXTwitter /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className={styles.contact}>
            <h3>Get In Touch</h3>
            <p>
              No: 1, 5th Floor, 'C' Block, Phase-II,<br />
              Health Technology Innovation Centre,<br />
              IIT Madras Research Park,<br />
              Kanagam, Tharamani,<br />
              Chennai, Tamil Nadu 600113.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:info@plenome.com">info@plenome.com</a>
              <a href="mailto:sales@plenome.com">sales@plenome.com</a>
              <p>+91 967 700 5145</p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              title="Location"
              className={styles.map}
              src="https://www.google.com/maps?q=IIT+Madras+Research+Park&output=embed"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Links */}
        <div className={styles.bottom}>
          <div>
            <h3>Platform</h3>
            <ul>
              {platformLinks.map((item) => (
                <li key={item}>
                  <MdKeyboardArrowRight className={styles.arrow} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Products</h3>
            <ul>
              {productLinks.map((item) => (
                <li key={item}>
                  <MdKeyboardArrowRight className={styles.arrow} /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              {companyLinks.map((item) => (
                <li key={item}>
                  <MdKeyboardArrowRight className={styles.arrow} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>
      </div>

    
    </footer>
  );
};

export default Footer;