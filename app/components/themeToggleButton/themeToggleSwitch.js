
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../themeContext/themeContext';

export default function ThemeToggleSwitch({ isMobile }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

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

  const width = isMobile ? 66 : 78;
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
              className={`w-full h-full rounded-full border-[1px] p-1 transition-colors duration-300 ${isDark ? 'bg-light/30 border-lightyel' : 'bg-graylight/40 border-lightviolet'
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