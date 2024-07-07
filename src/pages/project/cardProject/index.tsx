import React from 'react';
import Project from '../../../mock/project.json';
import { useNavigate } from 'react-router-dom';

export const CardProject = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10 px-14 flex flex-col items-center ">
      <div className="flex flex-col text-center gap-4 mb-20">
        <p className="text-4xl font-bold">What I Made</p>
      </div>

      <div className="flex justify-center px-10  gap-6">
        {Project.map((items, index) => (
          <div
            key={index}
            className="w-[30%] h-[40%] bg-[#161B21] rounded-md grayscale hover:grayscale-0 hover:shadow-xl hover:shadow-[#00B68F] hover:scale-105 transition-transform duration-300 "
            onClick={() => navigate(`/project/${items.id}`)}
          >
            <div className='w-full rounded-t-md h-full flex justify-center'>
              <img
                src={`/img/${items.img}`}
                alt={items.img}
                className="w-full "
              />
            </div>
            <div className="p-4">
              <p className="text-center text-2xl font-semibold py-2">
                {items.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
