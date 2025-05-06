'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/languageContext';

export default function LanguageSwitch() {
  const { locale, changeLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isEnglish = locale === 'en';

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = isMobile ? 62 : 78;
  const height = isMobile ? 28 : 36;
  const circleSize = height - 9;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex items-center justify-center my-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="relative inline-flex items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none shadow-md hover:shadow-lg"
            style={{ width, height }}
            onClick={() => changeLanguage(isEnglish ? 'es' : 'en')}
            aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
          >
            {/* Fondo del switch */}
            <div
              className="w-full h-full rounded-full border-[1px] p-1 bg-graylight/30 dark:bg-light/30 border-lightviolet dark:border-lightyel transition-colors duration-300"
            />

            {/* Toggle */}
            <motion.div
              className="absolute top-0.5 left-0.5 rounded-full shadow-md flex items-center justify-center
                         bg-gradient-to-br from-lightviolet/40 to-violet dark:from-graylight dark:to-dark"
              style={{ width: circleSize, height: circleSize }}
              animate={{
                x: isEnglish ? 2 : width - height,
                y: 2,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            >
              <span className="font-suse text-[14px] text-white dark:text-yel">
                {isEnglish ? 'En' : 'Es'}
              </span>
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
