import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InterviewGuru AI - Interview Preparation",
  description: "AI-powered mock interviews for Indian job seekers. Free!",
  verification: {
    google: "1q8Om_MrxenH3-Di3OiP7ds3Bi7wmVsS8gGb6Og_wgw",
  },
  other: {
    "google-adsense-account": "ca-pub-4314810893346292",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4314810893346292"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                © 2026 InterviewGuru AI | Made in India 🇮🇳
              </div>
            </div>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-C3D0W30EJH" />
    </html>
  );
}