// Base
import { Link } from 'react-router-dom';

// Styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src="/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
