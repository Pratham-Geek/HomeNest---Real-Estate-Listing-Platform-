import { useNavigate } from 'react-router-dom';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Hero from '../../components/Hero/Hero';
import features from '../../data/features';
import styles from './Home.module.css';

const stats = [
  { label: 'Course rating', value: '4.9/5' },
  { label: 'Active learners', value: '15k+' },
  { label: 'Mentor sessions', value: '120+' },
];

function Home() {
  const navigate = useNavigate();

  return (
    <section className={styles.home}>
      <Hero onExplore={() => navigate('/courses')} />
      <section className={styles.section}>
        <h2>Why LearnHub?</h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.benefits}>
          <div>
            <h3>Designed for every learner</h3>
            <p>
              Learn with instructors who care about real outcomes. Access exclusive resources,
              practical projects, and supportive communities.
            </p>
          </div>
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div className={styles.statItem} key={stat.label} style={{ animationDelay: `${index * 0.12}s` }}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
