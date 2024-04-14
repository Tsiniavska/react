// Styles
import cn from 'classnames';
import styles from './Navigation.module.css';

// Data
import LIST from './Navigation.data';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, text, href }) => (
          <li key={id}>
            <a href={href} className={cn([styles.navigation, styles.link])}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
