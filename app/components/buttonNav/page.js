// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const menu = {
//     open: {
//         width: "480px",
//         height: "650px",
//         top: "5px",
//         right: "13px",
//         transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
//     },
//     closed: {
//         width: "100px",
//         height: "40px",
//         top: "16px",
//         right: "24px",
//         transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
//     }
// }

// export default function ExpandableMenu() {
//     const [isActive, setIsActive] = useState(false);

//     return (
//         <div className="relative">
//             <motion.div
//                 className="bg-light2 rounded-[25px] absolute top-0 right-0"
//                 variants={menu}
//                 animate={isActive ? "open" : "closed"}
//                 initial="closed"
//             >
//                 {/* Aquí puedes agregar el contenido del menú expandido */}
//             </motion.div>
//             <Button isActive={isActive} onToggle={() => setIsActive(!isActive)} />
//         </div>
//     )
// }

// function Button({ isActive, onToggle }) {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className="absolute  top-4 right-6 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden font-handjet font-700 tracking-widest text-xl"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             onClick={onToggle}
//         >
//             <motion.div
//                 className="relative w-full h-full"
//                 animate={{ top: isActive ? "-100%" : "0%" }}
//                 transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
//             >
//                 <div className="w-full h-full bg-light2">
//                     <PerspectiveText label="Menu" isHovered={isHovered} />
//                 </div>
//                 <div className="w-full h-full bg-dark">
//                     <PerspectiveText label="Close" textColor="text-yel" isHovered={isHovered} />
//                 </div>
//             </motion.div>
//         </div>
//     )
// }

// function PerspectiveText({ label, textColor = "text-black", isHovered }) {
//     return (
//         <div
//             className="flex flex-col justify-center items-center h-full w-full transform-gpu transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
//             style={{
//                 transformStyle: 'preserve-3d',
//                 transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0deg)'
//             }}
//         >
//             <p
//                 className={`${textColor} uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? 'opacity-0 -translate-y-full' : ''}`}
//             >
//                 {label}
//             </p>
//             <p
//                 className={`${textColor} uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${isHovered ? 'opacity-100' : 'opacity-0'}`}
//                 style={{
//                     transformOrigin: 'bottom center',
//                     transform: 'rotateX(-90deg) translateY(13px)'
//                 }}
//             >
//                 {label}
//             </p>
//         </div>
//     )
// }






// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { links, footerLinks } from './../Nav/data';
// import { perspective, slideIn } from "./../Nav/anim";
// import Link from 'next/link';

// const getMenuVariants = (isMobile) => ({
//   open: {
//     width: isMobile ? "80vw" : "480px",
//     height: isMobile ? "70vh" : "650px",
//     top: isMobile ? "-5px" : "-5px",
//     right: isMobile ? "-5px" : "-5px",
//     backdropFilter: "blur(16px)",
//     WebkitBackdropFilter: "blur(16px)",
//     transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
//   },
//   closed: {
//     width: isMobile ? "70px" : "100px",
//     height: isMobile ? "35px" : "40px",
//      backdropFilter: "blur(16px)",
//     WebkitBackdropFilter: "blur(16px)",
//     transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
//   }
// });

// export default function ExpandableMenu() {
//   const [isActive, setIsActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768); // Consideramos móvil por debajo de 768px
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);

//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const menuVariants = getMenuVariants(isMobile);

//   return (
//     <div className="relative mr-2">
//       <motion.div
//         className=" bg-gradient-to-br from-lightviolet to-violet   dark:bg-gradient-to-br dark:from-graylight dark:to-gray rounded-[25px] absolute top-0 right-0 shadow-xl"
//         variants={menuVariants}
//         animate={isActive ? "open" : "closed"}
//         initial="closed"
//       >

//         {/* Aqui esta el contenido del menu mobile */}
//         {isActive && (
//           <div className="flex flex-col bg-lightred/0 dark:bg-graylight/0  rounded-[25px] justify-between h-full p-[100px_40px_50px] box-border ">
//             <div className="flex flex-col gap-2 ">
//               {links.map((link, i) => {
//                 const { title, href } = link;

//                 const handleClick = (e, href) => {
//                   if (href.startsWith("#")) {
//                     e.preventDefault(); // Evita que el navegador siga el enlace como una URL normal
//                     const section = document.querySelector(href);
//                     if (section) {
//                       section.scrollIntoView({ behavior: "smooth" });
//                     }
//                     setIsActive(false); // Cierra el menú al hacer clic en un enlace interno
//                   } else {
//                     setIsActive(false); // Cierra el menú si es un enlace externo
//                   }
//                 };

//                 return (
//                   <div
//                     key={`b_${i}`}
//                     className="perspective-[120px]  w-[2px] px-[2px] rounded-full perspective-origin-bottom hover:bg-yel dark:hover:bg-lightyel "
//                   >
//                     {href.startsWith("#") ? (
//                       <motion.div
//                         custom={i}
//                         variants={perspective}
//                         initial="initial"
//                         animate="enter"
//                         exit="exit"
//                         className="cursor-pointer"
//                         onClick={(e) => handleClick(e, href)} // Pasamos el href al manejador
//                       >
//                         <a className="text-light dark:text-light2  hover:text-dark dark:hover:text-lightgreen font-suse font-400 hover:font-600 text-4xl tracking-[0.2em] no-underline">{title}</a>
//                       </motion.div>
//                     ) : (
//                       <Link href={href} passHref legacyBehavior>
//                         <motion.div
//                           custom={i}
//                           variants={perspective}
//                           initial="initial"
//                           animate="enter"
//                           exit="exit"
//                           className="cursor-pointer"
//                         >
//                           <a className="text-light  dark:text-light2 hover:text-dark dark:hover:text-lightgreen font-suse font-400 hover:font-600 text-4xl tracking-[0.2em] no-underline ">{title}</a>
//                         </motion.div>
//                       </Link>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             {/* contenido del footer del menu mobile */}
//             <motion.div className="flex flex-wrap gap-10 cursor-pointer font-suse font-400 ">
//               {footerLinks.map((link, i) => {
//                 const { title, href } = link;
//                 return (
//                   <div key={i} className="cursor-pointer">
//                     <motion.div
//                       custom={i}
//                       variants={perspective}
//                       initial="initial"
//                       animate="enter"
//                       exit="exit"
//                     >
//                       <a
//                         href={href}
//                         className="text-dark dark:text-light2 text-xl hover:font-600 hover:text-light dark:hover:text-lightgreen no-underline font-bold"
//                         target={href.startsWith("http") ? "_blank" : "_self"}
//                         rel={href.startsWith("http") ? "noopener noreferrer" : ""}
//                       >
//                         {title}
//                       </a>
//                     </motion.div>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>
//         )}
//       </motion.div>
//       <Button isActive={isActive} onToggle={() => setIsActive(!isActive)} isMobile={isMobile} />
//     </div>
//   );
// }

// function Button({ isActive, onToggle, isMobile }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`cursor-pointer rounded-[25px] backdrop-blur-xl overflow-hidden font-handjet font-700 tracking-widest text-xl md:text-[18px]
//         ${isMobile ? '' : ''}
//         ${isMobile ? 'w-[70px] h-[35px]' : 'w-[100px] h-[40px]'}
//         transition-all duration-500 ease-in-out
//         backdrop-blur-xl bg-lightred/30 dark:bg-graylight/30 `}

//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={onToggle}
//     >
//       <motion.div
//         className="relative w-full h-full  "
//         animate={{ top: isActive ? "-100%" : "0%" }}
//         transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
//       >
//         <div className="w-full h-full bg-gradient-to-br from-lightred to-red  dark:bg-gradient-to-br dark:from-graylight dark:to-gray  border-none ">
//           <PerspectiveText label="Menu" isHovered={isHovered} />
//         </div>
//         <div className="w-full h-full bg-gradient-to-br from-lightred to-red  dark:bg-gradient-to-br dark:from-graylight dark:to-gray  border-none">
//           <PerspectiveText label="Close" textColor="" isHovered={isHovered} />
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function PerspectiveText({ label, textColor = "", isHovered }) {
//   return (
//     <div
//       className="flex flex-col justify-center bg-transparent items-center h-full w-full transform-gpu transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] text-dark dark:text-lightgreen "
//       style={{
//         transformStyle: 'preserve-3d',
//         transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0deg)'
//       }}
//     >
//       <p
//         className={`${textColor} uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? 'opacity-0 -translate-y-full' : ''
//           }`}
//       >
//         {label}
//       </p>
//       <p
//         className={`${textColor} uppercase pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${isHovered ? 'opacity-100 text-violet dark:text-yel ' : 'opacity-0'
//           }`}
//         style={{
//           transformOrigin: 'bottom center',
//           transform: 'rotateX(-90deg) translateY(13px)'
//         }}
//       >
//         {label}
//       </p>
//     </div>
//   );
// }


// components/ExpandableMenu.js
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { links, footerLinks, useNavLinks } from '../Nav/data';
import { perspective, slideIn } from "../Nav/anim";
import Link from 'next/link';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggleSwitch from '../themeToggleButton/themeToggleSwitch';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
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
          <div className="flex flex-col dark:bg-graylight/0 rounded-[25px] justify-between h-full p-[100px_40px_50px] box-border">

            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const { title, href } = link;
                const sectionId = href.replace('#', '').replace('-section', '');
                const isCurrentSection = activeSection === sectionId;

                return (
<div key={`b_${i}`} className="relative pl-4">
  <div
    className={`
      absolute left-0 top-1/2 -translate-y-1/2
      w-[1px] h-full
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
          dark:text-light2 font-suse font-400 text-4xl tracking-[0.2em] no-underline
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
          hover:font-600 text-4xl tracking-[0.2em] no-underline 
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

            <div className="flex justify-start px-5  items-center">
            <LangToggleSwitch isMobile={isMobile} />
            </div>

            {/* Theme Toggle Row */}
            <div className="flex justify-start px-5 items-center">
              <ThemeToggleSwitch isMobile={isMobile} />
            </div>



            <motion.div className="flex flex-wrap gap-10 cursor-pointer font-suse font-400">
              {footerLinks.map((link, i) => {
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
                        className="text-violet dark:text-lightyel text-xl hover:font-600 hover:text-red dark:hover:text-lightred no-underline relative left-4"
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