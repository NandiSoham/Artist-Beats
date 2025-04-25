import React from 'react';

const AccountingTab = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center mb-2">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400 mr-2"
        >
          <path
            d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="text-xl font-bold">Song Earnings</h2>
      </div>
      <p className="text-sm text-gray-400 mb-8">
        Track your publishing shares and master percentage earnings. Click on column headers to sort.
      </p>

      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-gray-400 mb-6">You haven&apos;t submitted any songs yet.</p>
        <button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-md text-sm font-medium">
          Submit Your First Song
        </button>
      </div>
    </div>
  );
};

export default AccountingTab;