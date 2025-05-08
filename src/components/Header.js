// src/components/Header.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isLoggedIn = pathname.includes('/dashboard') || pathname.includes('/quests') || pathname.includes('/quiz');

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image 
          src="/globe.svg" 
          alt="SkillQuest Logo"
          width={32}
          height={32}
        />
        <span>AptiskillQuest</span>
      </Link>
      
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
          {isLoggedIn && (
            <li><Link href="/dashboard" className={pathname === '/dashboard' ? styles.active : ''}>Dashboard</Link></li>
          )}
          <li><Link href="/quests" className={pathname.includes('/quests') ? styles.active : ''}>Quests</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? styles.active : ''}>About</Link></li>
          <li><Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link></li>
        </ul>
      </nav>

      {isLoggedIn && (
        <div className={styles.profile}>
          <span>Alex</span>
          <div className={styles.avatar}>
            <Image 
              src="/api/placeholder/35/35" 
              alt="User Avatar" 
              width={35} 
              height={35} 
              className={styles.avatarImg}
            />
          </div>
        </div>
      )}
    </header>
  );
}