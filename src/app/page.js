'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-br from-indigo-100 to-white text-gray-800">
      <Image
        src="/skillquest-logo.png"
        alt="SkillQuest Logo"
        width={120}
        height={120}
        priority
        className="mb-6 animate-fadeIn"
      />

      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight">
        Welcome to <span className="text-indigo-600">SkillQuest</span>
      </h1>

      <p className="text-lg sm:text-xl text-center max-w-xl mb-8 leading-relaxed">
        Gamify your learning journey with <strong>quests</strong>, <strong>levels</strong>,
        and interactive <strong>challenges</strong>.
      </p>

      <button
        onClick={() => router.push('/dashboard')}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition transform hover:scale-105 shadow-md"
        aria-label="Start Your Quest"
      >
        Start Your Quest
      </button>
    </div>
  )
}
