'use client';
import { useState } from 'react';
import styles from './page.module.css';

// Local dataset (temporary - replace with backend later)
const questsData = [
  {
    id: 1,
    title: "Quantitative Aptitude",
    description: "Master arithmetic, algebra, and geometry concepts",
    difficulty: "Beginner",
    rewards: "100 XP"
  },
  {
    id: 2,
    title: "Logical Reasoning",
    description: "Solve puzzles and pattern recognition problems",
    difficulty: "Intermediate", 
    rewards: "150 XP"
  },
  {
    id: 2,
    title: "Verbal Reasoning",
    description: "Dive into verbal reasoning by solving grammar problems",
    difficulty: "Advance", 
    rewards: "200 XP"
  }
];

export default function Quests() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className={styles.container}>
      <h1>Available Quests</h1>
      <p className={styles.subtitle}>Choose your quest to begin your learning journey</p>
      
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Quests
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active
        </button>
      </div>

      <div className={styles.questGrid}>
        {questsData.map(quest => (
          <div key={quest.id} className={styles.questCard}>
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
            <div className={styles.meta}>
              <span>Difficulty: {quest.difficulty}</span>
              <span>Reward: {quest.rewards}</span>
            </div>
            <button className={styles.startButton}>Start Quest</button>
          </div>
        ))}
      </div>
    </div>
  );
}