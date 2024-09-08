import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center w-[15%]" data-aos="fade-down">
        <img src="/img/logoN.png" alt="logo" className="w-[50px] h-auto" />
        <text className="text-4xl font-semibold ml-4">Portfolio</text>
      </div>

      <ul className="flex gap-4 text-xl w-[80%] justify-center items-center" data-aos="fade-down">
        <li className="text-[#00B68F] cursor-pointer">
          {/* <a href="#header">Home</a> */}
          <Link to="header" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="text-[#00B68F] cursor-pointer">
          {' '}
          {/* <a href="#project">Project</a> */}
          <Link to="project" spy={true} smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className="text-[#00B68F] cursor-pointer">
          {' '}
          {/* <a href="#contact">Contact</a> */}
          <Link to="contact" spy={true} smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 w-[15%]" data-aos="fade-down">
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
