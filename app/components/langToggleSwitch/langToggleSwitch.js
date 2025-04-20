// // components/LangToggleSwitch.js
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter, usePathname } from 'next/navigation';
// // import { useLocale } from 'next-intl';

// export default function LangToggleSwitch({ isMobile }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const locale = useLocale();
//     const [isVisible, setIsVisible] = useState(false);

//     const isEnglish = locale === 'en';

//     // Efecto para retrasar la aparición del switch
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(true);
//         }, 1000); // Ligeramente más retrasado que el switch de tema

//         return () => clearTimeout(timer);
//     }, []);

//     const switchLocale = (newLocale) => {
//         const newPath = `/${newLocale}${pathname.substring(3)}`;
//         router.push(newPath, { scroll: false }); // Esto evita el scroll automático al top
//     };
    

//     // Tamaños del switch
//     const width = isMobile ? 66 : 78; // Un poco más ancho para acomodar texto
//     const height = isMobile ? 32 : 36;
//     const toggleSize = height - 9;

//     return (
//         <AnimatePresence>
//             {isVisible && (
//                 <motion.div
//                     className="flex items-center justify-center my-3"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     {/* Switch */}
//                     <button
//                         className={`relative inline-flex items-center justify-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none shadow-md hover:shadow-lg border-[1px] border-lightviolet`}
//                         style={{
//                             width: `${width}px`,
//                             height: `${height}px`,
//                             padding: '0px',
//                         }}
//                         onClick={() => switchLocale(isEnglish ? 'es' : 'en')}
//                         aria-label={isEnglish ? "Cambiar a español" : "Switch to English"}
//                     >
//                         {/* Fondo del switch */}
//                         <div
//                             className={`w-full h-full rounded-full transition-colors duration-300 ${isEnglish ? 'bg-graylight/30 dark:bg-light/30' : 'bg-graylight/30 dark:bg-light/30'
//                                 }`}
//                         >
//                             {/* Texto En */}
//                             {/* <span 
//                 className={`absolute font-handjet font-bold text-sm z-10 transition-opacity duration-300 ${
//                   isEnglish ? 'opacity-40 right-3' : 'opacity-100 right-3.5'
//                 }`}
//                 style={{
//                   top: '50%',
//                   transform: 'translateY(-50%)'
//                 }}
//               >
//                 En
//               </span>
              
            
//               <span 
//                 className={`absolute font-handjet font-bold text-sm z-10 transition-opacity duration-300 ${
//                   !isEnglish ? 'opacity-40 left-3' : 'opacity-100 left-3.5'
//                 }`}
//                 style={{
//                   top: '50%',
//                   transform: 'translateY(-50%)'
//                 }}
//               >
//                 Es
//               </span> */}
//                         </div>

//                         {/* Botón deslizante */}
//                         <motion.div
//                             className={`absolute bg-gradient-to-br flex items-center justify-center
//                 ${isEnglish ? 'from-lightviolet/40 to-violet dark:from-graylight dark:to-dark' : 'from-lightviolet/40 to-violet dark:from-graylight dark:to-dark'} 
//                 rounded-full shadow-md`}
//                             style={{
//                                 width: `${toggleSize}px`,
//                                 height: `${toggleSize}px`,
//                                 top: `${(height - toggleSize) / 3}px`,
//                                 left: `${(height - toggleSize) / 3}px`
//                             }}
//                             animate={{
//                                 x: isEnglish ? 0 : width - height
//                             }}
//                             transition={{
//                                 type: "spring",
//                                 stiffness: 500,
//                                 damping: 30
//                             }}
//                         >
//                             {/* Icono de bandera o símbolo que represente el idioma */}
//                             <span className="font-handjet font-bold text-[18px] text-dark dark:text-yel">
//                                 {isEnglish ? 'en' : 'es'}
//                             </span>
//                         </motion.div>
//                     </button>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );
// }




// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLanguage } from '../../../context/languageContext';

// export default function MobileLanguageSwitch() {
//   const { locale, changeLanguage } = useLanguage();
//   const [isVisible, setIsVisible] = useState(false);
//   const isEnglish = locale === 'en';

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const width = 66;
//   const height = 32;
//   const toggleSize = height - 9;

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="flex items-center justify-center my-2"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.5 }}
//         >
//           <button
//             className="relative inline-flex items-center justify-center rounded-full border-[1px] border-lightviolet shadow-md hover:shadow-lg transition-colors duration-300"
//             style={{ width, height }}
//             onClick={() => changeLanguage(isEnglish ? 'es' : 'en')}
//             aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'}
//           >
//             {/* Fondo del switch */}
//             <div className="w-full h-full rounded-full bg-graylight/30 dark:bg-light/30" />

//             {/* Botón deslizante */}
//             <motion.div
//               className="absolute bg-gradient-to-br from-lightviolet/40 to-violet dark:from-graylight dark:to-dark rounded-full shadow-md flex items-center justify-center"
//               style={{
//                 width: toggleSize,
//                 height: toggleSize,
//                 top: `${(height - toggleSize) / 3}px`,
//                 left: `${(height - toggleSize) / 3}px`,
//               }}
//               animate={{ x: isEnglish ? 0 : width - height }}
//               transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//             >
//               <span className="font-handjet font-bold text-[18px] text-dark dark:text-yel">
//                 {isEnglish ? 'en' : 'es'}
//               </span>
//             </motion.div>
//           </button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

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
    handleResize(); // Inicializa según el tamaño actual
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = isMobile ? 66 : 78;
  const height = isMobile ? 32 : 36;
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
