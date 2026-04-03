import React from 'react';

interface QuestionCardProps {
  question: {
    id: string;
    question: string;
    question_hindi: string;
    category: string;
    difficulty: string;
    tips: string;
    sample_answer: string;
  };
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
      <p className="text-gray-600 mb-2">{question.question_hindi}</p>
      <p className="text-sm text-gray-500 mb-2">Category: {question.category} | Difficulty: {question.difficulty}</p>
      <div className="mb-2">
        <strong>Tips:</strong> {question.tips}
      </div>
      <div>
        <strong>Sample Answer:</strong> {question.sample_answer}
      </div>
    </div>
  );
};

export default QuestionCard;