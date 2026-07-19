import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <span>LearnHub</span>
      </div>
      <nav className={styles.menu}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
