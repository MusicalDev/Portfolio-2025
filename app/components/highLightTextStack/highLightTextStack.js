'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HighlightText = ({ children, text, className = '' }) => {
  const highlightRef = useRef(null);
  const charsRef = useRef([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setIsClient(true);
  }, []);

  const splitTextIntoChars = (text) => {
    return text.split('').map((char, index) => (
      <span
        className=""
        key={index}
        ref={(el) => {
          if (el) charsRef.current[index] = el;
        }}
      >
        {char}
      </span>
    ));
  };

  useEffect(() => {
    if (!isClient) return;

    const highlightedElement = highlightRef.current;
    const chars = charsRef.current;

    if (!highlightedElement || chars.length === 0) return;

    // Animation defaults
    const animationDefaults = {
      duration: 0.3,
      ease: 'power2.in',
    };
    const scrollTrigger = ScrollTrigger.create({
      trigger: highlightedElement,
      start: 'top bottom',
      onEnter: () => animateChars(),
      onEnterBack: () => animateChars(),
      onLeave: () => resetChars(),
      onLeaveBack: () => resetChars()
    });

    // Function to animate characters
    // const animateChars = () => {
    //   chars.forEach((char) => {
    //     gsap
    //       .timeline({ defaults: animationDefaults })
    //       .fromTo(char, {
    //         filter: 'brightness(100%) drop-shadow(0px 0px 0px #ef4444)',
    //         willChange: 'filter',
    //       }, {
    //         delay: gsap.utils.random(0, 1),
    //         repeat: 1,
    //         yoyo: true,
    //         filter: 'brightness(300%) drop-shadow(0px 0px 100px #ef4444)'
    //       });
    //   });
    // };

    const animateChars = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches ||
        document.documentElement.classList.contains('dark');

      const lightModeColor = '#7C00FE'; 
      const darkModeColor = '#fef08a';  
      const currentColor = isDarkMode ? darkModeColor : lightModeColor;

      chars.forEach((char) => {
        gsap
          .timeline({ defaults: animationDefaults })
          .fromTo(char, {
            filter: `brightness(100%) drop-shadow(0px 0px 0px ${currentColor})`,
            willChange: 'filter',
          }, {
            delay: gsap.utils.random(0, 1),
            repeat: 1,
            yoyo: true,
            filter: `brightness(300%) drop-shadow(0px 0px 100px ${currentColor})`
          });
      });
    };



    // Function to reset characters
    const resetChars = () => {
      gsap.killTweensOf(chars);
      gsap.set(chars, {
        opacity: 1
      });
    };

    // Clean up
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [isClient]);

  return (
    <span
      ref={highlightRef}
      className={`hx hx-10 relative inline-block bg-transparent ${className}`}
    >
      {/* Normal text for positioning */}
      <span className="word  absolute font-bold top-3 left-2 text-dark dark:text-dark ">{text}</span>
      {/* Animated characters */}
      <span className="word relative font-bold text-lightred dark:text-yel">{splitTextIntoChars(text)}</span>
    </span>
  );
};

export default HighlightText;