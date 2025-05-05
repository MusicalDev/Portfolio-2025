'use client'

import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'
import RandomGif from '../randomGif/page'
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import useThemeManager from '@/app/components/hooks/useThemeManager';

const ThemeContext = createContext();

const menu = {
  open: {
    width: "600px",
    height: "550px",
    transition: { duration: 0.65, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "170px",
    height: "40px",
    transition: { duration: 0.65, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const contentFade = {
  hidden: { opacity: 0, transition: { duration: 0.2 } },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
};

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useThemeManager();
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)


export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [gifKey, setGifKey] = useState({ light: 0, dark: 0 });
  const t = useTranslations();


  const currentThemeRef = React.useRef(theme);
  currentThemeRef.current = theme;


  const closeMenu = useCallback(() => {
    setIsClosing(true);
    setShowContent(false);
    setTimeout(() => {
      setIsActive(false);
    }, 200);
  }, []);


  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isActive) {
        closeMenu();
      }
    };

    if (isActive) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isActive, closeMenu]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  const handleAnimationComplete = (definition) => {
    if (definition === "open") {
      setShowContent(true);
    } else if (definition === "closed") {
      setIsClosing(false);
    }
  };

  // Función para actualizar el GIF
  const updateGif = useCallback((themeType) => {
    if (themeType === currentThemeRef.current) {
      setGifKey(prev => ({
        ...prev,
        [themeType]: prev[themeType] + 1
      }));
    }
  }, []);

  // Manejador para cambio de tema
  const handleThemeChange = useCallback((newTheme) => {
    if (theme !== newTheme) {
      // Primero actualiza el GIF
      setGifKey(prev => ({
        ...prev,
        [newTheme]: prev[newTheme] + 1
      }));

      // Usa requestAnimationFrame para retrasar el cambio de tema
      requestAnimationFrame(() => {
        toggleTheme(newTheme);
      });
    } else {
      // Si el tema es el mismo, solo actualiza el GIF
      updateGif(newTheme);
    }
  }, [theme, toggleTheme, updateGif]);

  return (
    <>
      <ButtonTheme isActive={isActive} onToggle={() => setIsActive(!isActive)} />
      <AnimatePresence>
        {(isActive || isClosing) && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center"
            style={{
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)'
            }}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={handleBackdropClick}
          >
            <motion.div
              className="bg-graylight/45 backdrop-blur-lg w-full h-full rounded-[24px] z-50 overflow-hidden"
              variants={menu}
              animate={isClosing ? "closed" : "open"}
              initial="closed"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              onAnimationComplete={handleAnimationComplete}
            >
              <AnimatePresence>
                {showContent && !isClosing && (
                  <motion.div
                    className="p-0"
                    variants={contentFade}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="flex flex-col w-auto h-[550px] items-center p-2 rounded-[25px] shadow-lg justify-center">
                      <h2 className="text-4xl font-handjet mb-4 text-lightyel dark:text-yel font-400"> {t('Header.buttonTheme.select')}</h2>

                      <div className="flex flex-row justify-center items-center font-handjet font-600 text-xl w-auto h-auto">
                        <div className='flex flex-col items-center justify-center w-full h-full'>
                          <div className="w-auto h-auto relative object-cover">
                            <RandomGif theme="light" key={`light-${gifKey.light}`} />
                          </div>
                          <button
                            onClick={() => handleThemeChange('light')}
                            className="px-4 py-2 bg-dark text-light font-500 rounded-lg hover:bg-black hover:text-yel dark:hover:text-lightgreen dark:hover:bg-black hover:scale-105 transition duration-500 mt-4 w-auto"
                          >
                            {t('Header.buttonTheme.light')}
                          </button>
                        </div>

                        <div className='flex flex-col items-center justify-center w-full h-full'>
                          <div className="w-auto h-auto relative object-cover">
                            <RandomGif theme="dark" key={`dark-${gifKey.dark}`} />
                          </div>
                          <button
                            onClick={() => handleThemeChange('dark')}
                            className="px-4 py-2 bg-dark text-light font-500 hover:bg-black hover:text-yel dark:hover:text-lightgreen rounded-lg hover:scale-105 transition duration-500 mt-4 w-auto"
                          >
                            {t('Header.buttonTheme.dark')}
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={closeMenu}
                        className="mt-8 px-4 py-1 rounded-lg text-light dark:text-yel bg-dark hover:bg-black hover:text-lightred dark:hover:text-red hover:scale-105 transition duration-500 font-handjet font-500 text-2xl"
                      >
                        {t('Header.buttonTheme.close')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Componente para el botón de tema
function ButtonTheme({ isActive, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const t = useTranslations('Header.buttonTheme');

  const textColor = theme === 'light' ? 'text-dark' : 'text-light';
  const textColorHover = theme === 'light' ? 'text-violet' : 'text-yel';

  return (
    <div
      className="flex top-[0px] w-[170px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden font-handjet font-700 text-xl z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full">
          <PerspectiveText label={t('Header.buttonTheme.choose')} textColor={textColor} textColor2={textColorHover} isHovered={isHovered} />
        </div>
        <div className="w-full h-full">
          <PerspectiveText label={t('Header.buttonTheme.close')} textColor={textColor} textColor2={textColorHover} isHovered={isHovered} />
        </div>
      </motion.div>
    </div>
  )
}

// Componente para el texto con efecto de perspectiva
function PerspectiveText({ label, textColor = "text-dark", textColor2 = "text-violet", isHovered }) {
  return (
    <div
      className="flex flex-col p-1 justify-center items-center h-full w-full transform-gpu transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0deg)'
      }}
    >
      <p
        className={`${textColor} pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? 'opacity-0 -translate-y-full' : ''}`}
      >
        {label}
      </p>
      <p
        className={`${textColor2} pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transformOrigin: 'bottom center',
          transform: 'rotateX(-90deg) translateY(13px)'
        }}
      >
        {label}
      </p>
    </div>
  )
}