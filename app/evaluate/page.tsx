'use client'

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

type EvaluationResult = {
  score: number;
  strengths: string[];
  improvements: string[];
  better_answer: string;
  hindi_tip: string;
};

export default function EvaluatePage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [error, setError] = useState('');

  const reset = () => {
    setQuestion('');
    setAnswer('');
    setResult(null);
    setError('');
    setIsLoading(false);
  };

  const evaluate = async () => {
    if (!question.trim() || !answer.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });

      if (!response.ok) {
        const message = (await response.json())?.error || 'Server error';
        setError(message);
        setResult(null);
      } else {
        const data = await response.json();

        if (data && typeof data.score === 'number') {
          setResult(data);
        } else {
          setError('Kuch galat response aaya. Dobara try karo.');
          setResult(null);
        }
      }
    } catch (err) {
      setError('Network error. Dobara try karo.');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreLabel = (score: number) => {
    if (score >= 8) return 'Excellent! 🌟 Interview Ready Ho!';
    if (score >= 6) return 'Achha Hai! 👍 Thoda Polish Karo';
    if (score >= 4) return 'Average 😐 Improvement Needed';
    return 'Weak Answer ❌ Zyada Practice Karo';
  };

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'text-green-700 bg-green-100';
    if (score >= 5) return 'text-yellow-700 bg-yellow-100';
    return 'text-red-700 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-center" style={{ color: '#0d47a1' }}>
            Answer Evaluator 📝
          </h1>
          <p className="text-center text-gray-600 text-lg">
            Apna interview answer likho - AI score dega aur improve karega
          </p>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <label className="block font-semibold mb-2">Interview Question:</label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Jaise: Tell me about yourself / Why do you want this job?"
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <label className="block font-semibold mb-2">Aapka Answer:</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Apna poora answer yahan likho..."
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={evaluate}
            disabled={isLoading || !question.trim() || !answer.trim()}
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {isLoading ? 'AI aapka answer evaluate kar raha hai... 🤔' : 'AI Se Evaluate Karo 🎯'}
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}

          {isLoading && (
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-5 w-5 animate-spin rounded-full border-4 border-blue-900 border-t-transparent" />
              <span className="text-gray-700">AI aapka answer evaluate kar raha hai... 🤔</span>
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div className={`p-6 rounded-xl shadow-md text-center ${getScoreColor(result.score)}`}>
                <p className="text-6xl font-bold">{result.score}/10</p>
                <p className="text-lg mt-2 font-semibold">{getScoreLabel(result.score)}</p>
                <div className="w-full h-4 bg-gray-200 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-4 rounded-full bg-blue-600"
                    style={{ width: `${Math.min(Math.max(result.score, 0), 10) * 10}%` }}
                  />
                </div>
              </div>

              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h3 className="font-bold mb-3">✅ Acha Kya Kiya</h3>
                <ul className="list-disc list-inside space-y-2 text-green-900">
                  {result.strengths.map((strength, idx) => (
                    <li key={idx}>{strength}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h3 className="font-bold mb-3">❌ Kya Improve Karo</h3>
                <ul className="list-disc list-inside space-y-2 text-red-900">
                  {result.improvements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-bold mb-3">💡 Aise Bolte Toh Better Hota</h3>
                <p className="text-blue-900 whitespace-pre-wrap">{result.better_answer}</p>
              </div>

              <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                <h3 className="font-bold mb-3">🇮🇳 Pro Tip</h3>
                <p className="text-yellow-900 whitespace-pre-wrap">{result.hindi_tip}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={reset}
                  className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Dobara Try Karo 🔄
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Maine InterviewGuru AI pe apna answer evaluate kiya - ${result.score}/10 mila! Try karo: https://interview-guru-ai.vercel.app/evaluate`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  WhatsApp Pe Share Karo 📱
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
