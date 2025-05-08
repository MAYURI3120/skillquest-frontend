'use client';
import { useState, useEffect } from 'react';

export default function PracticePage() {
  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/quantitative?difficulty=${difficulty}`);
      if (!res.ok) throw new Error('Failed to fetch questions');
      const data = await res.json();
      setQuestions(data.questions || []);
      setSelectedAnswers({}); // Reset answers when questions change
      setSubmitted(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (questionIndex, option) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: option
    }));
  };

  const checkAnswers = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    fetchQuestions();
  }, [difficulty]);

  const calculateScore = () => {
    return questions.reduce((score, q, index) => {
      return score + (selectedAnswers[index] === q.correct_answer ? 1 : 0);
    }, 0);
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#3a0ca3', marginBottom: '10px' }}>Practice Questions</h1>
      <p style={{ color: '#6c757d', marginBottom: '20px' }}>
        Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </p>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <select 
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={{ 
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ced4da',
            backgroundColor: '#f8f9fa'
          }}
          disabled={loading}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button
          onClick={checkAnswers}
          disabled={loading || submitted}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4361ee',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Check Answers
        </button>
      </div>

      {error && (
        <div style={{ 
          color: '#dc3545', 
          backgroundColor: '#f8d7da',
          padding: '10px',
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          Error: {error}
        </div>
      )}

      {loading ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '200px'
        }}>
          <p>Loading questions...</p>
        </div>
      ) : (
        <div>
          {questions.map((q, i) => (
            <div 
              key={i} 
              style={{ 
                marginBottom: '20px', 
                padding: '15px', 
                border: '1px solid #e9ecef',
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{ color: '#2b2d42' }}>Question {i + 1}</h3>
              <p style={{ marginBottom: '10px' }}>{q.question}</p>
              
              {q.options && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {q.options.map((opt, j) => (
                    <li key={j} style={{ marginBottom: '8px' }}>
                      <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="radio"
                          name={`question-${i}`}
                          checked={selectedAnswers[i] === opt}
                          onChange={() => handleAnswerSelect(i, opt)}
                          disabled={submitted}
                          style={{ marginRight: '8px' }}
                        />
                        <span style={{
                          color: submitted 
                            ? opt === q.correct_answer 
                              ? '#28a745' 
                              : selectedAnswers[i] === opt 
                                ? '#dc3545' 
                                : '#6c757d'
                            : '#212529'
                        }}>
                          {opt}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {submitted && questions.length > 0 && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#e2e3e5',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              <h3>Your Score: {calculateScore()} / {questions.length}</h3>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedAnswers({});
                }}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}