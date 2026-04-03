'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import MockInterview from '@/components/MockInterview';
import interviews from '@/data/interviews.json';

const categoryEmoji = (cat: string) => {
  switch (cat.toLowerCase()) {
    case 'banking': return '🏦';
    case 'government': return '🏛️';
    case 'defence': return '⚔️';
    case 'it': return '💻';
    case 'police': return '🚔';
    case 'education': return '📚';
    case 'corporate': return '🏢';
    default: return '🎯';
  }
};

export default function MockInterviewPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const chatRef = useRef<HTMLDivElement>(null);

  const filteredInterviews = useMemo(() => interviews, []);

  useEffect(() => {
    if (selectedCategory && chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCategory]);

  const selectedInterview = interviews.find((intv) => intv.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#0d47a1' }}>
          Mock Interview Shuru Karo 🎯
        </h1>
        <p className="text-gray-600 mb-6">Choose category aur AI ke saath practice karo</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold">Step 1</p>
            <p>Category Chuniye →</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold">Step 2</p>
            <p>Interview Shuru →</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold">Step 3</p>
            <p>Feedback Lo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {filteredInterviews.map((intv) => (
            <button
              key={intv.id}
              onClick={() => setSelectedCategory(intv.category)}
              className={`border rounded-lg p-4 text-left transition hover:shadow-lg ${
                selectedCategory === intv.category ? 'border-blue-700 bg-blue-100' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="text-3xl mb-2">{categoryEmoji(intv.category)}</div>
              <h3 className="font-bold text-lg">{intv.name}</h3>
              <p className="text-gray-500">{intv.name_hindi}</p>
            </button>
          ))}
        </div>

        {selectedCategory ? (
          <section ref={chatRef} className="space-y-4">
            <h2 className="text-2xl font-semibold mb-2">Selected: {selectedCategory}</h2>
            <MockInterview category={selectedCategory} interviewName={selectedInterview?.name || 'Interview'} />
          </section>
        ) : (
          <p className="text-gray-600">Please select category to start mock interview.</p>
        )}
      </main>
    </div>
  );
}
