import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.brand}>LearnHub</p>
        <p>Build skills, earn certificates, and grow your career.</p>
      </div>
      <div className={styles.info}>
        <p>Contact: hello@learnhub.com</p>
        <p>Phone: +1 800 123 4567</p>
      </div>
    </footer>
  );
}

export default Footer;
