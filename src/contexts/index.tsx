'use client';

import React from 'react';

import { ThemeProvider } from './theme.context';

export * from './theme.context';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
