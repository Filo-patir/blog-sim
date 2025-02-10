'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ThemeProps = {
  theme: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    localStorage.theme = theme ? 'light' : 'dark';
    setTheme(!theme);
  };
  useEffect(() => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' || (!('theme' in localStorage) && theme),
    );
    setTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
