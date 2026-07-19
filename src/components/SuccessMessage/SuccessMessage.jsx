import styles from './SuccessMessage.module.css';

function SuccessMessage({ message }) {
  return <div className={styles.alert}>{message}</div>;
}

export default SuccessMessage;
