import { useState, useEffect } from 'react';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';
import styles from './Contact.module.css';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  startDate: '',
  category: 'Web Dev',
  mode: 'Online',
  interests: [],
  message: '',
};

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) errors.fullName = 'Full Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email must be valid.';
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone Number is required.';
  } else if (!/^\+?[0-9]{7,15}$/.test(form.phone.replace(/\s+/g, '')) ) {
    errors.phone = 'Phone number must contain only digits and optional +.';
  }

  if (!form.startDate) errors.startDate = 'Preferred start date is required.';
  if (!form.message.trim()) errors.message = 'Message is required.';
  if (form.interests.length === 0) errors.interests = 'Select at least one interest.';

  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'LearnHub | Contact';
  }, []);

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    } else {
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section className={styles.contact}>
      <header className={styles.header}>
        <h1>Start your learning journey</h1>
        <p>
          Fill in your details and our enrollment team will help you choose the best program.
        </p>
      </header>

      {submitted && <SuccessMessage message="Your request has been received successfully!" />}

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <label className={styles.field}>
            Full Name
            <input name="fullName" value={form.fullName} onChange={handleInput} />
            {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
          </label>

          <label className={styles.field}>
            Email
            <input name="email" value={form.email} onChange={handleInput} />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </label>

          <label className={styles.field}>
            Phone Number
            <input name="phone" value={form.phone} onChange={handleInput} />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </label>

          <label className={styles.field}>
            Preferred Start Date
            <input type="date" name="startDate" value={form.startDate} onChange={handleInput} />
            {errors.startDate && <span className={styles.error}>{errors.startDate}</span>}
          </label>
        </div>

        <fieldset className={styles.group}>
          <legend>Course Category</legend>
          <select name="category" value={form.category} onChange={handleInput}>
            <option>Web Dev</option>
            <option>Data Science</option>
            <option>Design</option>
            <option>Marketing</option>
          </select>
        </fieldset>

        <fieldset className={styles.group}>
          <legend>Mode</legend>
          <label>
            <input type="radio" name="mode" value="Online" checked={form.mode === 'Online'} onChange={handleInput} /> Online
          </label>
          <label>
            <input type="radio" name="mode" value="Offline" checked={form.mode === 'Offline'} onChange={handleInput} /> Offline
          </label>
          <label>
            <input type="radio" name="mode" value="Hybrid" checked={form.mode === 'Hybrid'} onChange={handleInput} /> Hybrid
          </label>
        </fieldset>

        <fieldset className={styles.group}>
          <legend>Interests</legend>
          <label>
            <input type="checkbox" name="interests" value="Web Development" checked={form.interests.includes('Web Development')} onChange={handleInput} /> Web Development
          </label>
          <label>
            <input type="checkbox" name="interests" value="Data Science" checked={form.interests.includes('Data Science')} onChange={handleInput} /> Data Science
          </label>
          <label>
            <input type="checkbox" name="interests" value="Design" checked={form.interests.includes('Design')} onChange={handleInput} /> Design
          </label>
          <label>
            <input type="checkbox" name="interests" value="Marketing" checked={form.interests.includes('Marketing')} onChange={handleInput} /> Marketing
          </label>
          {errors.interests && <span className={styles.error}>{errors.interests}</span>}
        </fieldset>

        <label className={styles.field}>
          Message / Query
          <textarea name="message" rows="5" value={form.message} onChange={handleInput} />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </label>

        <div className={styles.actions}>
          <button type="submit">Submit</button>
          <button type="button" className={styles.reset} onClick={handleReset}>Reset</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
