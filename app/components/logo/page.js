// 'use client'
// import { useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Logo() {
//     const [isSmallScreen, setIsSmallScreen] = useState(false);
//     const { scrollY } = useScroll();

//     useEffect(() => {
//         const handleResize = () => {
//             setIsSmallScreen(window.innerWidth < 1023);
//         };

//         handleResize();
//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     const fadeIn = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 duration: 1.5,
//                 ease: "easeInOut",
//             },
//         },
//     };

//     // Ajustar los valores de transformación para que el movimiento termine más tarde en móviles
//     const x = useTransform(scrollY, [0, isSmallScreen ? 1000 : 800], ['0%', isSmallScreen ? '-35%' : '-40%']);
//     const y = useTransform(scrollY, [0, isSmallScreen ? 1000 : 800], ['0%', isSmallScreen ? '-45vh' : '-45vh']);
//     const scale = useTransform(scrollY, [0, isSmallScreen ? 1000 : 800], [1, isSmallScreen ? 0.2 : 0.18]);

//     // Opacidad para todo el SVG (afecta a ambos textos en móvil)
//     const svgOpacity = useTransform(
//         scrollY,
//         [0, isSmallScreen ? 800 : 500, isSmallScreen ? 1000 : 800],
//         [1, isSmallScreen ? 0.3 : 1, isSmallScreen ? 0 : 1]
//     );

//     // Opacidad adicional solo para "Web Dev." en pantallas grandes
//     const webDevOpacity = useTransform(
//         scrollY,
//         [0, 500, 800],
//         [1, 0.5, 0]
//     );

//     return (
//         <main className="absolute h-full w-full flex-col font-suse uppercase p-0 m-0">
//             <motion.div
//                 className="flex justify-center items-center h-full w-full"
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeIn}
//             >
//                 <motion.svg
//                     style={{
//                         x,
//                         y,
//                         scale,
//                         opacity: svgOpacity,
//                     }}
//                     transition={{
//                         duration: 0.5,
//                         ease: "easeInOut",
//                     }}
//                     viewBox="0 0 900 120"
//                     preserveAspectRatio="xMidYMid meet"
//                     className="fixed w-full h-[400px] text-8xl flex justify-center items-center"
//                 >
//                     <text
//                         x="50%"
//                         y="50%"
//                         dy={"0"}
//                         textAnchor="middle"
//                         className="fill-dark stroke-dark dark:fill-light dark:stroke-light/80 w-full font-300 animate-animateStrokeLight dark:animate-animateStrokeDark tracking-wider "
//                     >
//                         Ulises Oreste
//                     </text>

//                     <motion.text
//                         x="50%"
//                         y="120%"
//                         textAnchor="middle"
//                         className="fill-gray stroke-gray dark:fill-light2 dark:stroke-light2/80 w-full font-300 animate-animateStrokeLight dark:animate-animateStrokeDark tracking-wider z-50 text-6xl"
//                         style={{ opacity: isSmallScreen ? 1 : webDevOpacity }}
//                     >
//                         Web Dev.
//                     </motion.text>
//                 </motion.svg>
//             </motion.div>
//         </main>
//     );
// }
'use client'
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Logo() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1023);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
    };

    // Definimos los rangos basados en el tamaño de pantalla
    const mobileScrollRange = [0, 400]; 
    const desktopScrollRange = [0, 800];
    const scrollRange = isSmallScreen ? mobileScrollRange : desktopScrollRange;
    
    // Creamos todos los hooks useTransform en el nivel superior
    const x = useTransform(
        scrollY, 
        scrollRange, 
        ['0%', isSmallScreen ? '-35%' : '-40%']
    );
    
    const y = useTransform(
        scrollY, 
        scrollRange, 
        ['0%', isSmallScreen ? '-45vh' : '-45vh']
    );
    
    const scale = useTransform(
        scrollY, 
        scrollRange, 
        [1, isSmallScreen ? 0.2 : 0.18]
    );

    // Opacidad para todo el SVG
    const svgOpacity = useTransform(
        scrollY,
        isSmallScreen ? [0, 250, 400] : [0, 500, 800],
        isSmallScreen ? [1, 0.5, 0] : [1, 0.5, 1]
    );

    // Opacidad solo para "Web Dev."
    const webDevOpacity = useTransform(
        scrollY,
        [0, 500, 800],
        [1, 0.5, 0]
    );

    // Determinar qué opacidad usar para "Web Dev." dependiendo del tamaño de pantalla
    const textOpacity = isSmallScreen ? svgOpacity : webDevOpacity;

    // Re-renderizar cuando cambia el tamaño de pantalla
    useEffect(() => {
        // Este efecto está vacío pero forzará un re-renderizado cuando isSmallScreen cambie
        // lo que hará que todos los hooks useTransform se recalculen con los nuevos valores
    }, [isSmallScreen]);

    return (
        <main className="absolute h-full w-full flex-col font-suse uppercase p-0 m-0">
            <motion.div
                className="flex justify-center items-center h-full w-full"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <motion.svg
                    style={{
                        x,
                        y,
                        scale,
                        opacity: svgOpacity,
                    }}
                    transition={{
                        duration: isSmallScreen ? 0.2 : 0.5,
                        ease: "easeOut",
                    }}
                    viewBox="0 0 900 120"
                    preserveAspectRatio="xMidYMid meet"
                    className="fixed w-full h-[400px] text-8xl flex justify-center items-center"
                >
                    <text
                        x="50%"
                        y="50%"
                        dy={"0"}
                        textAnchor="middle"
                        className="fill-dark stroke-dark dark:fill-light dark:stroke-light/80 w-full font-300 animate-animateStrokeLight dark:animate-animateStrokeDark tracking-widest sm:text-[120px] sm:tracking-normal sm:dark:fill-yel sm:dark:stroke-yel"
                    >
                        Ulises Oreste
                    </text>

                    <motion.text
                        x="50%"
                        y="120%"
                        textAnchor="middle"
                        className="fill-gray stroke-gray dark:fill-light2 dark:stroke-light2/80 w-full font-300 animate-animateStrokeLight dark:animate-animateStrokeDark tracking-widest z-50 text-6xl sm:dark:fill-yel/90 sm:dark:stroke-yel/90 sm:text-7xl"
                        style={{ opacity: textOpacity }}
                    >
                        Web Dev.
                    </motion.text>
                </motion.svg>
            </motion.div>
        </main>
    );
}