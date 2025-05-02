// src/app/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [isLoggedIn] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/globe.svg" 
            alt="SkillQuest Logo"
            width={40}
            height={40}
          />
          <span>SkillQuest</span>
        </div>
        
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/quests">Quests</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.placeholderImg}>
              <Image 
                src="/file.svg"
                alt="SkillQuest Icon"
                width={50}
                height={50}
              />
            </div>
            <h1 className={styles.title}>Welcome to SkillQuest</h1>
            <p className={styles.description}>
              Gamify your learning journey with <span className={styles.emphasis}>quests</span>, 
              <span className={styles.emphasis}> levels</span>, and interactive 
              <span className={styles.emphasis}> challenges</span>.
            </p>
            {isLoggedIn ? (
              <Link href="/dashboard" className={styles.button}>
                Continue Your Quest
              </Link>
            ) : (
              <Link href="/quests" className={styles.button}>
                Start Your Quest
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} SkillQuest. All rights reserved.</p>
      </footer>
    </div>
  );
}