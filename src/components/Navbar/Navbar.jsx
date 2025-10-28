import styles from './Navbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = ({ isDark, onThemeToggle }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <h1 className={styles.logo}>
          <span className={styles.logoIcon}>📰</span>
          InfoHub
        </h1>
        <div className={styles.navLinks}>
          <a href="#" className={styles.link}>Inicio</a>
          <a href="#" className={styles.link}>Noticias</a>
          <a href="#" className={styles.link}>Contacto</a>
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;