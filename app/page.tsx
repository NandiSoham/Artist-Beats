'use client';

import React, { useState } from 'react';
import StatsCard from '@/app/components/StatsCard';
import AllSongsView from '@/app/components/AllSongs';
import AccountingTab from '@/app/components/Accounting';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  // Empty data for the chart since the user has no songs yet
  const data = [
    { name: 'Jan', earnings: 0 },
    { name: 'Feb', earnings: 0 },
    { name: 'Mar', earnings: 0 },
    { name: 'Apr', earnings: 0 },
    { name: 'May', earnings: 0 },
    { name: 'Jun', earnings: 0 },
    { name: 'Jul', earnings: 0 },
    { name: 'Aug', earnings: 0 },
    { name: 'Sep', earnings: 0 },
    { name: 'Oct', earnings: 0 },
    { name: 'Nov', earnings: 0 },
    { name: 'Dec', earnings: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-black dark:text-white">Your Music</h1>
            <p className="text-black/70 dark:text-white/60">Welcome back, user. Here&apos;s an overview of your songs administered by ArtistBeat.</p>
          </div>
          <button className="bg-white dark:bg-black hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border border-black/20 dark:border-white/20 shadow-lg flex items-center gap-2 hover:scale-[1.02]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Submit New Song
          </button>
        </div>

        <div className="flex space-x-2 mb-8">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'overview'
              ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
              : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'allSongs'
              ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
              : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            onClick={() => setActiveTab('allSongs')}
          >
            All Songs
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'accounting'
              ? 'bg-black/10 dark:bg-white/10 text-black dark:text-white'
              : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            onClick={() => setActiveTab('accounting')}
          >
            Accounting
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatsCard
              title="Total Songs Submitted"
              value="0"
              subtitle="All songs administered by ArtistBeat"
              infoIcon={true}
            />
            <StatsCard
              title="Master Earnings"
              value="$0.00"
              subtitle="Revenue from master recordings"
              infoIcon={true}
            />
            <StatsCard
              title="Publishing Earnings"
              value="$0.00"
              subtitle="Revenue from publishing rights"
              infoIcon={true}
            />
            <StatsCard
              title="Total Earnings"
              value="$0.00"
              subtitle="Combined revenue"
              infoIcon={true}
            />
          </div>

          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-xl font-bold mb-1 text-black dark:text-white">Earnings Overview</h2>
            <p className="text-sm text-black/70 dark:text-white/60 mb-6">A visual representation of earnings by song</p>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" className="dark:stroke-[rgba(255,255,255,0.1)]" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: 'rgba(0,0,0,0.6)' }}
                    axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
                    tickLine={{ stroke: 'rgba(0,0,0,0.1)' }}
                    className="dark:[&_.recharts-cartesian-axis-tick-value]:fill-[rgba(255,255,255,0.8)] dark:[&_.recharts-cartesian-axis-line]:stroke-[rgba(255,255,255,0.2)] dark:[&_.recharts-cartesian-axis-tick-line]:stroke-[rgba(255,255,255,0.2)]"
                  />
                  <YAxis
                    tick={{ fill: 'rgba(0,0,0,0.6)' }}
                    axisLine={{ stroke: 'rgba(0,0,0,0.1)' }}
                    tickLine={{ stroke: 'rgba(0,0,0,0.1)' }}
                    className="dark:[&_.recharts-cartesian-axis-tick-value]:fill-[rgba(255,255,255,0.8)] dark:[&_.recharts-cartesian-axis-line]:stroke-[rgba(255,255,255,0.2)] dark:[&_.recharts-cartesian-axis-tick-line]:stroke-[rgba(255,255,255,0.2)]"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      border: '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      color: '#000',
                    }}
                    className="dark:[&_.recharts-tooltip-wrapper]:!bg-black/90 dark:[&_.recharts-tooltip-wrapper]:!text-white dark:[&_.recharts-tooltip-wrapper]:!border-white/20"
                  />
                  <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#000000"
                    activeDot={{ r: 8, fill: '#000000' }}
                    strokeWidth={2}
                    className="dark:!stroke-white dark:[&_.recharts-line-dots]:!fill-white"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}

      {activeTab === 'allSongs' && <AllSongsView />}

      {activeTab === 'accounting' && <AccountingTab />}
    </div>
  );
}