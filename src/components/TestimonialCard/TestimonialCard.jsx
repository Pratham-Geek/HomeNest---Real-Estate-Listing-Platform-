import styles from './TestimonialCard.module.css';

function TestimonialCard({ name, quote, role }) {
  return (
    <article className={styles.card}>
      <p className={styles.quote}>“{quote}”</p>
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
    </article>
  );
}

export default TestimonialCard;
