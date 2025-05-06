'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useFooterLinks, useNavLinks } from '../Nav/data';
import { perspective, slideIn } from "../Nav/anim";
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggleSwitch from '../themeToggleButton/themeToggleSwitch';
import LangToggleSwitch from '../langToggleSwitch/langToggleSwitch';

const getMenuVariants = (isMobile) => ({
  open: {
    width: isMobile ? "80vw" : "480px",
    height: isMobile ? "70vh" : "650px",
    top: isMobile ? "-5px" : "-5px",
    right: isMobile ? "-5px" : "-5px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: isMobile ? "70px" : "100px",
    height: isMobile ? "35px" : "40px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
});

export default function ExpandableMenu() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const activeSection = useActiveSection();
  const navLinks = useNavLinks();
  const FooterLinks = useFooterLinks();


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuVariants = getMenuVariants(isMobile);

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        const onScrollEnd = () => {
          setIsActive(false);
          window.removeEventListener("scrollend", onScrollEnd);
        };

        window.addEventListener("scrollend", onScrollEnd);
      }
    } else {
      setTimeout(() => setIsActive(false), 300);
    }
  };

  return (
    <div className="relative mr-2">
      <motion.div
        className="bg-gradient-to-br from-yellow-100 to-amber-300  dark:bg-gradient-to-br dark:from-graylight dark:to-gray rounded-[25px] absolute top-0 right-0 shadow-xl"
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && (
          <div className="flex flex-col dark:bg-graylight/0 rounded-[25px] justify-between h-full py-[60px] px-[40px] box-border">

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const { title, href } = link;
                const sectionId = href.replace('#', '').replace('-section', '');
                const isCurrentSection = activeSection === sectionId;

                return (
                  <div key={`b_${i}`} className="relative px-[6px]">
                    <div
                      className={`
      absolute left-0 top-1/2 -translate-y-1/2
      w-[2px] h-full
      rounded-full 
      ${isCurrentSection ? 'bg-red dark:bg-red' : 'hover:bg-lightred dark:hover:bg-lightred'}
    `}
                    />
                    {href.startsWith("#") ? (
                      <motion.div
                        custom={i}
                        variants={perspective}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className="cursor-pointer"
                        onClick={(e) => handleClick(e, href)}
                      >
                        <a
                          className={`
          dark:text-light2 font-suse font-400 text-4xl md:text-xl tracking-[0.3em] no-underline
          ${isCurrentSection
                              ? 'text-violet dark:text-yel font-600'
                              : 'hover:text-lightviolet dark:hover:text-lightyel hover:font-600'}
        `}
                        >
                          {title}
                        </a>
                      </motion.div>
                    ) : (
                      <Link href={href} passHref>
                        <motion.div
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          className={`
          cursor-pointer text-light dark:text-light2 
          hover:text-dark dark:hover:text-lightgreen font-suse font-400 
          hover:font-600 text-4xl  tracking-[0.2em] no-underline 
          ${activeSection === href.replace("#", "") ? "text-slate-900 dark:text-lightgreen font-600" : ""}
        `}
                          onClick={(e) => handleClick(e, href)}
                        >
                          {title}
                        </motion.div>
                      </Link>
                    )}
                  </div>

                );
              })}
            </div>

            <div className="flex justify-start px-[6px]  items-center">
              <LangToggleSwitch isMobile={isMobile} />
            </div>

            {/* Theme Toggle Row */}
            <div className="flex justify-start px-[6px] items-center">
              <ThemeToggleSwitch isMobile={isMobile} />
            </div>



            <motion.div className="flex flex-wrap gap-10 cursor-pointer font-suse font-400">
              {FooterLinks.map((link, i) => {
                const { title, href } = link;
                return (
                  <div key={i} className="cursor-pointer">
                    <motion.div
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <a
                        href={href}
                        className="text-violet dark:text-lightyel text-xl md:text-sm hover:font-600 hover:text-red dark:hover:text-lightred no-underline relative px-[6px]"
                        target={href.startsWith("http") ? "_blank" : "_self"}
                        rel={href.startsWith("http") ? "noopener noreferrer" : ""}
                      >
                        {title}
                      </a>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}
      </motion.div>
      <Button
        isActive={isActive}
        onToggle={() => setIsActive(!isActive)}
        isMobile={isMobile}
        activeSection={activeSection}
      />
    </div>
  );
}

function Button({ isActive, onToggle, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`cursor-pointer rounded-[25px] backdrop-blur-xl overflow-hidden font-handjet font-700 tracking-widest text-xl md:text-[18px]
        ${isMobile ? 'w-[70px] h-[35px]' : 'w-[100px] h-[40px]'}
        transition-all duration-500 ease-in-out bg-transparent`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="w-full h-full bg-gradient-to-br from-lightyel to-red dark:bg-gradient-to-br dark:from-graylight dark:to-gray border-none">
          <PerspectiveText label="Menu" isHovered={isHovered} />
        </div>
        <div className="w-full h-full bg-gradient-to-br from-lightyel to-red dark:bg-gradient-to-br dark:from-graylight dark:to-gray border-none">
          <PerspectiveText label="Close" textColor="" isHovered={isHovered} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label, textColor = "", isHovered }) {
  return (
    <div
      className="flex flex-col justify-center bg-transparent items-center h-full w-full transform-gpu transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-dark dark:text-lightyel"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0deg)'
      }}
    >
      <p
        className={`${textColor} uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? 'opacity-0 -translate-y-full' : ''
          }`}
      >
        {label}
      </p>
      <p
        className={`${textColor} uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${isHovered ? 'opacity-100 text-lightyel dark:text-yel' : 'opacity-0'
          }`}
        style={{
          transformOrigin: 'bottom center',
          transform: 'rotateX(-90deg) translateY(13px)'
        }}
      >
        {label}
      </p>
    </div>
  );
}