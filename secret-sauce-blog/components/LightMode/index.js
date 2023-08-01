'use client';

import {
  MdLightMode as Dark,
  MdOutlineLightMode as Light,
} from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function LightMode() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'light' ? (
        <Dark size='2rem' className='cursor-pointer' />
      ) : (
        <Light size='2rem' className='cursor-pointer' />
      )}
    </button>
  );
}
