// 'use client';

// import {useRouter, usePathname} from 'next/navigation';
// import {useLocale} from 'next-intl';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();

//   const switchLocale = (newLocale) => {
//         const newPath = `/${newLocale}${pathname.substring(3)}`;
//         router.push(newPath, { scroll: false }); // Esto evita el scroll automático al top
//     };

//   return (
//     <div className="flex text-xs font-mono transition-colors gap-1 mt-1">06
//       <button onClick={() => switchLocale('en')} className={locale === 'en' ? 'flex justify-center items-center font-handjet font-bold text-lg p-[2px] px-2 md:text-sm  w-6 h-6 rounded-lg text-dark dark:text-light  bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light' : 'flex justify-center items-center w-6 h-6 text-xl p-[1px] px-2 md:text-sm font-handjet rounded-lg text-dark dark:text-light   hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'}>
//         En
//       </button>
//       <button onClick={() => switchLocale('es')} className={locale === 'es' ? 'flex justify-center items-center font-bold text-lg font-handjet p-[1px] px-2 md:text-sm  w-6 h-6 rounded-lg text-dark dark:text-light bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light' : 'flex justify-center items-center w-6 h-6 text-xl p-[2px] px-2 md:text-sm font-handjet  rounded-lg text-dark dark:text-light hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'}>
//         Es
//       </button>
//     </div>
//   );
// }

// 'use client';

// import {useRouter, usePathname} from 'next/navigation';
// import {useLocale} from 'next-intl';

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();

//   const switchLocale = (newLocale) => {
//     // Fixed by adding backticks for proper template string formatting
//     const newPath = `/${newLocale}${pathname.substring(3)}`;
//     router.push(newPath, { scroll: false }); // Esto evita el scroll automático al top
//   };

//   return (
//     <div className="flex text-xs font-mono transition-colors gap-1 mt-1">
//       <button onClick={() => switchLocale('en')} className={locale === 'en' ? 'flex justify-center items-center font-handjet font-bold text-lg p-[2px] px-2 md:text-sm  w-6 h-6 rounded-lg text-dark dark:text-light  bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light' : 'flex justify-center items-center w-6 h-6 text-xl p-[1px] px-2 md:text-sm font-handjet rounded-lg text-dark dark:text-light   hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'}>
//         En
//       </button>
//       <button onClick={() => switchLocale('es')} className={locale === 'es' ? 'flex justify-center items-center font-bold text-lg font-handjet p-[1px] px-2 md:text-sm  w-6 h-6 rounded-lg text-dark dark:text-light bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light' : 'flex justify-center items-center w-6 h-6 text-xl p-[2px] px-2 md:text-sm font-handjet  rounded-lg text-dark dark:text-light hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'}>
//         Es
//       </button>
//     </div>
//   );
// }


// import {useLocale} from 'next-intl';
// import Link from 'next-intl';
// import {usePathname} from 'next/navigation';

// export default function LanguageSwitcher() {
//   const pathname = usePathname();
//   const locale = useLocale();

//   // Removemos el idioma de la URL actual para reusarla
//   const pathWithoutLocale = pathname.replace(/^\/(es|en)/, '');

//   return (
//     <div className="flex text-xs font-mono transition-colors gap-1">
//       <Link
//         href={`/${'en'}${pathWithoutLocale}`}
//         locale="en"
//         className={locale === 'en'
//           ? 'font-bold text-lg bg-lightyel dark:bg-graylight'
//           : 'text-xl'
//         }
//       >
//         EN
//       </Link>

//       <Link
//         href={`/${'es'}${pathWithoutLocale}`}
//         locale="es"
//         className={locale === 'es'
//           ? 'font-bold text-lg bg-lightyel dark:bg-graylight'
//           : 'text-xl'
//         }
//       >
//         ES
//       </Link>
//     </div>
//   );
// }

// 'use client';

// import { useRouter, usePathname } from '../../../../i18n/routing';
// import { useLocale } from 'next-intl';
// import { useState, useEffect } from 'react';

// export default function AdvancedLanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const currentLocale = useLocale();
//   const [isChanging, setIsChanging] = useState(false);

//   const toggleLanguage = () => {
//     const nextLocale = currentLocale === 'es' ? 'en' : 'es';
    
//     // Marcar que estamos cambiando de idioma
//     setIsChanging(true);
    
//     // Almacenar una bandera que indique que estamos en transición de idioma
//     localStorage.setItem('languageChanging', 'true');
    
//     // Almacenar el tema actual antes de la navegación
//     const isDarkMode = document.documentElement.classList.contains('dark');
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
//     // Navegar a la nueva URL con el cambio de idioma
//     router.replace(pathname, { locale: nextLocale });
//   };

//   // Limpiar la bandera de cambio de idioma después de la navegación
//   useEffect(() => {
//     const cleanup = () => {
//       localStorage.removeItem('languageChanging');
//       setIsChanging(false);
//     };
    
//     // Si acabamos de completar un cambio de idioma
//     if (localStorage.getItem('languageChanging')) {
//       cleanup();
//     }
    
//     return cleanup;
//   }, [pathname, currentLocale]);

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
//       disabled={isChanging}
//     >
//       <span>{currentLocale === 'es' ? '🇪🇸' : '🇬🇧'}</span>
//       <span>{isChanging ? '...' : (currentLocale === 'es' ? 'EN' : 'ES')}</span>
//     </button>
//   );
// }

// 'use client';

// import { useRouter, usePathname } from 'next/navigation';
// import { useLocale } from 'next-intl';
// import { Link } from '@/i18n/routing';

// export default function LanguageSwitcher() {
//   const locale = useLocale();
//   const pathname = usePathname();
  
//   // Obtener la ruta sin el prefijo de idioma
//   const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

//   return (
//     <div className="flex text-xs font-mono transition-colors gap-1 mt-1">
//       <Link 
//         href={pathnameWithoutLocale} 
//         locale="en"
//         className={locale === 'en' ? 'flex justify-center items-center font-handjet font-bold text-lg p-[2px] px-2 md:text-sm w-6 h-6 rounded-lg text-dark dark:text-light bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light' : 'flex justify-center items-center w-6 h-6 text-xl p-[1px] px-2 md:text-sm font-handjet rounded-lg text-dark dark:text-light hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'}
//       >
//         En
//       </Link>
//       <Link 
//         href={pathnameWithoutLocale} 
//         locale="es"
//         className={locale === 'es' ? 'flex justify-center items-center font-bold text-lg font-handjet p-[1px] px-2 md:text-sm w-6 h-6 rounded-lg text-dark dark:text-light bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light' : 'flex justify-center items-center w-6 h-6 text-xl p-[2px] px-2 md:text-sm font-handjet rounded-lg text-dark dark:text-light hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'}
//       >
//         Es
//       </Link>
//     </div>
//   );
// }

'use client';

import { useLanguage } from '../../context/languageContext';

export default function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  return (
    <div className="flex text-xs font-mono transition-colors gap-1 mt-1">
      <button
        onClick={() => changeLanguage('es')}
        disabled={locale === 'es'}
        className={
          locale === 'es'
            ? 'flex justify-center items-center font-handjet font-bold text-lg p-[2px] px-2 md:text-sm w-6 h-6 rounded-lg text-dark dark:text-light bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light'
            : 'flex justify-center items-center w-6 h-6 text-xl p-[1px] px-2 md:text-sm font-handjet rounded-lg text-dark dark:text-light hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'
        }
      >
        Es
      </button>
      <button
        onClick={() => changeLanguage('en')}
        disabled={locale === 'en'}
        className={
          locale === 'en'
            ? 'flex justify-center items-center font-bold text-lg font-handjet p-[1px] px-2 md:text-sm w-6 h-6 rounded-lg text-dark dark:text-light bg-lightyel dark:bg-graylight border-[1px] border-dark dark:border-light'
            : 'flex justify-center items-center w-6 h-6 text-xl p-[2px] px-2 md:text-sm font-handjet rounded-lg text-dark dark:text-light hover:bg-lightyel hover:dark:bg-graylight hover:text-violet'
        }
      >
        En
      </button>
    </div>
  );
}

