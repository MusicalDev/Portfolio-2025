import React from 'react'

export const MenuButton = ({ children, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className='group relative p-0 cursor-pointer overflow-hidden h-auto leading-0 text-[22px] lg:text-[1.1rem] font-650'
    >
      <span className='inline-block p-0 transition  ease-out group-hover:-translate-y-[100%] text-violet dark:text-red'>
        {children}
      </span>
      <span className='absolute text-red dark:text-yel left-0 inline-block translate-y-[100%] rotate-4 p-0 transition ease-out group-hover:translate-y-0 group-hover:rotate-0'>
        {children}
      </span>
    </a>
  );
};