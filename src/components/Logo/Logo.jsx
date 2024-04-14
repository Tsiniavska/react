// Styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <img src="/logo.png" alt="logo" />
    </a>
  );
};

export default Logo;