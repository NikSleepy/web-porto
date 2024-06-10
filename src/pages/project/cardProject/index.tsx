import React from 'react'
import Project from '../../../mock/project.json';

export const CardProject = () => {
  return (
    
    <div className="py-10 px-14 flex flex-col items-center ">
        <div className="flex flex-col text-center gap-4 mb-20">
          {/* <p className="text-xl ">
            My <span className="text-[#00B68F]">Portfolio</span>
          </p> */}
          <p className="text-4xl font-bold">What I Made</p>
        </div>

        <div className="flex justify-center px-10  gap-6">
          {Project.map((items, index) => (
            <div
              key={index}
              className="w-[30%] bg-[#161B21] rounded-md grayscale hover:grayscale-0 hover:shadow-xl hover:shadow-[#00B68F] hover:scale-105 transition-transform duration-300 "
            >
              <img
                src={`/img/${items.img}`}
                alt={items.img}
                className="w-full rounded-t-md h-auto"
              />
              <div className="p-4">
                <p className="text-center text-2xl font-semibold py-2">
                  {items.tiltle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  )
}
