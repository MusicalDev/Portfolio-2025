'use client'
import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

const EmojiParallax = () => {
  const emojiRef = useRef(null);

  useEffect(() => {
    const options = {
      invertX: false,
      invertY: false,
      limitX: 100,
      limitY: 100
    };

    if (emojiRef.current) {
      const parallax = new Parallax(emojiRef.current, options);
      return () => parallax.disable();
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <ul
        id="emoji"
        ref={emojiRef}
        className="relative w-[100px] h-[100px] lg:w-[88px] lg:h-[88px] sm:!w-[65px] sm:!h-[65px] transform translate-3d-0 
                  scale-75 bottom-[27px] right-4 md:bottom-5 md:right-2"
      >
        <li className="layer absolute w-full h-full" data-depth="0.2">
          <div className="absolute inset-0 m-auto w-full h-full bg-[#feca32] rounded-full shadow-[inset_rgba(0,0,0,0.4)_0_0_30px]md:shadow-[inset_rgba(0,0,0,0.4)_0_0_3px] ">
          </div>
        </li>
        <li className="layer absolute w-full h-full" data-depth="0.3">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-transparent to-transparent rounded-full opacity-80">
          </div>
        </li>
        <li className="layer absolute w-full h-full" data-depth="0.8">
          <div className="absolute top-[32%] right-[30%] w-[10%] h-[15%] bg-[#a1620f] rounded-[100%] shadow-[inset_rgba(0,0,0,0.5)_0_6px_12px,rgba(255,255,255,0.2)_0_2px_0_2px] md:shadow-[inset_rgba(0,0,0,0.5)_0_6px_12px,rgba(255,255,255,0)_0_2px_0_2px] animate-[blink_3s_infinite]">
          </div>
        </li>
        <li className="layer absolute w-full h-full" data-depth="0.8">
          <div className="absolute top-[32%] left-[30%]  w-[10%] h-[15%] bg-[#a1620f] rounded-[100%] shadow-[inset_rgba(0,0,0,0.5)_0_6px_12px,rgba(255,255,255,0.2)_0_2px_0_2px] md:shadow-[inset_rgba(0,0,0,0.5)_0_6px_12px,rgba(255,255,255,0)_0_2px_0_2px]  animate-[blink_3s_infinite]">
          </div>
        </li>
        <li className="layer absolute w-full h-full" data-depth="0.8">
          <div className="mouth absolute top-[45%] left-1/2 -translate-x-1/2 w-[15%] h-[25%] md:w-[15%] overflow-hidden transform translate-3d-0">
            <div className="absolute inset-0 top-2 bg-[#6e440b] rounded-full shadow-[rgba(255,255,255,0.25)_0_3px_0]" />
            <div className="absolute  bottom-1.5 md:bottom-[3px] inset-x-0  h-[60%] rounded-full w-[100%] lg:w-[125%] bg-[#feca32] left-[-0.02vw] lg:left-[-0.2vw]" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EmojiParallax;
