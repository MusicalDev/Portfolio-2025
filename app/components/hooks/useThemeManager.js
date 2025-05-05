import { useState, useEffect, useCallback } from 'react';

export default function useThemeManager() {
  const [theme, setTheme] = useState(); // null para que sepa que aún no está listo

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

      setTheme(initialTheme);

      const root = document.documentElement;
      if (initialTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    }
  }, []);

  const toggleTheme = useCallback((newTheme) => {
    setTheme((prevTheme) => {
      const themeToSet = newTheme || (prevTheme === 'light' ? 'dark' : 'light');
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', themeToSet);
        const root = document.documentElement;
        if (themeToSet === 'dark') {
          root.classList.add('dark');
          root.style.colorScheme = 'dark';
        } else {
          root.classList.remove('dark');
          root.style.colorScheme = 'light';
        }
      }
      return themeToSet;
    });
  }, []);

  return { theme, toggleTheme };
}

