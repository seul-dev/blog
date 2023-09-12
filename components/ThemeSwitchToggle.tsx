'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitchToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle Dark Mode'
    >
      {mounted && theme === 'dark' ? '🌞' : '🌚'}
    </button>
  );
}
