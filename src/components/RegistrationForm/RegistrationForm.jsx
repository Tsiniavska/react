// * Base
import { Formik } from 'formik';

// * Components
import Field from '../Field/Field';
import Button from '../Button/Button';
import CONFIG from './RegistrationForm.data';

// * Styles
import styles from './RegistrationForm.module.css';

// * Local constans
const INITIAL_VALUES = { email: '', username: '', password: '', phone: '' };

const RegistrationForm = () => {
  const validators = ({ email, username, password, phone }) => {
    const errors = {};

    if (!email) {
      errors.email = "Емейл є обов'язковий";
    } else if (!CONFIG.emailRegExp.test(email)) {
      errors.email = 'Емейл не валідний';
    }

    if (!username) {
      errors.username = "Ім'я є обов'язковим";
    } else if (username.length < CONFIG.usernameMinLength) {
      errors.username = `Ім'я повинно бути не менше ${CONFIG.usernameMinLength} символів`;
    }

    if (!password) {
      errors.password = "Пароль є обов'язковим";
    } else if (password.length < CONFIG.passwordMinLength) {
      errors.password = `Пароль повинен бути не менше ${CONFIG.passwordMinLength} символів`;
    }

    if (!phone) {
      errors.phone = "Номер телефону є обов'язковим";
    } else if (!CONFIG.uaPhoneRegEXx3.test(phone)) {
      errors.phone = 'Номер телефону не валідний';
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <>
      <Formik
        preventDefault
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field
              title="Емейл"
              type="email"
              name="email"
              value={values.email}
              error={errors.email && touched.email && errors.email}
              placeholder="Введіть емейл"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              title="Username"
              name="username"
              value={values.username}
              error={errors.username && touched.username && errors.username}
              placeholder="Введіть username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              title="Пароль"
              type="password"
              name="password"
              value={values.password}
              error={errors.password && touched.password && errors.password}
              placeholder="Введіть пароль"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              title="Телефон"
              type="number"
              name="phone"
              value={values.phone}
              error={errors.phone && touched.phone && errors.phone}
              placeholder="Введіть номер телефону"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              type="submit"
              text="Зареєструватись"
              disabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
