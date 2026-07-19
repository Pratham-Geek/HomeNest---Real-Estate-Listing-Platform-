import { useEffect, useState } from 'react';
import courses from '../../data/courses';
import testimonials from '../../data/testimonials';
import faqs from '../../data/faqs';
import CourseCard from '../../components/CourseCard/CourseCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import FAQItem from '../../components/FAQItem/FAQItem';
import styles from './Courses.module.css';

function Courses() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.title = 'LearnHub | Courses';
  }, []);

  const total = testimonials.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <section className={styles.courses}>
      <header className={styles.header}>
        <div>
          <p className={styles.label}>Course overview</p>
          <h1>Explore the courses that build your future.</h1>
          <p>
            Courses designed for practical learning, mentoring, and professional growth across
            technology, design, and marketing.
          </p>
        </div>
      </header>

      <div className={styles.grid}>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      <section className={styles.pricing}>
        <h2>Pricing plans</h2>
        <div className={styles.plans}>
          <article className={styles.plan}>
            <h3>Basic</h3>
            <p>Starter access and a workshop.</p>
            <strong>₹199</strong>
          </article>
          <article className={styles.plan}>
            <h3>Standard</h3>
            <p>Course access plus mentorship sessions.</p>
            <strong>₹349</strong>
          </article>
          <article className={styles.plan}>
            <h3>Pro</h3>
            <p>Full program with career support.</p>
            <strong>₹499</strong>
          </article>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What learners say</h2>
        <div className={styles.carousel}>
          <button type="button" className={styles.nav} onClick={prev} aria-label="Previous">
            ‹
          </button>
          <div className={styles.slide}>
            <TestimonialCard {...testimonials[current]} />
          </div>
          <button type="button" className={styles.nav} onClick={next} aria-label="Next">
            ›
          </button>
        </div>
      </section>

      <section className={styles.faqs}>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </section>
    </section>
  );
}

export default Courses;
