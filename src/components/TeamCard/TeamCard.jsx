import styles from './TeamCard.module.css';

function TeamCard({ photo, name, role, bio }) {
  return (
    <article className={styles.card}>
      <img src={photo} alt={name} className={styles.photo} />
      <div className={styles.details}>
        <h3>{name}</h3>
        <p className={styles.role}>{role}</p>
        <p>{bio}</p>
      </div>
    </article>
  );
}

export default TeamCard;
