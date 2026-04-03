import React from 'react';
import InterviewCard from './InterviewCard';

interface CategoryGridProps {
  interviews: Array<{
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
  }>;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ interviews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {interviews.map((interview) => (
        <InterviewCard key={interview.id} interview={interview} />
      ))}
    </div>
  );
};

export default CategoryGrid;