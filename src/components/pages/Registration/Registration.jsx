// Components
import RegistrationForm from '../../RegistrationForm/RegistrationForm';

// Styles
import styles from './Registration.module.css';

const Registration = () => {
  return (
    <>
      <h1 className={styles.title}>Registration</h1>
      <RegistrationForm />;
    </>
  );
};

export default Registration;
