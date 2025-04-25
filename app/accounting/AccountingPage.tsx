'use client';

import React from 'react';

const AccountingPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-8">
        <div className="flex items-center mb-2">
          <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
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
          </div>
          <h2 className="text-xl font-bold ml-3 text-white">Song Earnings</h2>
        </div>
        <p className="text-sm text-white/50 mb-8">
          Track your publishing shares and master percentage earnings. Click on column headers to sort.
        </p>

        <div className="flex flex-col items-center justify-center py-16">
          <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 w-full max-w-md text-center shadow-lg">
            <div className="mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto text-white/30"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-white/50 mb-6">You haven&apos;t submitted any songs yet.</p>
            <button className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
              Submit Your First Song
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingPage;