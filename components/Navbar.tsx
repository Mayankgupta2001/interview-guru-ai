import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold" style={{ color: '#0d47a1' }}>InterviewGuru AI 🎯</h1>

        <div className="hidden md:flex items-center gap-4">
          <a href="/evaluate" className="text-sm font-semibold text-blue-800 hover:text-blue-900">
            Evaluate
          </a>
          <div className="text-sm px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#f57f17', color: 'white' }}>
            Free Tool 🇮🇳
          </div>
        </div>
        <div className="md:hidden">
          <div className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#f57f17', color: 'white' }}>
            Free 🇮🇳
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;