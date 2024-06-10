import React, { useEffect, useState } from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = ({ bgClass }: { bgClass: string }) => {

  return (
    <>
      <div className="flex justify-between items-center w-[15%]">
        <img src="/img/logoN.png" alt="logo" className="w-[50px] h-auto" />
        <text className="text-4xl font-semibold ml-4">Portfolio</text>
      </div>

      <ul className="flex gap-4 text-xl w-[80%] justify-center items-center">
        <li className={`${bgClass == 'Home' ?  'text-white scale-105' : 'text-[#00B68F]' } hover:text-white`}>
          <Link to={'/'}>Home</Link>
        </li>
        <li className={`${bgClass == 'Project' ?  'text-white scale-105' : 'text-[#00B68F]' } hover:text-white `}>
          {' '}
          <Link to={'/project'}>Project</Link>
        </li>
        <li className={`${bgClass == 'Contact' ?  'text-white scale-105' : 'text-[#00B68F]' } hover:text-white `}>
          {' '}
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 w-[15%]">
        <a href="https://github.com/NikSleepy">
          <IoLogoGithub size={45} color="#00B68F" />
        </a>
        <a href="">
          <FaLinkedin size={45} color="#00B68F" />
        </a>
      </div>
    </>
  );
};
