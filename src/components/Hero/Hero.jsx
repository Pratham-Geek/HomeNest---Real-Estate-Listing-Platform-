import styles from './Hero.module.css';

function Hero({ onExplore }) {
  return (
    <section className={styles.hero}>
      <div className={styles.details}>
        <p className={styles.pretitle}>Accelerate your learning</p>
        <h1>Skills for tomorrow, today.</h1>
        <p className={styles.description}>
          LearnHub brings expert-led courses, live mentorship, and flexible study plans to help you grow.
        </p>
        <button className={styles.cta} type="button" onClick={onExplore}>
          Explore Courses
        </button>
      </div>
      <div className={styles.visual}>
        <div className={styles.card}>
          <p>300+ hours of live classes</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
