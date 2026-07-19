import { useState } from 'react';
import styles from './FAQItem.module.css';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.item}>
      <button type="button" className={styles.question} onClick={() => setOpen((value) => !value)}>
        <span>{question}</span>
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}

export default FAQItem;
