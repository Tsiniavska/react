// Styles
import styles from './Navigation.module.css';

// Data
import LIST from './Navigation.data';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, text }) => (
          <Item key={`navigation-item ${id}`} text={text} />
        ))}
      </ul>
    </nav>
  );
};
// eslint-disable-next-line react/prop-types
const Item = ({ text }) => {
  return (
    <li>
      <Link to={text} className={styles.link}>
        {text}
      </Link>
    </li>
  );
};

export default Navigation;
