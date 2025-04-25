import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/app/components/Navbar';
import { ThemeProvider } from '@/app/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ArtistBeat',
  description: 'Music distribution platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-300`}>
        <ThemeProvider>
          <NavBar />
          <main className="container mx-auto px-4 py-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}