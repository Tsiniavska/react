// * Base
import { useState } from 'react';

// * Components
import Button from '../../components/Button/Button';
import Wrapper from '../../components/Wrapper/Wrapper';

// * Styles
import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className={styles.banner}>
      <Wrapper className={[styles.wrapper]}>
        <div className={styles.block}>
          <h1>The Design Thinking superpowers: {count}</h1>
          <p className={styles.text}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button text="Get started" design="big" onClick={add} />
          <Button
            text="Instagram"
            design="bigWhite"
            href="https://www.instagram.com/"
          />
          <Link to="/list">
            <Button text="Our partners" design="bigWhite" />
          </Link>
        </div>
        <div className={styles.image}>
          <img src="/banner.svg" alt="banner" />
        </div>
      </Wrapper>
    </main>
  );
};

export default Banner;
