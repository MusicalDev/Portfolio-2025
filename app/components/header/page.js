
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import { usePathname } from 'next/navigation';
// import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
// import { format } from 'date-fns';
// import { enUS } from 'date-fns/locale';
// import dynamic from 'next/dynamic';
// import CodedText from '../hoverMenu/page';
// import { ThemeToggle } from '../themeContext/themeContext';
// import Button from '../buttonNav/page';
// import {Link} from "@/i18n/routing"


// const ClientSideDateTimeComponent = () => {
//     const [dateTime, setDateTime] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setDateTime(new Date());
//         }, 500);
//         return () => clearInterval(intervalId);
//     }, []);

//     const formattedDateTime = format(dateTime, "dd - MMMM '-' yyyy - HH:mm aaaa '[Ar]'", {
//         locale: enUS,
//         timeZone: 'America/Argentina/Buenos_Aires'
//     });
//     return <p>{formattedDateTime}</p>;
// };

// const ClientOnlyDateTime = dynamic(() => Promise.resolve(ClientSideDateTimeComponent), {
//     ssr: false
// });

// const scrollToSection = (e, sectionId, pathname) => {
//     e.preventDefault();
//     if (typeof window !== 'undefined') {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth' });
//         } else if (pathname !== '/') {
//             window.location.href = `/#${sectionId}`;
//         }
//     }
// };

// export default function Header() {
//     const [showMenuButton, setShowMenuButton] = useState(false);
//     const { scrollY } = useScroll();
//     const [isMenuActive, setIsMenuActive] = useState(false);
//     const [isAtTop, setIsAtTop] = useState(true);
//     const [showText, setShowText] = useState(false);
//     const pathname = usePathname();

//     const textOpacity = useTransform(scrollY, [800, 1000], [0, 1]);

//     useMotionValueEvent(scrollY, "change", (latest) => {
//         if (latest <= 0) {
//             setIsAtTop(true);
//             setShowMenuButton(false);
//             setShowText(false);
//         } else {
//             setIsAtTop(false);
//             setShowMenuButton(true);
//             setShowText(latest > 800);  // Mostrar el texto cuando el scroll supera 800px
//         }
//     });

//     const handleClick = (e, sectionId) => {
//         scrollToSection(e, sectionId, pathname);
//     };

//     const toggleMenu = () => {
//         setIsMenuActive(!isMenuActive);
//     };

//     const navItemClass = "p-1 px-2 w-auto rounded-lg h-full";

//     return (
//         <div>
//             <motion.nav
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="fixed w-screen h-auto bg-transparent p-4 px-10 md:p-2 z-50 grid grid-cols-12 transition-colors text-xl lg:text-[1rem] font-600 lg:hidden"
//             >
//                 {isAtTop ? (
//                     <>
//                         <div className="grid col-start-3 lg:col-start-2 col-span-2 lg:col-span-1 w-full h-auto justify-center items-start font-handjet lg:hidden">
//                             <div className="p-[7px] px-2 w-auto h-[35px] text-dark dark:text-light transition-colors ">
//                                 Rosario - Argentina
//                             </div>
//                         </div>

//                         <div className='grid col-start-6 lg:col-start-3 col-span-2 md:!col-start-1 w-auto h-auto justify-center transition-color'>
//                             <ThemeToggle />
//                         </div>

//                         <div className="grid col-span-4 col-start-8 lg:col-start-7 md:!col-start-10 w-full h-auto justify-center items-start">
//                             <div className="p-1 px-2 md:text-sm font-handjet w-auto h-auto rounded-lg text-dark dark:text-light transition-colors">
//                                 <ClientOnlyDateTime />
//                             </div>
//                         </div>

//                         <ul className="grid col-start-12  items-end justify-center w-full h-auto font-handjet cursor-pointer text-dark dark:text-light">
//                             <div className='flex flex-col w-[120px] items-start justify-start space-y-1'>
//                                 {[
//                                     { id: 'home-section', text: 'Home' },
//                                     { id: 'about2-section', text: 'About' },
//                                     { id: 'projects-section', text: 'Projects' },
//                                     { id: 'experience-section', text: 'Experience' },
//                                     { id: 'contact-section', text: 'Contact »' }
//                                 ].map((item, index) => (
//                                     <div key={item.id} className='flex justify-start items-center'>
//                                         <div className='flex text-xs font-mono transition-colors'>{`0${index + 1}`}</div>
//                                         <CodedText
//                                             href={`/#${item.id}`}
//                                             onClick={(e) => handleClick(e, item.id)}
//                                             className={navItemClass}
//                                             text={item.text}
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </ul>
//                     </>
//                 ) : showMenuButton ? (
//                     <motion.div
//                         className="col-span-12 flex justify-end "
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <Button
//                             isActive={isMenuActive}
//                             onToggle={toggleMenu}
//                         />
//                     </motion.div>
//                 ) : null}
//             </motion.nav>
//             <motion.div
//                 className="fixed justify-center items-center backdrop-blur-lg w-full h-20 top-0 right-0  z-10 hidden lg:block "
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 >
//                 <div className="flex w-full h-full justify-between items-center px-10 lg:px-2">
//                     <motion.div
//                         className="font-handjet uppercase text-2xl ml-2 stretched-text"
//                         style={{
//                             opacity: textOpacity,
//                             transform: 'scaleY(1.5)',
//                             transformOrigin: 'center',
//                         }}
//                     >
//                         Ulises Oreste
//                     </motion.div>
//                     <Button
//                         className="absolute bg-white"
//                         isActive={isMenuActive}
//                         onToggle={toggleMenu}
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// }


'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { format } from 'date-fns';
import { enUS, es } from 'date-fns/locale';
import dynamic from 'next/dynamic';
import CodedText from '../hoverMenu/page';
import { ThemeToggle } from '../themeContext/themeContext';
import Button from '../buttonNav/page';
import { useTranslations } from '../hooks/useTranslations';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import { useLanguage } from '../../context/languageContext';




// ⏰ Componente de fecha
const ClientSideDateTimeComponent = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const { locale } = useLanguage(); // ✅ Obtené el idioma actual del contexto

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 500);
        return () => clearInterval(intervalId);
    }, []);

    const selectedLocale = locale === 'es' ? es : enUS;

    const dateFormat = locale === 'es'
        ? "dd 'de' MMMM 'de' yyyy - HH:mm aaaa '[Ar]'"
        : "dd - MMMM '-' yyyy - HH:mm aaaa '[Ar]'";

    const formattedDateTime = format(dateTime, dateFormat, {
        locale: selectedLocale,
        timeZone: 'America/Argentina/Buenos_Aires'
    });

    return <p>{formattedDateTime}</p>;
};

const ClientOnlyDateTime = dynamic(() => Promise.resolve(ClientSideDateTimeComponent), {
    ssr: false
});

const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

export default function Header() {
    const t = useTranslations();
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
            setShowText(latest > 800);
        }
    });


    const handleClick = (e, sectionId) => {
        e.preventDefault();

        // Extract the base path without the section
        const basePath = pathname.split('#')[0];

        // If we're already on the home page (either '/' or '/es')
        if (basePath === '/' || basePath === '/es' || basePath === '/en') {
            scrollToSection(sectionId);
        } else {
            // If we're on a different page, navigate to home with the correct section
            const language = pathname.startsWith('/es') ? '/es' : '';
            window.location.href = `${language}/#${sectionId}`;
        }
    };


    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const navItemClass = "p-1 px-2 w-auto rounded-lg h-full";

    const navigationItems = [
        { id: 'home-section', text: t('Header.navbar.home'), href: '/' },
        { id: 'about2-section', text: t('Header.navbar.about'), href: '/#about2-section' },
        { id: 'projects-section', text: t('Header.navbar.projects'), href: '/#projects-section' },
        { id: 'experience-section', text: t('Header.navbar.experience'), href: '/#experience-section' },
        { id: 'contact-section', text: `${t('Header.navbar.contact')} »`, href: '/#contact-section' }
    ];

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

                        <ul className="grid col-start-12 items-end justify-center w-full h-auto font-handjet cursor-pointer text-dark dark:text-light">
                            <div className='flex flex-col w-[120px] items-start justify-start space-y-1'>
                                {navigationItems.map((item, index) => (
                                    <div key={item.id} className='flex justify-start items-center'>
                                        <div className='flex text-xs font-mono transition-colors'>{`0${index + 1}`}</div>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleClick(e, item.id)}
                                        >
                                            <CodedText
                                                className={navItemClass}
                                                text={item.text}
                                            />
                                        </a>

                                    </div>
                                ))}
                            </div>
                            <div className='flex items-start justify-start gap-2 font-mono text-xs transition-colors mt-[8px]'>06
                                <LanguageSwitcher />
                            </div>

                        </ul>

                    </>
                ) : showMenuButton ? (
                    <motion.div
                        className="col-span-12 flex justify-end"
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