import { useEffect } from 'react';
import styles from './About.module.css';

const missionValues = [
  {
    title: 'Practical Learning',
    description: 'Hands-on courses built around real-world projects and career-ready skills.',
  },
  {
    title: 'Personal Growth',
    description: 'Supportive mentorship and coaching to help learners build confidence.',
  },
  {
    title: 'Flexible Schedule',
    description: 'Study at your own pace with live sessions and self-led learning paths.',
  },
  {
    title: 'Trusted Certification',
    description: 'Earn certificates that demonstrate your skills to employers.',
  },
];

function About() {
  useEffect(() => {
    document.title = 'LearnHub | About';
  }, []);

  return (
    <section className={styles.about}>
      <header className={styles.header}>
        <p className={styles.pretitle}>Our mission</p>
        <h1>Building a learning platform that fits every ambition.</h1>
        <p>
          LearnHub provides career-focused courses, hands-on mentors, and flexible scheduling to
          help learners grow with confidence.
        </p>
      </header>

      <section className={styles.story}>
        <h2>Our story</h2>
        <div className={styles.timeline}>
          <div>
            <strong>2023</strong>
            <p>Launched the platform with a small cohort of live learning programs.</p>
          </div>
          <div>
            <strong>2024</strong>
            <p>Expanded to mentorship sessions and certification tracks for professionals.</p>
          </div>
          <div>
            <strong>2025</strong>
            <p>Scaled course offerings across web, data science, design, and marketing.</p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2>Mission values</h2>
        <div className={styles.valuesGrid}>
          {missionValues.map((value) => (
            <article key={value.title} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
