'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const getResponsiveSkew = (baseSkew, screenWidth) => {
  if (screenWidth === null) return 0;
  
  if (screenWidth < 640) {
    return +(baseSkew * 0.4).toFixed(2);
  } else if (screenWidth < 1284) {
    return +(baseSkew * 0.30).toFixed(2);
  } else if (screenWidth > 1280) {
    return +(baseSkew * -0.2).toFixed(2);
  }
  return +baseSkew.toFixed(2);
};

export default function TextScroll() {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, []);

  return (
    <main className='flex w-full h-full justify-center items-center overflow-hidden'>
    <div className='relative w-full h-auto' >
      <Slide 
        direction={'left'} 
        left={"-45%"} 
        progress={scrollYProgress}
        bgColor=" bg-gray dark:bg-lightyel text-light dark:text-dark"
        baseSkew={-4}
        speed={1.5}
      />
      <Slide 
        direction={'right'} 
        left={"-120%"} 
        progress={scrollYProgress}
        bgColor=" bg-violet dark:bg-lightblue text-light dark:text-dark font-bold "
        baseSkew={12}
        speed={2}
      />
      <Slide 
        direction={'left'}  
        left={"-60%"} 
        progress={scrollYProgress}
        bgColor=" bg-lightred dark:bg-lightgreen text-light dark:text-dark "
        baseSkew={0}
        speed={1.2}
      />
    </div>
    </main>
  );
}

const Slide = (props) => {
  const { width } = useWindowSize();
  const direction = props.direction == 'left' ? -1 : 1;
  const speed = props.speed || 1;
  const translateX = useTransform(
    props.progress, 
    [0, 1], 
    [150 * direction * speed, -150 * direction * speed]
  );
  
  const responsiveSkew = width === null ? 0 : getResponsiveSkew(props.baseSkew, width);
  
  return (
    <motion.div 
      style={{
        x: translateX, 
        left: props.left,
        position: 'relative'
      }} 
      className="relative flex whitespace-nowrap my-2 md:my-0"
    >
      <Phrase bgColor={props.bgColor} skew={responsiveSkew}/>
      <Phrase bgColor={props.bgColor} skew={responsiveSkew}/>
      <Phrase bgColor={props.bgColor} skew={responsiveSkew}/>
    </motion.div>
  );
}

const Phrase = ({bgColor, skew}) => {
  return (
    <div className={'px-[14px] flex items-center group'}>
      <div 
        className="transform transition-transform duration-300"
        style={{ transform: `rotate(${skew}deg)` }}
      >
        <p className={`p-2 m-2 md:m-0 px-4 rounded-full text-6xl lg:text-4xl sm:!text-[20px] font-suse ${bgColor} 
          text-dark  transition-all duration-300`}>
          ÜBER MICH - SOBRE MIM - 关于我 - SUR MOI - ABOUT ME - 私について - ОБО МНЕ - SOBRE MI - SCUSA MI -آسف مي - ABOUT ME - SOBRE MI - 关于我 - SUR MOI - ABOUT ME 
        </p>
      </div>
    </div>
  );
}