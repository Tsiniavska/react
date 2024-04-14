// Base
import { useState } from 'react';

// Components
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

// Styles
import styles from './Banner.module.css';

const Banner = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className={styles.banner}>
      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h1>The Design Thinking superpowers: {count}</h1>
            <p className={styles.text}>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <Button text="Get started" bigMode={true} onClick={add} />
          </div>
          <div className={styles.image}>
            <img src="/banner.svg" alt="banner" />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default Banner;
