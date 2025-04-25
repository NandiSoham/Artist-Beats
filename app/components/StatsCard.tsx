import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  infoIcon?: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, infoIcon = false }) => {
  return (
    <div className="relative group">
      {/* Dotted border overlay */}
      <div className="absolute inset-0 rounded-lg border border-dashed border-black/20 dark:border-white/20 -m-1"></div>

      {/* Main card */}
      <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-black/10 dark:border-white/10 w-full transition-all duration-300 group-hover:bg-black/[0.07] dark:group-hover:bg-white/[0.07]">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm text-black/60 dark:text-white/60">{title}</h3>
          {infoIcon && (
            <div className="text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 transition-colors duration-200 cursor-help">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
        <div className="mb-1">
          <span className="text-3xl font-bold text-black dark:text-white">{value}</span>
        </div>
        <p className="text-xs text-black/60 dark:text-white/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatsCard;