// Components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';

//Styles
import styles from './Header.module.css';

const Header = () => {
  const signIn = () => {
    console.log('Sign In');
  };
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.wrapper}>
          <Logo />
          <Navigation />
          <div className={styles.buttons}>
            <Button text="Sign In" onClick={signIn} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
