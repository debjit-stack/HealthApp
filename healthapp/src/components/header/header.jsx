import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles['bodyHeader']}>
      <div className={styles['headerLogo']}>
        <a href="/">HealthApp</a>
      </div>

      <nav className={styles['headerNav']}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;