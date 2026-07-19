import styles from './FeatureCard.module.css';

function FeatureCard({ title, description }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
