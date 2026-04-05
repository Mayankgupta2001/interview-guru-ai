import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About InterviewGuru AI - Interview Preparation Platform",
  description: "Learn about InterviewGuru AI - Your AI-powered interview preparation companion for Indian job seekers",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About InterviewGuru AI 🎯
            </h1>
            <p className="text-xl text-gray-600">
              Your AI-powered interview preparation companion
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                InterviewGuru AI is dedicated to empowering Indian job seekers with cutting-edge AI technology.
                We believe that everyone deserves access to high-quality interview preparation tools, regardless of their background or location.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform combines artificial intelligence with deep knowledge of the Indian job market to provide
                personalized, effective interview preparation that helps you land your dream job.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📚</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      10+ Interview Categories
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive coverage across government jobs, private sector, IT, finance, and more.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🤖</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      AI Mock Interviews
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Realistic interview simulations powered by advanced AI to build your confidence.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📊</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Answer Evaluator
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Get detailed feedback on your responses with actionable improvement suggestions.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">❓</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      50+ Practice Questions
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Curated question bank covering common and industry-specific interview questions.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 md:col-span-2">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🇮🇳</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Government + Private Jobs
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Tailored preparation for both government sector exams and private company interviews.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Why Choose InterviewGuru AI?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Targeted Preparation
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Focused content designed specifically for the Indian job market
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    AI-Powered
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Advanced AI technology for personalized learning experiences
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Free Access
                  </h3>
                  <p className="text-gray-700 text-sm">
                    High-quality preparation tools available completely free
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Technology
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                InterviewGuru AI leverages state-of-the-art AI models and machine learning algorithms to provide
                intelligent interview analysis, natural language processing for response evaluation, and adaptive
                learning systems that improve with each interaction.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our platform is built with modern web technologies and deployed on scalable cloud infrastructure
                to ensure fast, reliable access for users across India.
              </p>
            </section>

            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-4">
                Have questions, feedback, or suggestions? We'd love to hear from you!
              </p>
              <div className="flex items-center">
                <span className="text-lg mr-2">📧</span>
                <a
                  href="mailto:interviewguru.ai@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  interviewguru.ai@gmail.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}