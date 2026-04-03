import { Metadata } from 'next';
import interviews from '@/data/interviews.json';
import questions from '@/data/questions.json';
import MockInterview from '@/components/MockInterview';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export async function generateStaticParams() {
  return interviews.map((interview) => ({
    slug: interview.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const interview = interviews.find((i) => i.slug === slug);
  if (!interview) {
    return {
      title: 'Interview Not Found | InterviewGuru AI',
      description: 'Interview not found.',
    };
  }
  return {
    title: `${interview.name} - AI Mock Interview | InterviewGuru AI`,
    description: `AI-powered mock interview preparation for ${interview.name}. Practice questions, get feedback. Free!`,
  };
}

export default async function InterviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const interview = interviews.find((i) => i.slug === slug);
  if (!interview) {
    return <div>Interview not found</div>;
  }

  const relatedQuestions = questions.filter((q) => q.category === interview.category);

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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link> &gt;
            <span className="capitalize">{interview.category}</span> &gt;
            <span className="font-semibold">{interview.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2" style={{ color: '#0d47a1' }}>
            {interview.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{interview.name_hindi}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              interview.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              interview.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {interview.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {interview.avg_salary}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              {interview.top_recruiters[0]}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Important Tips */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">📋</span> Important Tips
              </h2>
              <ul className="space-y-2">
                {interview.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Dress Code */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">👔</span> Dress Code
              </h2>
              <p className="text-lg">{interview.dress_code}</p>
            </section>

            {/* Common Questions */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-2">❓</span> Common Questions
              </h2>
              <ol className="space-y-4">
                {interview.common_questions.map((question, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded">
                    <span className="font-medium">{question}</span>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                      Practice with AI →
                    </button>
                  </li>
                ))}
              </ol>
            </section>

            {/* Related Questions */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <h2 className="text-2xl font-bold mb-4">Related Questions</h2>
              <div className="space-y-2">
                {relatedQuestions.slice(0, 10).map((q) => (
                  <div key={q.id} className="p-3 bg-gray-50 rounded">
                    <p className="font-medium">{q.question}</p>
                    <p className="text-sm text-gray-600">{q.question_hindi}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="sticky top-4">
              <MockInterview category={interview.category} interviewName={interview.name} />
            </div>

            {/* Quick Stats */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🎯</span> Quick Stats
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Average Salary:</span>
                  <p className="text-green-600 font-semibold">{interview.avg_salary}</p>
                </div>
                <div>
                  <span className="font-medium">Top Recruiters:</span>
                  <p className="text-sm">{interview.top_recruiters.join(', ')}</p>
                </div>
                <div>
                  <span className="font-medium">Difficulty:</span>
                  <p className={`inline-block px-2 py-1 rounded text-sm font-medium ml-2 ${
                    interview.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                    interview.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {interview.difficulty}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom MockInterview for mobile */}
        <div className="lg:hidden mt-8">
          <MockInterview category={interview.category} interviewName={interview.name} />
        </div>
      </div>
    </div>
  );
}