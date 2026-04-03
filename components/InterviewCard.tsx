import React from 'react';
import Link from 'next/link';

interface InterviewType {
  id: string;
  slug: string;
  name: string;
  name_hindi: string;
  category: string;
  difficulty: string;
  avg_salary: string;
  top_recruiters: string[];
  common_questions: string[];
  tips: string[];
  dress_code: string;
}

interface InterviewCardProps {
  interview: InterviewType;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
  const getEmoji = (category: string) => {
    switch (category) {
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

  const emoji = getEmoji(interview.category);

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <div className="text-3xl mb-2">{emoji}</div>
      <h3 className="text-lg font-bold mb-1" style={{ color: '#0d47a1' }}>{interview.name}</h3>
      <p className="text-gray-600 mb-2">{interview.name_hindi}</p>
      <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${
        interview.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
        interview.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {interview.difficulty}
      </span>
      <p className="text-green-600 font-semibold mb-2">{interview.avg_salary}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {interview.top_recruiters.slice(0, 3).map(r => (
          <span key={r} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
            {r}
          </span>
        ))}
      </div>
      <Link href={`/interview/${interview.slug}`} className="inline-block bg-blue-900 text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 transition">
        Start Interview
      </Link>
    </div>
  );
};

export default InterviewCard;