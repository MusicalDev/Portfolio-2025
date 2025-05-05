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

