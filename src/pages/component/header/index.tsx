import React from 'react';

export const Head = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url('img/bg-3.webp')` }}
    >
      <div className="w-[70%] h-[60%] backdrop-blur-lg p-6 rounded-md flex justify-between text-white">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <text className="text-6xl">Hi I'm Nikri</text>
          <p className="text-2xl">I'm Web Developer</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <img src="img/me.png" alt="hero" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};
