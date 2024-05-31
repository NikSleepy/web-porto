import React from 'react';

export const MyService = () => {
  return (
    <div className="w-screen h-screen py-10 px-14  bg-[#161B21]">
      <div className="flex flex-col gap-4 mb-20">
        <p className="text-xl ">
          My <span className="text-[#00B68F]">Services</span>
        </p>
        <p className="text-4xl font-bold">What I do</p>
      </div>

      <div className="flex justify-center gap-8">
        <div className="w-72  bg-[#1F252D] flex flex-col items-center rounded-lg p-6 ">
          <img src="/img/coding.png" alt="ui-ux" className="w-[50%] " />
          <div className="flex flex-col text-center py-4">
            <p className="text-xl font-semibold">Performance Optimization</p>
            <p className="text-justify mt-4">
              Optimize code and assets to ensure fast load times, including
              techniques like lazy loading and minification.
            </p>
          </div>
        </div>
        <div className="w-72  bg-[#1F252D] flex flex-col items-center rounded-lg p-6 ">
          <img src="/img/responsiveLogo.png" alt="ui-ux" className="w-[50%] " />
          <div className="flex flex-col text-center py-4">
            <p className="text-xl font-semibold">Responsive Web Design</p>
            <p className="text-justify mt-4">
              Developed a responsive design that adapts to different screen
              sizes and devices, ensuring a consistent and optimized user
              experience.
            </p>
          </div>
        </div>
        <div className="w-72  bg-[#1F252D] flex flex-col items-center rounded-lg p-6 ">
          <img src="/img/ui-ux.png" alt="ui-ux" className="w-[50%] " />
          <div className="flex flex-col text-center py-4">
            <p className="text-xl font-semibold">UI/UX Designer</p>
            <p className="text-justify mt-4">
              creating visually appealing and intuitive interfaces, and ensuring
              a pleasant and efficient user experience through user-focused
              research and design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
