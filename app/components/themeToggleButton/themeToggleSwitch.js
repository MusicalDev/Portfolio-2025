// // components/ThemeToggleButton.js
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import useThemeManager from '@/app/[locale]/components/hooks/useThemeManager';

// export default function ThemeToggleButton({ isMobile }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const { theme, toggleTheme } = useThemeManager();
  
//   const handleToggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     toggleTheme(newTheme);
//   };

//   return (
//     <div
//       className={`cursor-pointer rounded-[25px] backdrop-blur-xl overflow-hidden font-handjet font-700 tracking-widest text-xl md:text-[18px]
//         ${isMobile ? 'w-[70px] h-[35px]' : 'w-[100px] h-[40px]'}
//         transition-all duration-500 ease-in-out bg-transparent ml-2`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleToggleTheme}
//     >
//       <motion.div
//         className="relative w-full h-full"
//         animate={{ 
//           top: "0%",
//           backgroundColor: theme === 'light' ? 'rgba(255, 236, 179, 0.9)' : 'rgba(51, 51, 51, 0.9)'
//         }}
//         transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
//       >
//         <div className="w-full h-full bg-gradient-to-br from-lightyel to-red dark:bg-gradient-to-br dark:from-graylight dark:to-gray border-none">
//           <PerspectiveText 
//             label={theme === 'light' ? 'Dark' : 'Light'} 
//             isHovered={isHovered} 
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function PerspectiveText({ label, isHovered }) {
//   return (
//     <div
//       className="flex flex-col justify-center bg-transparent items-center h-full w-full transform-gpu transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-dark dark:text-lightyel"
//       style={{
//         transformStyle: 'preserve-3d',
//         transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0deg)'
//       }}
//     >
//       <p
//         className={`uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? 'opacity-0 -translate-y-full' : ''
//           }`}
//       >
//         {label}
//       </p>
//       <p
//         className={`uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${isHovered ? 'opacity-100 text-lightyel dark:text-yel' : 'opacity-0'
//           }`}
//         style={{
//           transformOrigin: 'bottom center',
//           transform: 'rotateX(-90deg) translateY(13px)'
//         }}
//       >
//         {label}
//       </p>
//     </div>
//   );
// }



// // components/ThemeToggleSwitch.js
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import useThemeManager from '@/app/[locale]/components/hooks/useThemeManager';

// export default function ThemeToggleSwitch({ isMobile }) {
//   const { theme, toggleTheme } = useThemeManager();
//   const isDark = theme === 'dark';
  
//   const handleToggleTheme = () => {
//     const newTheme = isDark ? 'light' : 'dark';
//     toggleTheme(newTheme);
//   };

//   // Tamaño adaptado según si es móvil o no
//   const width = isMobile ? 48 : 56;
//   const height = isMobile ? 24 : 28;

//   return (
//     <div className="flex items-center justify-center my-3">
//       {/* Icono Sol */}
//       <svg 
//         className={`w-5 h-5 mr-2 ${isDark ? 'text-gray-400' : 'text-amber-400'}`} 
//         xmlns="http://www.w3.org/2000/svg" 
//         fill="none" 
//         viewBox="0 0 24 24" 
//         stroke="currentColor"
//       >
//         <circle cx="12" cy="12" r="5" stroke="none" fill="currentColor" />
//         <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
//         <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
//         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
//         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
//         <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
//         <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
//         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
//         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
//       </svg>
      
//       {/* Switch */}
//       <button
//         className={`relative inline-flex items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none`}
//         style={{ width: `${width}px`, height: `${height}px` }}
//         onClick={handleToggleTheme}
//         aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
//       >
//         <div
//           className={`w-full h-full rounded-full transition-colors duration-300 ${
//             isDark ? 'bg-graylight' : 'bg-lightyel'
//           }`}
//         ></div>
//         <motion.div
//           className={`absolute top-0.5 left-0.5 bg-gradient-to-br 
//             ${isDark ? 'from-gray to-dark' : 'from-amber-300 to-red'} 
//             rounded-full shadow-md`}
//           style={{ width: `${height - 4}px`, height: `${height - 4}px` }}
//           animate={{
//             x: isDark ? width - height : 0
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 500,
//             damping: 30
//           }}
//         />
//       </button>
      
//       {/* Icono Luna */}
//       <svg 
//         className={`w-4 h-4 ml-2 ${isDark ? 'text-yel' : 'text-gray-400'}`} 
//         xmlns="http://www.w3.org/2000/svg" 
//         fill="none" 
//         viewBox="0 0 24 24" 
//         stroke="currentColor"
//       >
//         <path 
//           strokeLinecap="round" 
//           strokeLinejoin="round" 
//           strokeWidth={2} 
//           d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
//           fill="currentColor"
//         />
//       </svg>
//     </div>
//   );
// }

// components/ThemeToggleSwitch.js
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
// Import useTheme from your ThemeContext instead of directly using useThemeManager
import { useTheme } from '../themeContext/themeContext'; // Update with the correct path

export default function ThemeToggleSwitch({ isMobile }) {
  // Use the context hook instead of directly importing useThemeManager
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para retrasar la aparición del switch
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Retraso de 1.5 segundos
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleToggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    toggleTheme(newTheme);
  };

  // Tamaño adaptado según si es móvil o no
  // const width = isMobile ? 50 : 60;
  // const height = isMobile ? 26 : 30;
  // const circleSize = height - 4;

  const width = isMobile ? 66 : 78; // Un poco más ancho para acomodar texto
  const height = isMobile ? 32 : 36;
  const circleSize = height - 9;

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.div 
          className="flex items-center justify-center my-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
    
      <button
        className={`relative inline-flex items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none shadow-md hover:shadow-lg`}
        style={{ width: `${width}px`, height: `${height}px` }}
        onClick={handleToggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div
          className={`w-full h-full rounded-full border-[1px] p-1 transition-colors duration-300 ${
            isDark ? 'bg-light/30 border-lightyel' : 'bg-graylight/40 border-lightviolet'
          }`}
        ></div>
        <motion.div
          className={`absolute top-0.5 left-0.5 bg-gradient-to-br flex items-center justify-center
            ${isDark ? 'from-gray to-dark' : 'from-lightviolet to-violet'} 
            rounded-full shadow-md`}
          style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
          animate={{
            x: isDark ? width - height : 2,
            y: isDark ? 2 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          {/* Sol o Luna dentro del círculo */}
          {isDark ? (
            // Luna
            <svg 
              className="w-3/5 h-3/5 text-lightyel" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          ) : (
            // Sol
            <svg 
              className="w-3/5 h-3/5 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          )}
        </motion.div>
      </button>
      </motion.div>
      )}
    </AnimatePresence>
  );
}