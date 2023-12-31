import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`max-w-3xl mx-auto px-6 lg:max-w-6xl lg:px-8 flex flex-col antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
