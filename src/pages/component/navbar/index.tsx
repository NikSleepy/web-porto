import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed flex justify-between top-0 w-full bg-transparent border-b-2 border-current text-white p-4 transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div>
        <text className="text-5xl font-bold bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          N
        </text>
        <text className='text-4xl font-bold'>ikry</text>
      </div>
      <div className='flex gap-4'>
        <a href="https://github.com/NikSleepy">
        <IoLogoGithub size={45} />
        </a>
        <a href="">
          <FaLinkedin size={45} />
        </a>
        <a href=""></a>
      </div>
    </div>
  );
};
