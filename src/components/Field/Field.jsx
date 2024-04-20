/* eslint-disable react/prop-types */
// * Styles
import styles from './Field.module.css';

const Field = ({
  title,
  type = 'text',
  name,
  placeholder,
  error,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <>
      <label className={styles.lable}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className={styles.error}>{error}</div>
      </label>
    </>
  );
};

export default Field;
