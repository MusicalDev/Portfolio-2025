'use client'

import { useEffect, useState } from 'react';
import Logo from "./components/logo/page";
import Contact from "./contact/page";
import splitText from "./components/splitText/splitText";
import HighlightEffect1 from './aboutText/page';
import { useTranslations } from './components/hooks/useTranslations';
import AboutImage from './components/aboutImage/page';
import Slide from './components/slideText/page';

export default function Home() {
  const t = useTranslations();

  const split1 = t('HomePage.split1');
  const split2 = t('HomePage.split2');
  const split3 = t('HomePage.split3');
  const split4 = t('HomePage.split4');

  useEffect(() => {
    splitText();
  }, [split1, split2, split3, split4]);
  const [opacity, setOpacity] = useState(1);



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
      <section id="home-section" className="flex justify-center items-center flex-col h-screen w-full">
        <Logo />
        <div className="flex h-1/2 w-full justify-center items-center font-handjet text-xl">
          <div className="flex w-screen h-full justify-center items-center font-handjet font-500 text-xl lg:text-sm text-dark dark:text-light">
            Op. 1
          </div>
        </div>

        <div className="z-[-0] relative h-full w-full font-handjet font-700 text-2xl text-dark">
          <div className="absolute bottom-8 w-full flex justify-center items-center">
            <div className="flex text-center justify-center">
              <p className="split-text absolute leading-[0] text-2xl tracking-[.05em] m-0 p-0 text-dark dark:text-lightyel">{split1}</p>
              <p className="split-text absolute leading-[0] text-2xl tracking-[.05em] m-0 p-0 text-dark dark:text-lightyel">{split2}</p>
              <p className="split-text absolute leading-[0] text-2xl tracking-[.05em] m-0 p-0 text-red dark:text-yel">{split3}</p>
              <p className="split-text absolute leading-[0] text-2xl tracking-[.05em] m-0 p-0 text-violet dark:text-lightred">{split4}</p>
            </div>
          </div>
        </div>
      </section>



      <section className="flex flex-col justify-center items-center sm:h-[40vh] h-[70vh] w-full">
        <div className='flex justify-center items-center h-full sm:h-full w-full'><Slide />
        </div>
      </section>

      <section id="about2-section" className="flex flex-col justify-center items-center h-full w-full">
        <div id="about2-section" className='flex justify-center items-center sm:h-[80vh] h-screen w-full py-0'><AboutImage />
        </div>

      </section>

      <section className="flex justify-center items-start h-full w-full">
        <div className="container mx-auto">
          <HighlightEffect1 />
        </div>
      </section>

      <section id="projects-section" className="flex relative justify-center items-center min-h-screen w-full py-20">
        {t('projects')}
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
