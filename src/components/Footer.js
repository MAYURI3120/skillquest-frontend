// src/components/Footer.js
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} AptiskillQuest. All rights reserved.</p>
    </footer>
  );
}