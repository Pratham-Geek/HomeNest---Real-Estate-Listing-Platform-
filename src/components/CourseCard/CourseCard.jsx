import styles from './CourseCard.module.css';

function CourseCard({ title, instructor, duration, price, category }) {
  return (
    <article className={styles.card}>
      <div className={styles.headline}>
        <h3>{title}</h3>
        <span>{category}</span>
      </div>
      <p className={styles.meta}>Instructor: {instructor}</p>
      <p className={styles.meta}>Duration: {duration}</p>
      <div className={styles.footer}>
        <span>{price}</span>
        <button type="button">Enroll</button>
      </div>
    </article>
  );
}

export default CourseCard;
