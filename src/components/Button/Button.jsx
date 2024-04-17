/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// Base
import cn from 'classnames';

// Styles
import styles from './Button.module.css';

const Button = ({
  text = 'Default text',
  type = 'button',
  whiteMode,
  bigMode,
  bigWhiteMode,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn([
        styles.button,
        whiteMode && styles.white,
        bigMode && styles.big,
        bigWhiteMode && styles.bigWhite,
      ])}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
