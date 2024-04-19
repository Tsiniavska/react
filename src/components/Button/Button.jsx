/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// Base
import cn from 'classnames';

// Styles
import styles from './Button.module.css';

const Button = ({
  text = 'Default text',
  type = 'button',
  design = 'default',
  href = '',
  disabled = false,
  onClick,
}) => {
  const stylesList = [styles.button];

  switch (design) {
    case 'white': {
      stylesList.push(styles.white);
      break;
    }
    case 'big': {
      stylesList.push(styles.big);
      break;
    }
    case 'bigWhite': {
      stylesList.push(styles.bigWhite);
      break;
    }
    case 'retry': {
      stylesList.push(styles.retry);
      break;
    }
    default: {
      console.log('=)');
    }
  }

  if (href)
    return (
      <Link text={text} href={href} onClick={onClick} styleList={stylesList} />
    );

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(stylesList)}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
};

const Link = ({ text, href, onClick, styleList }) => {
  return (
    <a target="_blank" href={href} onClick={onClick} className={cn(styleList)}>
      <span>{text}</span>
    </a>
  );
};

export default Button;
