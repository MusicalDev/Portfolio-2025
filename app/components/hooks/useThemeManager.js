// // hooks/useThemeManager.js
// import { useState, useEffect, useCallback } from 'react';

// export default function useThemeManager() {
//   const [theme, setTheme] = useState('light');
//   const [isInitialized, setIsInitialized] = useState(false);

//   const toggleTheme = useCallback((newTheme) => {
//     setTheme((prevTheme) => {
//       const themeToSet = newTheme || (prevTheme === 'light' ? 'dark' : 'light');
//       localStorage.setItem('theme', themeToSet);
//       return themeToSet;
//     });
//   }, []);

//   // Init theme from localStorage or system
//   useEffect(() => {
//     if (isInitialized) return;

//     const storedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

//     setTheme(initialTheme);
//     localStorage.setItem('theme', initialTheme);
//     setIsInitialized(true);

//     setTimeout(() => {
//       document.documentElement.classList.add('theme-transition');
//     }, 200);
//   }, [isInitialized]);

//   // Apply theme styles
//   useEffect(() => {
//     if (!isInitialized) return;

//     requestAnimationFrame(() => {
//       const root = document.documentElement;
//       if (theme === 'dark') {
//         root.classList.add('dark');
//         root.style.colorScheme = 'dark';
//       } else {
//         root.classList.remove('dark');
//         root.style.colorScheme = 'light';
//       }
//     });
//   }, [theme, isInitialized]);

//   return { theme, toggleTheme };
// }

// import { useState, useEffect, useCallback } from 'react';

// export default function useThemeManager() {
//   // Usamos una función para inicializar el estado, para evitar discrepancias entre servidor y cliente
//   const [theme, setTheme] = useState(() => {
//     // Solo accedemos a localStorage en el cliente
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('theme') || 
//         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
//     }
//     return 'light'; // Valor por defecto para SSR
//   });
  
//   const toggleTheme = useCallback((newTheme) => {
//     setTheme((prevTheme) => {
//       const themeToSet = newTheme || (prevTheme === 'light' ? 'dark' : 'light');
//       localStorage.setItem('theme', themeToSet);
//       return themeToSet;
//     });
//   }, []);

//   // Efecto para aplicar el tema cuando cambia
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const root = document.documentElement;
      
//       if (theme === 'dark') {
//         root.classList.add('dark');
//         root.style.colorScheme = 'dark';
//       } else {
//         root.classList.remove('dark');
//         root.style.colorScheme = 'light';
//       }
//     }
//   }, [theme]);

//   // Añadir transición después de la carga inicial
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setTimeout(() => {
//         document.documentElement.classList.add('theme-transition');
//       }, 200);
//     }
//   }, []);

//   return { theme, toggleTheme };
// }

// //este si va
// import { useState, useEffect, useCallback } from 'react';

// export default function useThemeManager() {
//   // Inicialización segura del estado para evitar discrepancias entre servidor y cliente
//   const [theme, setTheme] = useState(() => {
//     // Solo accedemos a localStorage en el cliente
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem('theme');
//       if (savedTheme) {
//         return savedTheme;
//       }
//       // Verificar preferencia del sistema si no hay tema guardado
//       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     }
//     return 'light'; // Valor por defecto para SSR
//   });
  
//   // Función para cambiar el tema
//   const toggleTheme = useCallback((newTheme) => {
//     setTheme((prevTheme) => {
//       const themeToSet = newTheme || (prevTheme === 'light' ? 'dark' : 'light');
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('theme', themeToSet);
//       }
//       return themeToSet;
//     });
//   }, []);

//   // Efecto para aplicar el tema cuando cambia
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       requestAnimationFrame(() => {
//         const root = document.documentElement;
        
//         if (theme === 'dark') {
//           root.classList.add('dark');
//           root.style.colorScheme = 'dark';
//         } else {
//           root.classList.remove('dark');
//           root.style.colorScheme = 'light';
//         }
//       });
//     }
//   }, [theme]);

//   // Añadir transición después de la carga inicial
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const timer = setTimeout(() => {
//         document.documentElement.classList.add('theme-transition');
//       }, 200);
      
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return { theme, toggleTheme };
// }


// import { useState, useEffect, useCallback } from 'react';

// export default function useThemeManager() {
//   const [theme, setTheme] = useState(null); // null para que sepa que aún no está listo

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem('theme');
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

//       setTheme(initialTheme);

//       // Aplicar inmediatamente el tema
//       const root = document.documentElement;
//       if (initialTheme === 'dark') {
//         root.classList.add('dark');
//         root.style.colorScheme = 'dark';
//       } else {
//         root.classList.remove('dark');
//         root.style.colorScheme = 'light';
//       }
//     }
//   }, []);

//   const toggleTheme = useCallback((newTheme) => {
//     setTheme((prevTheme) => {
//       const themeToSet = newTheme || (prevTheme === 'light' ? 'dark' : 'light');
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('theme', themeToSet);
//         const root = document.documentElement;
//         if (themeToSet === 'dark') {
//           root.classList.add('dark');
//           root.style.colorScheme = 'dark';
//         } else {
//           root.classList.remove('dark');
//           root.style.colorScheme = 'light';
//         }
//       }
//       return themeToSet;
//     });
//   }, []);

//   return { theme, toggleTheme };
// }

import { useState, useEffect, useCallback } from 'react';

export default function useThemeManager() {
  const [theme, setTheme] = useState(); // null para que sepa que aún no está listo

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Obtener el tema guardado en localStorage o las preferencias del sistema
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

      setTheme(initialTheme);

      // Aplicar inmediatamente el tema
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

