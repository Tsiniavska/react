// Components
import Wrapper from '../Wrapper/Wrapper';

// Styles
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <Wrapper>
      <div className={styles.text}>Loading...</div>
    </Wrapper>
  );
};

export default Loading;
