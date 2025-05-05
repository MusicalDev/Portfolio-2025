'use client'

import React from 'react';
import { useTheme } from '../themeContext/themeContext';

const ThemeAwareLayout = ({ children }) => {
  const { theme } = useTheme();

  if (theme === null) {
    return null; 
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ease-in-out ${theme === 'light'
          ? 'bg-custom-background-light'
          : 'bg-custom-background-dark'
        }`}
    >
      {children}
    </div>
  );
};

export default ThemeAwareLayout;
