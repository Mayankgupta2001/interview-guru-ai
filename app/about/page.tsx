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
              Built by Career Professionals, for Indian Job Seekers
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Story — Why We Created This Platform
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                InterviewGuru AI was born from a personal struggle. I (Priya Sharma) remember my first corporate interview vividly — it was with Infosys, and I was absolutely terrified. I had spent 4 years in college studying hard, but nobody had taught me how to actually ace an interview. I walked into that room unprepared, nervous, and gave answers that were technically correct but lacked confidence and impact.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I didn't get that job. But that failure became my greatest teacher. Over the next 6 years, I dedicated myself to mastering the art of interviews — not just for myself, but to help others succeed where I initially failed. I worked in recruitment at major companies like TCS, Infosys, and Amazon, where I was on both sides of the interview table. I saw thousands of candidates struggle with the same fears and lack of preparation that I had experienced.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                That's when I realized something: the gap between talented candidates and successful candidates is not intelligence or education — it's preparation and confidence. I started coaching candidates one-on-one, and the results were remarkable. Students who I coached went on to join top companies. This success inspired me to scale my impact by building InterviewGuru AI — a platform that combines my 6+ years of career coaching experience with modern AI technology, so that every Indian job seeker can access quality interview preparation, regardless of their background or financial situation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>To empower every Indian job seeker with the tools, knowledge, and confidence needed to ace their interviews and land their dream jobs.</strong>
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We believe that quality interview preparation should not be a privilege limited to those who can afford expensive coaching classes. Whether you're a fresher from a tier-3 college or an experienced professional looking for a career switch, you deserve access to expert guidance and realistic practice.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                InterviewGuru AI combines three powerful elements:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg mb-6 space-y-2">
                <li><strong>Real Experience:</strong> Insights from someone who has been on both sides of interview tables, recruiting for Fortune 500 companies</li>
                <li><strong>AI Technology:</strong> Advanced algorithms that provide personalized feedback and adaptive learning</li>
                <li><strong>Indian Context:</strong> Deep understanding of the Indian job market, government exams, and private sector interviews</li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our goal is to transform interview anxiety into confidence and turn preparation into success.
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
                What Makes Us Different?
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    👨‍💼 Real Career Coaching Experience
                  </h3>
                  <p className="text-gray-700">
                    Founded by Priya Sharma, who has personally coached 100+ candidates into top companies like TCS, Infosys, Amazon, Flipkart, Accenture, and more. This isn't theoretical knowledge — it's tested, practical experience.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🇮🇳 Built for Indian Job Market
                  </h3>
                  <p className="text-gray-700">
                    Unlike generic international platforms, everything here is specifically tailored for Indian job seekers — government jobs (SSC, Bank, UPSC), PSU interviews, IT company patterns, and the nuances of Indian recruitment.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    🗣️ Honest, Hinglish Content
                  </h3>
                  <p className="text-gray-700">
                    We don't believe in pretentious English. Our guides are written in natural Hinglish because that's how you speak in real interviews in India. Real examples from TCS, Infosys, UPSC interviews — the places you actually want to get into.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    📚 Real Content, Not AI-Generated Fluff
                  </h3>
                  <p className="text-gray-700">
                    Every article, guide, and tip comes from real experience and is reviewed by someone who has actually conducted hundreds of interviews. You get substance, not generic AI writing.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ❌ No Subscription Trap
                  </h3>
                  <p className="text-gray-700">
                    Completely free, no hidden charges, no "premium versions." We believe quality interview preparation should be accessible to everyone, whether you're from Delhi, Bangalore, or a small town in Bihar.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Meet the Founder
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Priya Sharma — Career Coach & InterviewGuru Founder
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">6+ years of career coaching experience</p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Priya's journey started with her own interview struggles at Infosys, which became the turning point in her career. Instead of getting discouraged, she decided to master the art of interviews and help others succeed.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong>Her experience includes:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg mb-4 space-y-2">
                  <li>Recruitment & HR Experience at TCS, Infosys, and Amazon</li>
                  <li>Conducted 500+ interviews across various roles and experience levels</li>
                  <li>Personally coached 100+ candidates into top companies</li>
                  <li>Deep expertise in government exams (SSC, Bank, UPSC) and private sector interviews</li>
                  <li>B.Tech in Computer Science with specialization in AI/ML</li>
                </ul>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Priya believes that every candidate has the potential to succeed — they just need the right guidance, resources, and confidence. This philosophy drives everything at InterviewGuru AI. She's passionate about democratizing quality career advice and making it accessible to every Indian job seeker.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📚</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      50+ Practice Questions
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Curated question bank with real examples from TCS, Infosys, Amazon, Bank interviews
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
                    Realistic interview simulations to build confidence before the real thing
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📊</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Detailed Feedback
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Actionable improvement suggestions based on real interview experience
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🇮🇳</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Government + Private
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    SSC, Bank, UPSC, IT companies, PSU — complete coverage
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-6 md:col-span-2">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📖</span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      In-Depth Guides & Articles
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Blog posts with 800+ words of real advice on resumes, salary negotiation, fresher tips, and more
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Commitment to Quality
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Unlike generic AI-written content, every single article on InterviewGuru AI is written by Priya or reviewed by professionals with actual interview experience. Every guide is based on real interviews conducted at real companies, not generic templates.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our mission is simple: <strong>Help you succeed in your interviews.</strong> We don't write content for SEO rankings or to sound impressive. We write content that actually helps you land the job you want.
              </p>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border-l-4 border-blue-600">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch — We'd Love to Hear From You!
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Have a question about interviews? Want to share your success story? Found an error in our content? Or just want to share feedback? Reach out directly to Priya and the team.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📧</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:priya@interviewguru.ai"
                      className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                    >
                      priya@interviewguru.ai
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      (Priya reviews emails personally and loves hearing from candidates)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">💼</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Feedback & Suggestions</p>
                    <p className="text-gray-700">
                      Found something that helped you? Or something that didn't? Let us know. Your feedback helps us improve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Success Stories</p>
                    <p className="text-gray-700">
                      Got a job using InterviewGuru AI? Share your story! We'd love to celebrate your success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-300">
                <p className="text-gray-700 text-lg">
                  <strong>Remember:</strong> You have what it takes. You just need the right preparation, confidence, and a bit of guidance. That's what we're here for. Good luck with your interviews! 🚀
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}