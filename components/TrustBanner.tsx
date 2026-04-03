import React from 'react';

const TrustBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 p-6 text-center">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-2 text-sm font-medium">
          <span>✅</span>
          <span>Bilkul Free</span>
        </div>
        <div className="flex items-center space-x-2 text-sm font-medium">
          <span>🤖</span>
          <span>AI-Powered Feedback</span>
        </div>
        <div className="flex items-center space-x-2 text-sm font-medium">
          <span>🏆</span>
          <span>Govt + Private Both</span>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;