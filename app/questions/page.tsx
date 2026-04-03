'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import questions from '@/data/questions.json';
import interviews from '@/data/interviews.json';

const filters = ['All', 'Common', 'Banking', 'Government', 'IT', 'Easy', 'Medium', 'Hard'];

const categorySlugMap = new Map<string, string>(
  interviews.map((intv) => [intv.category.toLowerCase(), intv.slug])
);

export default function QuestionsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredQuestions = useMemo(() => {
    if (activeFilter === 'All') return questions;

    const f = activeFilter.toLowerCase();
    if (['easy', 'medium', 'hard'].includes(f)) {
      return questions.filter((q) => q.difficulty.toLowerCase() === f);
    }

    return questions.filter((q) => q.category.toLowerCase() === f || q.category.toLowerCase().includes(f));
  }, [activeFilter]);

  const getInterviewLink = (category: string) => {
    const slug = categorySlugMap.get(category.toLowerCase());
    return slug ? `/interview/${slug}` : '/mock-interview';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0d47a1' }}>
          Questions Practice Karo 📚
        </h1>
        <p className="text-gray-600 mb-6">50+ interview questions with AI guidance</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredQuestions.map((q) => (
            <div key={q.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <p className="font-semibold text-lg mb-1">{q.question}</p>
              <p className="text-gray-500 mb-2">{q.question_hindi}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">{q.category}</span>
                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded">{q.difficulty}</span>
              </div>
              <div className="bg-blue-50 text-blue-700 text-sm p-2 rounded mb-3">{q.tips}</div>
              <button
                onClick={() => {
                  const link = getInterviewLink(q.category);
                  window.location.href = `${link}`;
                }}
                className="text-sm font-semibold text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded"
              >
                AI Se Practice Karo →
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
