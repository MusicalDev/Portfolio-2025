// 'use client'
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import RandomGif from '../randomGif/page';





// const menu = {
//     open: {
//         width: "600px",
//         height: "550px",
//         transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
//     },
//     closed: {
//         width: "170px",
//         height: "40px",
//         transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
//     }
// }

// const backdrop = {
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 }
// }

// const contentFade = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
// }

// export default function ExpandableMenu() {
//     const [isActive, setIsActive] = useState(false);
//     const [showContent, setShowContent] = useState(false);
//     // const [theme, setTheme] = useState('light')

//     // const toggleTheme = () => {
//     //   if (theme === 'light') {
//     //     setTheme('dark')
//     //     document.documentElement.classList.add('dark')
//     //     document.documentElement.style.colorScheme = 'dark'
//     //     localStorage.setItem('theme', 'dark')
//     //   } else {
//     //     setTheme('light')
//     //     document.documentElement.classList.remove('dark')
//     //     document.documentElement.style.colorScheme = 'light'
//     //     localStorage.setItem('theme', 'light')
//     //   }
//     // }
  
//     // useEffect(() => {
//     //   const localTheme = localStorage.getItem('theme')
//     //   const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      
//     //   if (localTheme) {
//     //     setTheme(localTheme)
//     //     if (localTheme === 'dark') {
//     //       document.documentElement.classList.add('dark')
//     //       document.documentElement.style.colorScheme = 'dark'
//     //     }
//     //   } else if (systemTheme === 'dark') {
//     //     setTheme('dark')
//     //     document.documentElement.classList.add('dark')
//     //     document.documentElement.style.colorScheme = 'dark'
//     //   }
  
//     //   // Agregar clase de transición después de un breve retraso
//     //   setTimeout(() => {
//     //     document.documentElement.classList.add('theme-transition')
//     //   }, 200)
//     // }, [])
  
   

//     useEffect(() => {
//         if (isActive) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//             setShowContent(false);
//         }

//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isActive]);

//     const closeMenu = () => setIsActive(false);

//     const handleAnimationComplete = () => {
//         if (isActive) {
//             setShowContent(true);
//         }
//     };


//     return (
//         <>
//             <ButtonTheme isActive={isActive} onToggle={() => setIsActive(!isActive)} />
//             <AnimatePresence>
//                 {isActive && (
//                     <motion.div
//                         className="fixed inset-0 backdrop-blur-md z-40 flex items-center justify-center "
//                         variants={backdrop}
//                         initial="hidden"
//                         animate="visible"
//                         exit="hidden"
//                         onClick={closeMenu}
//                     >
//                         <motion.div
//                             className="bg-graylight rounded-[25px] z-50 overflow-hidden"
//                             variants={menu}
//                             animate="open"
//                             initial="closed"
//                             onClick={(e) => e.stopPropagation()}
//                             onAnimationComplete={handleAnimationComplete}
//                         >
//                             <AnimatePresence>
//                                 {showContent && (
//                                     <motion.div
//                                         className="p-0"
//                                         variants={contentFade}
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="hidden"
//                                     >
//                                         <div className="flex flex-col w-auto h-[60vh] items-center p-2  rounded-[25px] shadow-lg justify-center">
//                                             <h2 className="text-3xl font-handjet mb-4 text-light dark:text-red font-600">Select an Option</h2>

//                                             <div className="flex flex-row justify-center items-center font-handjet font-600 text-xl  w-auto h-auto">
//                                                 <div className='flex flex-col items-center justify-center w-full h-full'>
//                                                     <div className="w-auto h-auto relative object-cover">
//                                                         <RandomGif theme="light" />
//                                                     </div>
//                                                     <button
//                                                         onClick={() => {
//                                                             if (theme !== 'light') {
//                                                                 toggleTheme('light');
//                                                             }
                                                        
//                                                         }}
//                                                         className="px-4 py-2 bg-light text-dark font-700 rounded-xl hover:bg-dark hover:text-yel dark:hover:bg-dark transition-colors mt-4 w-auto"
//                                                     >
//                                                         Light Team
//                                                     </button>
//                                                 </div>

//                                                 <div className='flex flex-col items-center justify-center w-full h-full'>
//                                                     <div className="w-auto h-auto  relative object-cover">
//                                                         <RandomGif theme="dark" />
//                                                     </div>
//                                                     <button
//                                                         onClick={() => {
//                                                             if (theme !== 'dark') {
//                                                                 toggleTheme('dark');
//                                                             }                                                       
                                                        
//                                                         }}
//                                                         className="px-4 py-2 bg-light text-dark font-700 hover:bg-dark hover:text-red rounded-xl transition-colors mt-4 w-auto"
//                                                     >
//                                                         Dark Team
//                                                     </button>
//                                                 </div>
//                                             </div>

//                                             <button
//                                                 onClick={closeMenu}
//                                                 className="mt-8 px-4 py-2 rounded-xl text-light dark:text-light bg-graylight dark:bg-gray hover:text-yel dark:hover:text-red transition-colors font-handjet font-600 text-xl"
//                                             >
//                                                 Close
//                                             </button>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     )
// }

// function ButtonTheme({ isActive, onToggle }) {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className="flex top-[0px] text-light w-[170px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden font-handjet font-700  text-xl z-50 "
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             onClick={onToggle}
//         >
//             <motion.div
//                 className="relative w-full h-full"
//                 animate={{ top: isActive ? "-100%" : "0%" }}
//                 transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
//             >
//                 <div className="w-full h-full text-light">
//                     <PerspectiveText label="Choose your team" isHovered={isHovered} />
//                 </div>
//                 <div className="w-full h-full text-light">
//                     <PerspectiveText label="Close" textColor="text-light" isHovered={isHovered} />
//                 </div>
//             </motion.div>
//         </div>
//     )
// }

// function PerspectiveText({ label, textColor = "text-black", isHovered }) {
//     return (
//         <div
//             className="flex flex-col p-1 text-light justify-center items-center h-full w-full transform-gpu transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
//             style={{
//                 transformStyle: 'preserve-3d',
//                 transform: isHovered ? 'rotateX(90deg)' : 'rotateX(0deg)'
//             }}
//         >
//             <p
//                 className={`${textColor}text-light dark:text-light pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isHovered ? 'opacity-0 -translate-y-full' : ''}`}
//             >
//                 {label}
//             </p>
//             <p
//                 className={`${textColor}text-light dark:text-red pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] absolute ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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