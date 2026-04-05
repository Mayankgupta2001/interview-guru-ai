import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - InterviewGuru AI",
  description: "Privacy Policy for InterviewGuru AI - Interview preparation platform",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> April 5, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to InterviewGuru AI ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our interview preparation AI platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you provide directly to us, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Email address (if you contact us)</li>
                <li>Interview responses and practice data</li>
                <li>Feedback and evaluation results</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.2 Usage Information
              </h3>
              <p className="text-gray-700 mb-4">
                We automatically collect certain information about your use of our platform:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Provide and improve our interview preparation services</li>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Send important updates and notifications</li>
                <li>Ensure platform security and prevent abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-700 mb-4">
                Our platform integrates with the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li><strong>Groq AI:</strong> For AI-powered interview analysis and responses</li>
                <li><strong>Vercel:</strong> For hosting and deployment services</li>
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 font-medium">
                Email: interviewguru.ai@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}