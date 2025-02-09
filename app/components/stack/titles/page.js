// import React, { useRef } from 'react'
// import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

// const TitleScroller = ({ data, setSelectedProject }) => {
//     return (
//         <div className="relative w-full h-full  ">
//             {data.map((project, i) => (
//                 <Title
//                     key={i}
//                     data={{ ...project, i }}
//                     setSelectedProject={setSelectedProject}
//                 />
//             ))}
//         </div>
//     )
// }

// function Title({ data, setSelectedProject }) {
//     const { title, speed, i } = data;
//     const container = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start end', `${30 / speed}vw end`]
//     });

//     const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
//     const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

//     return (
//         <div
//             ref={container}
//             className=" relative flex   z-[2]"
//         >
//             <div
//                 className="inline-block  pl-[10%] relative"
//                 onMouseOver={() => setSelectedProject(i)}
//                 onMouseLeave={() => setSelectedProject(null)}
//             >
//                 <motion.p
//                     className="inline-block text-gray dark:text-yel uppercase font-bold text-[7.3vw] leading-[8.5vw] md:leading-[13vw] m-0 relative z-[2]"
//                     style={{ clipPath: clip }}
//                 >
//                     {title}
//                 </motion.p>
//                 <p className="block absolute top-0 text-[#b7ab98] z-[1] uppercase font-bold text-[7.3vw] leading-[8.5vw] md:leading-[13vw] m-0 ">
//                     {title}
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default TitleScroller

// import React from 'react'
// import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

// const TitleScroller = ({ data, setSelectedProject }) => {
//     return (
//         <div className="relative w-full border-t border-gray dark:border-graylight">
//             {data.map((project, i) => (
//                 <Title
//                     key={i}
//                     data={{ ...project, i }}
//                     setSelectedProject={setSelectedProject}
//                 />
//             ))}
//         </div>
//     )
// }

// function Title({ data, setSelectedProject }) {
//     const { title, speed, i } = data;

//     const { scrollYProgress } = useScroll();

//     // Clip path effect
//     const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
//     const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

//     // Color transformation based on scroll
//     const textColor = useTransform(
//         scrollYProgress,
//         [0, 0.5, 1],
//         ['#808080', '#FFD700', '#808080']
//     );

//     return (
//         <div
//             className="flex border-b border-gray dark:border-graylight cursor-default relative z-[2]"
//             onMouseOver={() => setSelectedProject(i)}
//             onMouseLeave={() => setSelectedProject(null)}
//         >
//             <div className="inline-block pl-[10%] relative">
//                 <motion.p
//                     className="inline-block text-gray dark:text-yel uppercase font-bold text-[8vw] leading-[7.5vw] m-0 relative z-[2]"
//                     style={{ 
//                         clipPath: clip,
//                         color: textColor
//                     }}
//                 >
//                     {title}
//                 </motion.p>
//                 <p className="block absolute top-0 text-[#b7ab98] z-[1] uppercase font-bold text-[8vw] leading-[7.5vw] m-0">
//                     {title}
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default TitleScroller

import React, { useEffect, useState } from 'react';

const TitleScroller = ({ data, setSelectedProject }) => {
  return (
    <div className="relative w-full h-full">
      {data.map((project, i) => (
        <Title
          key={i}
          data={{ ...project, i }}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </div>
  );
};

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;

  // Estado para almacenar el progreso del scroll
  const [scrollProgress, setScrollProgress] = useState(0);

  // Hook useEffect para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calculamos el progreso del scroll como un porcentaje
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Calcular el porcentaje del scroll
      const progress = Math.min((scrollY / (docHeight - windowHeight)) * 100, 100);

      // Actualizar el estado del progreso
      setScrollProgress(progress);
    };

    // Añadir el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calcular el valor del clip en función del progreso del scroll
  const clipProgress = 100 - scrollProgress;
  const clipStyle = {
    clipPath: `inset(0 ${clipProgress}% 0 0)`
  };

  return (
    <div className="relative flex z-[2]">
      <div
        className="inline-block pl-[10%] relative"
        onMouseOver={() => setSelectedProject(i)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        {/* Título en color con efecto de scroll */}
        <p
          className="inline-block text-gray dark:text-yel uppercase font-bold text-[7.3vw] leading-[8.5vw] md:leading-[13vw] m-0 relative z-[2]"
          style={clipStyle}
        >
          {title}
        </p>
        {/* Título en gris sin efecto */}
        <p className="block absolute top-0 text-[#b7ab98] z-[1] uppercase font-bold text-[7.3vw] leading-[8.5vw] md:leading-[13vw] m-0">
          {title}
        </p>
      </div>
    </div>
  );
}

export default TitleScroller;
