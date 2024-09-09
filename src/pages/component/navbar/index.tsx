import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [ open, setOpen ] = useState(false);

  
  return (
    <>
      <div className="flex justify-between items-center w-[15%]" data-aos="fade-down">
        <img src="/img/logoN.png" alt="logo" className="w-[50px] h-auto" />
        <text className="sm:text-xl md:text-2xl lg:text-4xl font-semibold ml-4">Portfolio</text>
      </div>

      <ul className="hidden md:flex gap-4 text-xl w-[80%] justify-center items-center" data-aos="fade-down">
        <li className="text-[#00B68F] cursor-pointer">
          <Link to="header" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#00B68F] cursor-pointer">
          <Link to="project" spy={true} smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="text-[#00B68F] cursor-pointer">
          <Link to="contact" spy={true} smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden md:flex justify-center gap-4 w-[15%]" data-aos="fade-down">
        <a href="https://github.com/NikSleepy">
          <IoLogoGithub size={45} color="#00B68F" />
        </a>
        <a href="">
          <FaLinkedin size={45} color="#00B68F" />
        </a>
      </div>

      <div className='md:hidden' data-aos='fade-down'>
        <button onClick={()=> setOpen(!open)}>
        {open ? <FiX size={35} color='#00B68F'/> : <FiMenu size={35} color='#00B68F' />}
        </button>
      </div>

      {open && (
        <ul data-aos='fade-down' className="md:hidden absolute top-28  right-0 w-1/2 bg-[#1F252D] shadow-lg flex flex-col  items-center gap-4 text-xl py-4 z-50 rounded-md">
          <li className="text-[#00B68F] cursor-pointer">
            <Link to="header" spy={true} smooth={true} duration={500} onClick={()=> setOpen(!open)}>
              Home
            </Link>
          </li>
          <li className="text-[#00B68F] cursor-pointer">
            <Link to="project" spy={true} smooth={true} duration={500} onClick={()=> setOpen(!open)}>
              Project
            </Link>
          </li>
          <li className="text-[#00B68F] cursor-pointer">
            <Link to="contact" spy={true} smooth={true} duration={500} onClick={()=> setOpen(!open)}>
              Contact
            </Link>
          </li>

          {/* Social Icons in the dropdown */}
          <div className="flex justify-center gap-4">
            <a href="https://github.com/NikSleepy">
              <IoLogoGithub size={35} color="#00B68F" />
            </a>
            <a href="">
              <FaLinkedin size={35} color="#00B68F" />
            </a>
          </div>
        </ul>
      )}
    </>
  );
};
