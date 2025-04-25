'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl text-black dark:text-white flex items-center">
            <span className="uppercase tracking-wider">ARTIST<span className="font-normal">BEAT</span></span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors duration-200 ${pathname === '/'
              ? 'text-black dark:text-white'
              : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }`}
          >
            My Music
          </Link>
          <Link
            href="/accounting"
            className={`text-sm font-medium transition-colors duration-200 ${pathname === '/accounting'
              ? 'text-black dark:text-white'
              : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }`}
          >
            Accounting
          </Link>
          <Link
            href="/help"
            className={`text-sm font-medium transition-colors duration-200 ${pathname === '/help'
              ? 'text-black dark:text-white'
              : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }`}
          >
            Help
          </Link>
          <div className="border-l border-black/10 dark:border-white/10 h-6 mx-2"></div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-white">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <Link
            href="/logout"
            className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-sm font-medium transition-colors duration-200"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;