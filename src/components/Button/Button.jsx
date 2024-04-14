// Base
// import cn from 'classnames';

// Styles
import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
const Button = ({ text = 'Default text', type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
