interface AuthorBioProps {
  showAvatar?: boolean;
}

export default function AuthorBio({ showAvatar = true }: AuthorBioProps) {
  return (
    <div className="mt-12 pt-12 border-t border-gray-300">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
        <div className="flex items-start gap-6">
          {showAvatar && (
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-4xl font-bold">
                PS
              </div>
            </div>
          )}
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Priya Sharma
            </h3>
            <p className="text-lg text-blue-600 font-semibold mb-4">
              Career Coach & Interview Specialist
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Priya has helped 100+ candidates successfully land jobs at top companies like TCS, Infosys, Amazon, Flipkart, and more. With 6+ years of experience in recruitment and career coaching, she combines practical interview wisdom with a genuine passion for helping job seekers succeed.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>When asked about her mission:</strong> "Every candidate deserves to succeed. It's not about intelligence or education — it's about having the right guidance and confidence. That's why I created InterviewGuru AI."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
