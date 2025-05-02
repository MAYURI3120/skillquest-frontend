"use client";
import { useRouter } from "next/navigation";

export default function Quests() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-white text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Available Quests</h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8">
        Choose your quest to begin your learning journey!
      </p>
      {/* Example quest items */}
      <div className="space-y-4">
        <button
          onClick={() => router.push("/quiz")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Start Quest 1
        </button>
        <button
          onClick={() => router.push("/quiz")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Start Quest 2
        </button>
      </div>
    </div>
  );
}
