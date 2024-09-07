import React from 'react';
import { FaDownload } from 'react-icons/fa';

export const Head = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/CV_Nikri Aria Pratama.pdf';
    link.download = 'CV_Nikri Aria Pratama.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover overflow-hidden">
      <div className="w-[80%] h-[60%]  p-6 rounded-md flex justify-between text-white ">
        <div className="w-[45%] flex flex-col gap-4 py-10">
          <p className="text-xl ">
            {' '}
            Hello, <text className=" text-[#00B68F]"> I'm</text>
          </p>
          <p className="text-4xl font-bold text-[#00B68F]">
            Nikri Aria Pratama
          </p>
          <p className="text-xl font-semibold">Web Developer || Fullstack Developer</p>

          <p className="text-justify text-lg">
            A passionate and creative web developer. With over 1 year of
            experience in the industry, I have honed my skills in frontend, and
            always strive to deliver high-quality work that not only meets, but
            exceeds client expectations.
          </p>

          <div className="flex gap-4">
            <button
              className="w-1/4 bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]"
              onClick={() =>
                (window.location.href = 'https://wa.me/628986969322')
              }
            >
              Let's Talk
            </button>

            <button
              className="flex justify-center items-center gap-2 bg-[#00B68F] text-white font-semibold rounded-md py-2 my-4 px-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]"
              onClick={handleDownload}
            >
              Download CV
              <FaDownload size={20} />
            </button>
          </div>
        </div>
        <div className="w-[45%] flex flex-col justify-center items-center ">
          <img src="img/profile.png" alt="hero" className="w-screen h-auto" />
        </div>
      </div>
    </div>
  );
};
