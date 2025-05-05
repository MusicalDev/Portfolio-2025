import React, { useEffect, useState, useRef } from 'react';

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
  const titleRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      
      const rect = titleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        progress = ((windowHeight - rect.top) / (windowHeight + rect.height)) * 100;
        
        progress = progress * (speed || 1);
        
        progress = Math.max(0, Math.min(100, progress));
      } else if (rect.top < 0) {
        progress = 100;
      }
      
      setFillProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const clipStyle = {
    clipPath: `inset(0 ${100 - fillProgress}% 0 0)`
  };

  return (
    <div className="relative flex z-[2]" ref={titleRef}>
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