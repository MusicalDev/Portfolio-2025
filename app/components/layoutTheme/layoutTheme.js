// 'use client'
// import React from 'react';
// import { useTheme } from '../themeContext/themeContext'; 

// const ThemeAwareLayout = ({ children }) => {
//     const { theme } = useTheme();
//     return (
//         <div 
//       className={`min-h-screen transition-all duration-300 ease-in-out ${
//         theme === 'light' 
//           ? 'bg-custom-background-light' 
//           : 'bg-custom-background-dark'
//       }`}
//     >
//       {children}
//     </div>
//     );
// };

// export default ThemeAwareLayout;





// "use client";

// import { useTheme } from '../themeContext/themeContext';

// export default function ThemeAwareLayout({ children }) {
//   const { theme, mounted } = useTheme();
  
//   // Prevent hydration mismatch by not rendering theme-dependent content until mounted
//   if (!mounted) {
//     return <div className="min-h-screen bg-custom-background-light transition-all duration-300 ease-in-out">{children}</div>;
//   }
  
//   return (
//     <div className={`min-h-screen transition-all duration-300 ease-in-out ${
//       theme === 'dark' ? 'bg-custom-background-dark' : 'bg-custom-background-light'
//     }`}>
//       {children}
//     </div>
//   );
// }

// 'use client'

// import React from 'react';
// import { useTheme } from '../themeContext/themeContext';

// const ThemeAwareLayout = ({ children }) => {
//   const { theme } = useTheme();
  
//   return (
//     <div
//       className={`min-h-screen transition-all duration-300 ease-in-out ${
//         theme === 'light'
//           ? 'bg-custom-background-light'
//           : 'bg-custom-background-dark'
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default ThemeAwareLayout;

'use client'

import React from 'react';
import { useTheme } from '../themeContext/themeContext';

const ThemeAwareLayout = ({ children }) => {
  const { theme } = useTheme();

  if (theme === null) {
    return null; // o un loader si prefieres
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ease-in-out ${
        theme === 'light'
          ? 'bg-custom-background-light'
          : 'bg-custom-background-dark'
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeAwareLayout;
