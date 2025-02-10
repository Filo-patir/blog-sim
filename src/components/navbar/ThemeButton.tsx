'use client';

import React from 'react';
import { motion } from 'motion/react';

import { useTheme } from '@/contexts';

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  console.log(`justify-${theme ? 'start' : 'end'}`);
  return (
    <>
      <button
        className={`bg-slate-600 w-14 h-8 rounded-full flex items-center justify-${theme ? 'start' : 'end'}`}
        onClick={() => {
          toggleTheme();
        }}
      >
        <motion.div
          className="w-5 h-5 bg-white rounded-full"
          layout
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
    </>
  );
}
