"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Quiz() {
  const router = useRouter();
  const [selectedSubject, setSelectedSubject] = useState("logical_reasoning");
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium"); // Difficulty level state
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // Timer state
  const [feedback, setFeedback] = useState(""); // Feedback state for correct/incorrect answers

  // Fetch questions based on the selected subject and difficulty
  useEffect(() => {
    const loadQuestions = async () => {
      let filePath = "";
      if (selectedSubject === "logical_reasoning") {
        filePath = `/data/logical_reasoning/${selectedDifficulty}/test.json`;
      } else if (selectedSubject === "quantitative_aptitude") {
        filePath = `/data/quantitative_aptitude/${selectedDifficulty}/train.json`;  // Adjust path as needed
      } else if (selectedSubject === "verbal_reasoning") {
        filePath = `/data/verbal_reasoning/${selectedDifficulty}/challenge_test.json`;
      }

      const res = await fetch(filePath);
      const data = await res.json();
      setQuestions(data);
    };

    loadQuestions();
  }, [selectedSubject, selectedDifficulty]);

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

    if (timeLeft === 0) {
      handleAnswer(null); // Time's up, automatically handle as wrong answer
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect!");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); // Reset timer for next question
    } else {
      handleFinishQuiz(); // Finish quiz once all questions are answered
    }
  };

  const handleFinishQuiz = () => {
    alert(`Quiz Finished! Your Score: ${score}/${questions.length}`);
    router.push("/dashboard");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-100 to-white text-gray-800">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">SkillQuest Quiz</h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8">
        Test your knowledge and earn points for your quests!
      </p>

      {/* Dropdown to select the quiz subject */}
      <select
        className="mb-4 p-2 border border-indigo-600 rounded"
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
      >
        <option value="logical_reasoning">Logical Reasoning</option>
        <option value="quantitative_aptitude">Quantitative Aptitude</option>
        <option value="verbal_reasoning">Verbal Reasoning</option>
      </select>

      {/* Dropdown to select the difficulty level */}
      <select
        className="mb-4 p-2 border border-indigo-600 rounded"
        value={selectedDifficulty}
        onChange={(e) => setSelectedDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {/* Timer */}
      <div className="mb-4 text-lg">Time Left: {timeLeft}s</div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
        <div
          style={{ width: `${progress}%` }}
          className="bg-blue-600 h-2 rounded-full"
        ></div>
      </div>

      {/* Render Question */}
      {questions.length > 0 && (
        <>
          <div className="space-y-4">
            <p className="text-lg">{`Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full text-lg transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Message */}
          {feedback && <div className="mt-4 text-xl font-semibold">{feedback}</div>}

          {/* Score Display */}
          <div className="mt-6 text-lg font-semibold">
            <p>Score: {score}</p>
          </div>
        </>
      )}
    </div>
  );
}
