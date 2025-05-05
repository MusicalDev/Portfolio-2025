import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../themeContext/themeContext'; 
function randChar(useChars2) {
  const chars = "_";
  const chars2 = "♫";
  const selectedChars = useChars2 ? chars2 : chars;
  const c = selectedChars[Math.floor(Math.random() * selectedChars.length)];
  return Math.random() > 0.5 ? c : c;
}

const CodedText = ({ text, text2, fromRight, className, href, onClick }) => {
  const textRef = useRef(null);
  const { theme } = useTheme();
  const [currentColors, setCurrentColors] = useState({});

  const getThemeColors = (currentTheme) => ({
    startColor: currentTheme === 'light' ? '#AD49E1' : '#ffbd00',
    startBackground: currentTheme === 'light' ? '#DFFF96' : '#403d39',
    endColor: currentTheme === 'light' ? '#231F20' : '#E0E0E0',
  });

  useEffect(() => {
    setCurrentColors(getThemeColors(theme));
  }, [theme]);

  useEffect(() => {
    const t = textRef.current;
    if (!t) return;

    const textString = typeof text === 'string' ? text : '';
    const text2String = typeof text2 === 'string' ? text2 : '';

    const arr1 = textString.length > 0 ? textString.split('') : text2String.split('');
    const arr2 = arr1.map(() => randChar(text2String.length > 0));

    // Aplicar colores iniciales
    gsap.set(t, {
      color: currentColors.endColor,
      background: 'transparent',
    });

    const handlePointerOver = () => {
      const tl = gsap.timeline();
      let step = 0;

      tl.fromTo(
        t,
        {
          innerHTML: arr2.join(''),
          color: currentColors.startColor,
          background: currentColors.startBackground,
        },
        {
          duration: arr1.length / 12,
          ease: 'power4.in',
          delay: 0.1,
          color: currentColors.endColor,
          background: 'transparent',
          onUpdate: () => {
            const p = Math.floor(tl.progress() * arr1.length);
            if (step !== p) {
              step = p;
              arr1.forEach((_, i) => (arr2[i] = randChar(text2String.length > 0)));
              let pt1 = arr1.join('').substring(0, p);
              let pt2 = arr2.join('').substring(0, arr2.length - p);
              if (fromRight) {
                pt1 = arr2.join('').substring(0, arr2.length - p);
                pt2 = arr1.join('').substring(arr1.length - p);
              }
              t.innerHTML = pt1 + pt2;
            }
          }
        }
      );
    };

    t.addEventListener('pointerover', handlePointerOver);

    return () => {
      t.removeEventListener('pointerover', handlePointerOver);
    };
  }, [text, text2, fromRight, currentColors]);

  return (
    <p
      ref={textRef}
      className={`codedText ${fromRight ? 'fromRight' : ''} ${className} 
        transition-colors`}
      style={{ color: currentColors.endColor }}
      onClick={onClick}
    >
      {text || text2}
    </p>
  );
};

export default CodedText;