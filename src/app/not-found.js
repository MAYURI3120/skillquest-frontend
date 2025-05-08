import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Not Found!</h1> {/* Updated */}
      <p className={styles.description}> {/* Updated */}
        The page you're seeking has vanished into the digital abyss.
      </p>
      <Link href="/" className={styles.homeLink}>
        ← Return to Homebase
      </Link>
    </div>
  );
}