// src/app/dashboard/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const [user] = useState({
    name: 'Alex',
    level: 3,
    xp: 850,
    maxXp: 1200,
    currentQuest: 'Mastering Algebra',
    completions: 3,
    totalSteps: 5
  });

  const progressPercentage = (user.xp / user.maxXp) * 100;
  const questProgressPercentage = (user.completions / user.totalSteps) * 100;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/globe.svg" 
            alt="SkillQuest Logo"
            width={32}
            height={32}
          />
          <span>SkillQuest</span>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/quests">Quests</Link>
          <Link href="/achievements">Achievements</Link>
        </nav>
        
        <div className={styles.profile}>
          <span>Alex</span>
          <div className={styles.avatar}>
            <Image 
              src="/api/placeholder/40/40" 
              alt="User Avatar" 
              width={40} 
              height={40} 
              className={styles.avatarImg}
            />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Welcome back, {user.name}!</h1>
          <p className={styles.welcomeText}>
            Continue your learning journey and embark on new quests!
          </p>
        </div>

        <div className={styles.dashboardGrid}>
          <div className={styles.card}>
            <h2>Current Quest</h2>
            <div className={styles.questInfo}>
              <div className={styles.questIcon}>
                <Image 
                  src="/file.svg" 
                  alt="Quest Icon" 
                  width={40} 
                  height={40}
                />
              </div>
              <div>
                <h3>{user.currentQuest}</h3>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${questProgressPercentage}%` }}
                  ></div>
                </div>
                <p>Completions: {user.completions}/{user.totalSteps}</p>
              </div>
            </div>
            <Link href="/quests/current" className={styles.button}>
              Continue Quest
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Quizzes</h2>
            <div className={styles.quizInfo}>
              <div className={styles.quizIcon}>
                <Image 
                  src="/file.svg" 
                  alt="Quiz Icon" 
                  width={40} 
                  height={40}
                />
              </div>
              <p>Take a quiz and test your knowledge</p>
            </div>
            <Link href="/quizzes" className={styles.button}>
              View Quizzes
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Achievements</h2>
            <div className={styles.achievementInfo}>
              <div className={styles.achievementIcon}>
                <Image 
                  src="/file.svg" 
                  alt="Achievement Icon" 
                  width={40} 
                  height={40}
                />
              </div>
              <div>
                <h3>Level {user.level}</h3>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p>{user.xp}/{user.maxXp} XP</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}