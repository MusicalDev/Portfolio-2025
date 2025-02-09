// 'use client';
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
// import { format } from 'date-fns';
// import { enUS } from 'date-fns/locale';
// import dynamic from 'next/dynamic';
// import CodedText from '../hoverMenu/page';
// import { MenuButton } from '../menuButton/page';
// import { ThemeToggle } from '../themeContext/themeContext';
// import Button from '../buttonNav/page';
// import ButtonTheme from '../buttonTheme/page';

// export default function Header() {
//     const [hidden, setHidden] = useState(false);
//     const [showMenuButton, setShowMenuButton] = useState(false);
//     const { scrollY } = useScroll();
//     const [isMenuActive, setIsMenuActive] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);

//     useMotionValueEvent(scrollY, "change", (latest) => {
//         if (latest > lastScrollY) {
//             // Scrolling down
//             setHidden(true);
//             setShowMenuButton(false);
//         } else {
//             // Scrolling up
//             setHidden(false);
//             setShowMenuButton(latest > 150);
//         }
//         setLastScrollY(latest);
//     });

//     const pathname = usePathname();
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const scrollToSection = (e, sectionId) => {
//         e.preventDefault();
//         if (typeof window !== 'undefined') {
//             const section = document.getElementById(sectionId);
//             if (section) {
//                 section.scrollIntoView({ behavior: 'smooth' });
//             } else if (pathname !== '/') {
//                 window.location.href = `/#${sectionId}`;
//             }
//         }
//     };

//     const handleClick = (e, sectionId) => {
//         if (isClient) {
//             scrollToSection(e, sectionId);
//         }
//     };

//     const ClientSideDateTimeComponent = () => {
//         const [dateTime, setDateTime] = useState(new Date());

//         useEffect(() => {
//             const intervalId = setInterval(() => {
//                 setDateTime(new Date());
//             }, 1000);
//             return () => clearInterval(intervalId);
//         }, []);

//         const formattedDateTime = format(dateTime, "dd - MMMM '-' yyyy - HH:mm aaaa '[Ar]'", {
//             locale: enUS,
//             timeZone: 'America/Argentina/Buenos_Aires'
//         });
//         return <p className="">{formattedDateTime}</p>;
//     };

//     const ClientOnlyDateTime = dynamic(() => Promise.resolve(ClientSideDateTimeComponent), {
//         ssr: false
//     });

//     return (
//         <div>
//             <motion.nav
//                 variants={{
//                     visible: { y: 0 },
//                     hidden: { y: "-100%" },
//                 }}
//                 animate={hidden ? "hidden" : "visible"}
//                 transition={{ duration: 0.35, ease: "easeInOut" }}
//                 className="fixed w-screen h-auto bg-transparent p-4 px-10 md:p-2 z-50 grid grid-cols-12 transition-colors text-xl lg:text-[1rem] font-600"
//             >
//                 {showMenuButton ? (
//                     <div className="col-span-12 flex justify-end m-4">
//                         <Button
//                             isActive={isMenuActive}
//                             onToggle={() => setIsMenuActive(!isMenuActive)}
//                         />
//                     </div>
//                 ) : (
//                     <>
//                         <div className="grid col-start-3 lg:col-start-2 col-span-2 lg:col-span-1 w-full h-auto justify-center items-start font-handjet lg:hidden">
//                             <div className="p-1 px-2  w-auto h-[35px]  text-dark dark:text-light transition-colors" >
//                                 Rosario - Argentina</div>
//                         </div>

//                         <div className='grid col-start-6 lg:col-start-3 col-span-2 md:!col-start-1 w-auto h-auto justify-center  transition-color'>
//                             <ThemeToggle />
//                         </div>

//                         <div className="grid col-span-4 col-start-8  lg:col-start-7 md:!col-start-10 w-full h-auto justify-center items-start">
//                             <div className="p-1 px-2 md:text-sm font-handjet w-auto h-auto rounded-lg text-dark dark:text-light transition-colors">
//                                 <ClientOnlyDateTime /></div>
//                         </div>

//                         <ul className="grid col-start-12 md:hidden items-end justify-center w-full h-auto font-handjet cursor-pointer text-dark dark:text-light ">
//                             <div className='felx w-[120px] items-start justify-start space-y-1 '>
//                                 <div className='flex w-full justify-start items-center'>
//                                     <div className='flex text-xs font-mono transition-colors'>01
//                                     </div>
//                                     <CodedText href="/#home-section" onClick={(e) => handleClick(e, 'home-section')} className="p-1 px-2 flex w-auto rounded-lg h-full " text="Home" />
//                                 </div>
//                                 <div className='flex justify-start items-center'>
//                                     <div className='flex text-xs font-mono transition-colors'>02
//                                     </div>
//                                     <CodedText href="/#about-section" onClick={(e) => handleClick(e, 'about-section')} className="p-1 px-2 w-auto rounded-lg h-full " text="About" />
//                                 </div>
//                                 <div className='flex justify-start items-center'>
//                                     <div className='flex text-xs font-mono transition-colors'>03
//                                     </div>
//                                     <CodedText href="/#projects-section" onClick={(e) => handleClick(e, 'projects-section')} className="p-1 px-2 w-auto rounded-lg h-full " text="Projects" />
//                                 </div>
//                                 <div className='flex justify-start items-center'>
//                                     <div className='flex text-xs font-mono transition-colors'>04
//                                     </div>
//                                     <CodedText href="/#contact-section" onClick={(e) => handleClick(e, 'contact-section')} className="p-1 px-2 w-auto rounded-lg h-full " text="Contact »" />
//                                 </div>
//                             </div>
//                         </ul>
//                     </>
//                 )}
//             </motion.nav>
//         </div>
//     );
// }

'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import dynamic from 'next/dynamic';
import CodedText from '../hoverMenu/page';
import { ThemeToggle } from '../themeContext/themeContext';
import Button from '../buttonNav/page';


const ClientSideDateTimeComponent = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    const formattedDateTime = format(dateTime, "dd - MMMM '-' yyyy - HH:mm aaaa '[Ar]'", {
        locale: enUS,
        timeZone: 'America/Argentina/Buenos_Aires'
    });
    return <p>{formattedDateTime}</p>;
};

const ClientOnlyDateTime = dynamic(() => Promise.resolve(ClientSideDateTimeComponent), {
    ssr: false
});

const scrollToSection = (e, sectionId, pathname) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else if (pathname !== '/') {
            window.location.href = `/#${sectionId}`;
        }
    }
};

export default function Header() {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const { scrollY } = useScroll();
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const [showText, setShowText] = useState(false);
    const pathname = usePathname();

    const textOpacity = useTransform(scrollY, [800, 1000], [0, 1]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest <= 0) {
            setIsAtTop(true);
            setShowMenuButton(false);
            setShowText(false);
        } else {
            setIsAtTop(false);
            setShowMenuButton(true);
            setShowText(latest > 800);  // Mostrar el texto cuando el scroll supera 800px
        }
    });

    const handleClick = (e, sectionId) => {
        scrollToSection(e, sectionId, pathname);
    };

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const navItemClass = "p-1 px-2 w-auto rounded-lg h-full";

    return (
        <div>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed w-screen h-auto bg-transparent p-4 px-10 md:p-2 z-50 grid grid-cols-12 transition-colors text-xl lg:text-[1rem] font-600 lg:hidden"
            >
                {isAtTop ? (
                    <>
                        <div className="grid col-start-3 lg:col-start-2 col-span-2 lg:col-span-1 w-full h-auto justify-center items-start font-handjet lg:hidden">
                            <div className="p-[7px] px-2 w-auto h-[35px] text-dark dark:text-light transition-colors ">
                                Rosario - Argentina
                            </div>
                        </div>

                        <div className='grid col-start-6 lg:col-start-3 col-span-2 md:!col-start-1 w-auto h-auto justify-center transition-color'>
                            <ThemeToggle />
                        </div>

                        <div className="grid col-span-4 col-start-8 lg:col-start-7 md:!col-start-10 w-full h-auto justify-center items-start">
                            <div className="p-1 px-2 md:text-sm font-handjet w-auto h-auto rounded-lg text-dark dark:text-light transition-colors">
                                <ClientOnlyDateTime />
                            </div>
                        </div>

                        <ul className="grid col-start-12  items-end justify-center w-full h-auto font-handjet cursor-pointer text-dark dark:text-light">
                            <div className='flex flex-col w-[120px] items-start justify-start space-y-1'>
                                {[
                                    { id: 'home-section', text: 'Home' },
                                    { id: 'about2-section', text: 'About' },
                                    { id: 'projects-section', text: 'Projects' },
                                    { id: 'contact-section', text: 'Contact »' }
                                ].map((item, index) => (
                                    <div key={item.id} className='flex justify-start items-center'>
                                        <div className='flex text-xs font-mono transition-colors'>{`0${index + 1}`}</div>
                                        <CodedText
                                            href={`/#${item.id}`}
                                            onClick={(e) => handleClick(e, item.id)}
                                            className={navItemClass}
                                            text={item.text}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ul>
                    </>
                ) : showMenuButton ? (
                    <motion.div
                        className="col-span-12 flex justify-end "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Button
                            isActive={isMenuActive}
                            onToggle={toggleMenu}
                        />
                    </motion.div>
                ) : null}
            </motion.nav>
            <motion.div
                className="fixed justify-center items-center backdrop-blur-lg w-full h-20 top-0 right-0  z-10 hidden lg:block "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                <div className="flex w-full h-full justify-between items-center px-10 lg:px-2">
                    <motion.div
                        className="font-handjet uppercase text-2xl ml-2 stretched-text"
                        style={{
                            opacity: textOpacity,
                            transform: 'scaleY(1.5)',
                            transformOrigin: 'center',
                        }}
                    >
                        Ulises Oreste
                    </motion.div>
                    <Button
                        className="absolute bg-white"
                        isActive={isMenuActive}
                        onToggle={toggleMenu}
                    />
                </div>
            </motion.div>
        </div>
    );
}


