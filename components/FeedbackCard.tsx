import React from 'react';

interface FeedbackCardProps {
  feedback: {
    question: string;
    userAnswer: string;
    aiFeedback: string;
    rating: number;
  };
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <h3 className="font-semibold mb-2">Question: {feedback.question}</h3>
      <p className="mb-2"><strong>Your Answer:</strong> {feedback.userAnswer}</p>
      <p className="mb-2"><strong>AI Feedback:</strong> {feedback.aiFeedback}</p>
      <p className="text-yellow-600">Rating: {feedback.rating}/10</p>
    </div>
  );
};

export default FeedbackCard;