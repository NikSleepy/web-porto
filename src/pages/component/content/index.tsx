import React from 'react';

export const Content = () => {
  return (
    <div className="w-screen h-screen py-10 px-14 flex flex-col items-center">
      <div className="flex flex-col text-center gap-4 mb-20">
        <p className="text-xl ">
          My <span className="text-[#00B68F]">Portfolio</span>
        </p>
        <p className="text-4xl font-bold">What I do</p>
      </div>

      <div className="w-[80%] h-full px-10 grid grid-cols-3 gap-6">
        <div className="col-span-1 h-auto">
          <div
            className="bg-cover h-[50%] w-full"
            style={{ backgroundImage: `url('/img/circle_apps.png')` }}
          ></div>
          <p className='text-center text-2xl font-semibold py-2'>Circle Apss</p>
          <p className="text-lg text-justify">
            An app inspired by the social media platform Twitter, designed to
            facilitate interaction and communication within a more focused and
            organized community.
          </p>
        </div>
        <div className="col-span-1 h-auto">
          <div
            className="bg-cover h-[50%] w-full"
            style={{ backgroundImage: `url('/img/circle_apps.png')` }}
          ></div>
        </div>
        <div className="col-span-1 h-auto">
          <div
            className="bg-cover h-[50%] w-full"
            style={{ backgroundImage: `url('/img/circle_apps.png')` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
