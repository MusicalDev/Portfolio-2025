'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useTheme } from '../components/themeContext/themeContext';
import DownloadButton from '../downloadButton/page';
import Tech from '../components/stack';
import HighlightedParagraph from '../components/highLightTextStack/highlightedParagraph';
import { useTranslations } from '../components/hooks/useTranslations';

const HighlightEffect1 = () => {
  const contentRef = useRef(null);
  const charsRef = useRef(null);
  const { theme } = useTheme();
  const t = useTranslations();

  const colors = {
    light: {
      highlight: '#7C00FE',
      shadow: '#a78bfa'
    },
    dark: {
      highlight: '#ffbd00',
      shadow: '#fef08a'
    }
  };

  const effectText = t('aboutText.aboutTextEffect');

  useEffect(() => {
    // Verificar si estamos en el navegador
    if (typeof window === 'undefined') return;

    // Registrar el plugin solo una vez
    if (!gsap.plugins.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Verificar que el elemento existe
    if (!contentRef.current) return;

    const markElement = contentRef.current.querySelector('mark');
    if (!markElement) return;

    const text = new SplitType(markElement, {
      types: 'chars',
      tagName: 'span'
    });

    charsRef.current = text.chars;

    const animationDefaults = {
      duration: 0.5,
      ease: 'power1'
    };

    const currentColors = theme === 'dark' ? colors.dark : colors.light;

    const trigger = ScrollTrigger.create({
      trigger: contentRef.current,
      start: 'top bottom',
      onEnter: () => animateChars(currentColors),
      onEnterBack: () => animateChars(currentColors),
      onLeave: () => resetChars(),
      onLeaveBack: () => resetChars()
    });

    const animateChars = (themeColors) => {
      if (!charsRef.current) return;

      const tl = gsap.timeline({ defaults: animationDefaults });

      tl.set(charsRef.current, {
        willChange: 'transform, opacity, color, filter'
      })
        .to(charsRef.current, {
          stagger: 0.06,
          opacity: 0,
          scale: 0.8,
        })
        .to(charsRef.current, {
          stagger: 0.06,
          opacity: 1,
          scale: 1,
          color: themeColors.highlight,
          filter: `drop-shadow(0px 0px 20px ${themeColors.shadow})`,
          startAt: { filter: `drop-shadow(0px 0px 0px ${themeColors.shadow})` }
        }, animationDefaults.duration);
    };

    const resetChars = () => {
      if (!charsRef.current) return;
      gsap.killTweensOf(charsRef.current);
      gsap.set(charsRef.current, {
        scale: 1,
        opacity: 1,
        color: '',
        filter: 'drop-shadow(0px 0px 0px transparent)'
      });
    };

    return () => {
      if (text && text.revert) {
        text.revert();
      }
      if (trigger) {
        trigger.kill();
      }
    };
  }, [theme, effectText]);

  return (
    <div className=" w-full flex flex-col items-center justify-start mt-32 transition-colors duration-200">
      <div
        ref={contentRef}
        className="max-w-7xl p-8"
        style={{
          '--color-highlight-end': theme === 'dark' ? colors.dark.highlight : colors.light.highlight
        }}
      >
        <p className="text-2xl leading-relaxed text-dark dark:text-light2">
          {t('aboutText.aboutText1')} {' '}
          <mark className="bg-transparent text-inherit text-3xl font-bold">
            {t('aboutText.aboutTextEffect')}
          </mark>{' '}
          {t('aboutText.aboutText2')}
        </p>
      </div>
      <DownloadButton text={t('aboutText.download')} />
      <div className='flex flex-col h-full w-full justify-center items-center'>
        {/* <div className='font-suse uppercase font-bold text-8xl md:text-5xl mb-32'>Stack</div> */}
        <HighlightedParagraph />
        <div className='flex flex-col h-full w-full font-suse'>
          <Tech />
        </div>
      </div>
    </div>
  );
};

export default HighlightEffect1;