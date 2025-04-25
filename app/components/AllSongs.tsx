import React from 'react';

const AllSongsView = () => {
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
            d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-xl font-bold">All Your Songs</h2>
      </div>
      <p className="text-sm text-gray-400 mb-8">
        Complete list of all your submitted songs. Click on column headers to sort.
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

export default AllSongsView;