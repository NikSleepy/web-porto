import React, { useEffect, useState } from 'react';
import { Navbar } from '../component/navbar';
import { Outlet, useLocation} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Layout = () => {
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

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  },[]);

  useEffect(() => {
    AOS.refresh();
  }, [location]);


  return (
    <div className="bg-[#1F252D] text-white w-screen h-auto ">
      <div
        className={`fixed flex justify-between top-0 w-full bg-transparent text-white py-10 px-14 backdrop-blur-lg transition-transform z-30 duration-300 ${
          isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <Navbar/>
      </div>

      <Outlet />
    </div>
  );
};
