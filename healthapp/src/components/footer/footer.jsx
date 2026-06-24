import styles from "./Footer.module.css";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
              <img
                src="/logo.png"
                alt="Plenome"
                className={styles.logo}
              />
              <h2>Plenome</h2>
            </div>

            <p>
              Plenome is an IIT Madras incubated and MeitY-recognized startup
              working on blockchain technology for medical data security and
              interoperability.
            </p>

            <div className={styles.socials}>
              <FaLinkedin />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>

          <div className={styles.contact}>
            <h3>Get In Touch</h3>

            <p>
              No: 1, 5th Floor, 'C' Block, Phase-II,
              <br />
              Health Technology Innovation Centre,
              <br />
              IIT Madras Research Park,
              <br />
              Kanagam, Tharamani,
              <br />
              Chennai, Tamil Nadu 600113.
            </p>

            <p>info@plenome.com</p>
            <p>sales@plenome.com</p>
            <p>+91 967 700 5145</p>
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
                <li key={item}>➜ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Products</h3>
            <ul>
              {productLinks.map((item) => (
                <li key={item}>➜ {item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              {companyLinks.map((item) => (
                <li key={item}>➜ {item}</li>
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