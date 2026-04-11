import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '../blog/_posts'

export const metadata: Metadata = {
  title: 'Interview Tips Blog — नौकरी पाने की पूरी गाइड हिंदी में',
  description:
    'Interview tips, resume बनाना, GD tips, LinkedIn profile — job पाने की सभी जानकारी हिंदी में। Freshers और experienced दोनों के लिए।',
}

const categories = [
  'सभी',
  'Interview Tips',
  'Resume Tips',
  'Sarkari Naukri',
  'Fresher Tips',
  'GD Tips',
  'Career Tips',
]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-purple-700 text-white rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📚</span>
          <div>
            <h1 className="text-xl font-semibold">Interview Tips Blog</h1>
            <p className="text-purple-200 text-sm mt-0.5">
              नौकरी पाने की पूरी गाइड — हिंदी में, मुफ़्त
            </p>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl px-4 py-2.5 mt-3 text-sm text-purple-100 flex items-center gap-2">
          <span>🔍</span>
          <span>Resume, Interview, GD, LinkedIn... जो जानना है पढ़ें</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-all flex-shrink-0 ${
              cat === 'सभी'
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white text-gray-600 border-gray-200 hover:border-purple-700 hover:text-purple-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { num: `${blogPosts.length}+`, label: 'Articles' },
          { num: '100%', label: 'हिंदी में' },
          { num: 'Free', label: 'हमेशा' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm">
            <div className="text-purple-700 font-semibold text-lg">{s.num}</div>
            <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.readTime} पढ़ें</span>
            </div>
            <div className="flex gap-3 mb-2">
              <span className="text-3xl flex-shrink-0">{post.icon}</span>
              <h2 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-purple-700 transition-colors">
                {post.title}
              </h2>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-purple-700 text-xs font-medium flex items-center gap-1">
                पढ़ें <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 mt-6 text-center">
        <p className="text-purple-700 font-medium mb-1">🤖 Mock Interview देना है?</p>
        <p className="text-gray-500 text-sm mb-3">
          InterviewGuru AI से practice करें — AI आपका interviewer बनेगा
        </p>
        <Link
          href="/mock-interview"
          className="inline-block bg-purple-700 text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-purple-800 transition-all"
        >
          🎯 Mock Interview शुरू करें — Free!
        </Link>
      </div>
    </div>
  )
}