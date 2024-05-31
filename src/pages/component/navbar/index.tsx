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
      className={`fixed flex justify-between top-0 w-full bg-transparent text-white py-10 px-14 backdrop-blur-lg transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center">
        <img src="/img/logoN.png" alt="logo" className="w-[50px] h-auto" />
        <text className="text-4xl font-semibold ml-4">Portfolio</text>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/NikSleepy">
          <IoLogoGithub size={45} color="#00B68F" />
        </a>
        <a href="">
          <FaLinkedin size={45} color="#00B68F" />
        </a>
        <a href=""></a>
      </div>
    </div>
  );
};
