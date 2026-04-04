import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
      <GoogleAnalytics gaId="G-C3D0W30EJH" />
    </html>
  );
}