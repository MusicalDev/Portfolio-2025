// 'use client';

// export function ThemeScript() {
//   const script = `
//     (function () {
//       try {
//         var theme = localStorage.getItem('theme');
//         var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         var useDark = theme === 'dark' || (!theme && prefersDark);
//         var root = document.documentElement;
//         if (useDark) {
//           root.classList.add('dark');
//           root.style.colorScheme = 'dark';
//         } else {
//           root.classList.remove('dark');
//           root.style.colorScheme = 'light';
//         }
//       } catch (e) {}
//     })();
//   `;
//   return <script dangerouslySetInnerHTML={{ __html: script }} />;


'use client';

import { useEffect } from 'react';

export function ThemeScript() {
  useEffect(() => {
    try {
      var theme = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var useDark = theme === 'dark' || (!theme && prefersDark);
      var root = document.documentElement;

      if (useDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    } catch (e) {
      console.error("Error al establecer el tema", e);
    }
  }, []);

  return null; // No necesitas retornar un elemento, solo el efecto
}
