'use client';

import {
  MdLightMode as Dark,
  MdOutlineLightMode as Light,
} from 'react-icons/md';
import { useState, useEffect } from 'react';

export default function LightMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log(`Currently in dark mode ${darkMode}`);
  }, [darkMode]);

  return darkMode ? (
    <Light onClick={toggleMode} />
  ) : (
    <Dark onClick={toggleMode} />
  );
}
