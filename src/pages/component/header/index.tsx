import React from 'react';

export const Head = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover overflow-hidden">
      <div className="w-[70%] h-[60%]  p-6 rounded-md flex justify-between text-white ">
        <div className="w-[45%] flex flex-col gap-4 pt-12">
          <p className="text-xl "> Hello, <text className=' text-[#00B68F]'> I'm</text></p>
          <p className="text-4xl font-bold text-[#00B68F]">
            Nikri Aria Pratama
          </p>
          <p className="text-xl ">Web Developer</p>

          <p className="text-justify">
            A passionate and creative web developer. With over 1 year of
            experience in the industry, I have honed my skills in frontend, and
            always strive to deliver high-quality work that not only meets, but
            exceeds client expectations.
          </p>

          <button className="w-1/4 bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]">
            Let's Talk
          </button>
        </div>
        <div className="w-[45%] flex flex-col justify-center items-center">
          <img src="img/fotoMe.png" alt="hero" className="w-full " />
        </div>
      </div>
    </div>
  );
};
