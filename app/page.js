// 'use client'
// import About from "./about/page";
// import Logo from "./components/logo/page";
// import Contact from "./contact/page";
// import Projects from "./projects/page";
// import splitText from "./components/splitText/splitText";


// export default function Home() {

//   splitText();

//   return (
//     <main id="home-section" className="flex flex-col  w-full h-full z-100 ">

//       <section className="flex justify-center items-center flex-col h-screen w-full ">
//         <Logo />
//         <div className=" flex h-1/2 w-full  justify-center items-center font-handjet text-xl">
//           <div className="flex w-screen h-full justify-center items-center font-handjet font-500 text-xl lg:text-sm text-dark dark:text-light">
//             Op. 1
//           </div>
//         </div>

//         <div className="z-[-0] relative h-1/2 w-full  justify-center items-center font-handjet font-700 text-2xl text-dark">
//           <div className="h-full w-full flex justify-center items-center">
//             <div className="flex text-center justify-center  mt-[200px]">
//               <p id="split-text" className="absolute leading-[0] text-2xl tracking-[.25em] m-0 p-0 text-dark dark:text-light"> Transforming Ideas</p>
//               <p id="split-text" className="absolute leading-[0] text-2xl tracking-[.25em] m-0 p-0 text-dark dark:text-light">Into Reality</p>
//               <p id="split-text" className="absolute leading-[0] text-2xl tracking-[.25em] m-0 p-0 text-dark dark:text-light">Good, Nice</p>
//               <p id="split-text" className="absolute leading-[0] text-2xl tracking-[.25em] m-0 p-0 text-violet dark:text-yel"> And Cheap</p>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section id="about-section" className="flex justify-center items-center h-[200vh] w-full ">
//         <About />
//       </section>

//       <section id="projects-section" className="flex justify-center items-center h-screen w-full">
//         <Projects />
//       </section>

//       <section id="contact-section" className="flex justify-center items-center h-screen w-full">
//         <Contact />
//       </section>
//     </main>

//   );
// }

'use client'

import { useEffect, useState } from 'react';
import About from "@/app/about/page";
import Logo from "@/app/components/logo/page";
import Contact from "@/app/contact/page";
import splitText from "@/app/components/splitText/splitText";
import HighlightEffect1 from '@/app/aboutText/page';

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  splitText();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadePoint = 100;
      const maxScroll = 200;

      if (scrollY <= fadePoint) {
        setOpacity(1);
      } else if (scrollY > fadePoint && scrollY < maxScroll) {
        setOpacity(1 - (scrollY - fadePoint) / (maxScroll - fadePoint));
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <main className="flex flex-col w-full">
      {/* Primera sección - Home */}
      <section id="home-section" className="flex justify-center items-center flex-col h-screen w-full">
        <Logo />
        <div className="flex h-1/2 w-full justify-center items-center font-handjet text-xl">
          <div className="flex w-screen h-full justify-center items-center font-handjet font-500 text-xl lg:text-sm text-dark dark:text-light">
            Op. 1
          </div>
        </div>

        <div className="z-[-0] relative h-1/2 w-full justify-center items-center font-handjet font-700 text-2xl text-dark">
          <div className="flex h-full w-full justify-center items-center">
            <div className="flex text-center justify-center mt-[200px]">
            </div>
          </div>
        </div>
      </section>

      <section id="about2-section" className="flex justify-center items-center min-h-screen w-full py-20">
        <About />
      </section>

      <section className="flex justify-center items-start min-h-screen w-full py-20">
        <div className="container mx-auto">
          <HighlightEffect1 />
        </div>
      </section>

      <section id="projects-section" className="flex relative justify-center items-center min-h-screen w-full py-20">
        Proyectos
      </section>

      <section id="experience-section" className="flex relative justify-center items-center min-h-screen w-full py-20">
        Experience
      </section>

      <section id="contact-section" className="flex justify-center items-center min-h-screen w-full py-20">
        <Contact />
      </section>
    </main>
  );
}
