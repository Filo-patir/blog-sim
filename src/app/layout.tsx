import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import React from 'react';

import Navbar from '../components/navbar';
import { ThemeProvider } from '../contexts/theme.context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Blog Simulator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-base-100 antialiased dark:text-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex min-h-screen flex-col items-center justify-start gap-12 mx-auto pt-20 max-w-screen-xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
