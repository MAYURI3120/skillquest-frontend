'use client';
// In /app/dashboard/Dashboard.js
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background text-foreground font-sans">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeIn">
        SkillQuest Dashboard
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8 animate-fadeIn">
        Congratulations on starting your journey! Here's your personal dashboard where you can track your progress.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-2/3 animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <p className="text-lg">Level: Beginner</p>
        <p className="text-lg">Points: 120</p>
        <p className="text-lg">Quests Completed: 5</p>
      </div>
      <div className="mt-6">
        <button
          onClick={() => router.push("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
