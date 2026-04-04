import Navbar from '@/components/Navbar';
import TrustBanner from '@/components/TrustBanner';
import CategoryGrid from '@/components/CategoryGrid';
import Link from 'next/link';
import interviews from '@/data/interviews.json';
import questions from '@/data/questions.json';

export default function Home() {
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            🇮🇳 India's #1 AI Interview Coach
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#0d47a1' }}>
            Interview Crack Karo!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            AI-powered mock interviews aur expert guidance - Government aur Private dono ke liye. Bilkul Free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/mock-interview" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Mock Interview Shuru Karo 🎯
            </Link>
            <Link href="/questions" className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Questions Practice Karo 📚
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            10+ Categories | 50+ Questions | AI-Powered | Free
          </div>
        </div>
      </section>

      <TrustBanner />

      {/* CategoryGrid Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#0d47a1' }}>
            Apni Category Chuniye 🎯
          </h2>
          <CategoryGrid interviews={interviews} />
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
            🌟 Special Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900 to-purple-700 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold mb-2">Answer Evaluator</h3>
              <p className="text-blue-100 mb-4">
                Apna answer likho, AI 1-10 score dega aur better answer batayega
              </p>
              <a
                href="/evaluate"
                className="inline-block bg-white text-blue-900 font-bold px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
              >
                Try Karo →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-teal-600 rounded-2xl p-6 text-white">
              <div className="text-4xl mb-3">🎤</div>
              <h3 className="text-xl font-bold mb-2">Mock Interview</h3>
              <p className="text-green-100 mb-4">
                AI ke saath real interview practice karo aur confident bano
              </p>
              <a
                href="/mock-interview"
                className="inline-block bg-white text-green-700 font-bold px-6 py-2 rounded-full hover:bg-green-50 transition-colors"
              >
                Shuru Karo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Aaj Ka Question Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#0d47a1' }}>
            Aaj Ka Question
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
            <p className="text-lg font-semibold mb-2">{randomQuestion.question}</p>
            <p className="text-gray-600 mb-4">{randomQuestion.question_hindi}</p>
            <p className="text-sm text-gray-500 mb-4"><strong>Tips:</strong> {randomQuestion.tips}</p>
            <Link href="/questions" className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
              AI Se Answer Sikhho →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#0d47a1' }}>
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">1. Category chuniye</h3>
              <p className="text-gray-600">Apni job category select karo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold mb-2">2. Mock interview do</h3>
              <p className="text-gray-600">AI ke saath practice karo</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">3. AI feedback lo aur improve karo</h3>
              <p className="text-gray-600">Tips se better bano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <p>InterviewGuru AI 🇮🇳 | Free | Made for Indian Job Seekers | No Data Stored</p>
      </footer>
    </div>
  );
}
