import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button 
      className={`${styles.themeToggle} ${isDark ? styles.dark : styles.light}`}
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      MODO
    </button>
  );
};

export default ThemeToggle;