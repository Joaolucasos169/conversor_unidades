import React from 'react';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import UnitConverter from '@/components/UnitConverter';

export default function App() {
  return (
    <ThemeProvider>
      <UnitConverter />
    </ThemeProvider>
  );
}