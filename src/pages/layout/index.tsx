import React, { useEffect, useState } from 'react';
import { Navbar } from '../component/navbar';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

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


  const getLocation = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/project':
        return 'Project';
      case '/contact':
        return 'Contact';
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#1F252D] text-white w-screen h-screen overflow-hidden">
      <div
        className={`fixed flex justify-between top-0 w-full bg-transparent text-white py-10 px-14 backdrop-blur-lg transition-transform duration-300 ${
          isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <Navbar bgClass={getLocation()} />
      </div>

      <Outlet />
    </div>
  );
};
