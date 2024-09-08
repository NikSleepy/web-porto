import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/css/NoScrollbar.css';

interface Stack {
  name: string;
  icon: string;
}
interface Project {
  id: number;
  img: string;
  title: string;
  frontend?: Stack[];
  backend?: Stack[];
  content: string;
}
export const ProjectCard = ({ props }: { props: Project }) => {
  const [show, setShow] = React.useState(false);
  
  return (
    <div className=" w-[100vw] h-screen flex justify-center items-center">
      <div className="w-[80%] ">
        <div className="flex h-80 rounded-lg justify-between">
          <div data-aos="fade-right" className="w-[45%] h-80 flex flex-col ">
            {show ? (
              <p className="text-3xl font-semibold text-[#00B68F] mb-6">
                Stact Tecnologies
              </p>
            ) : (
              <p className="text-3xl font-semibold text-[#00B68F] mb-6">
                {props.title}
              </p>
            )}

            <div className="flex flex-col w-full h-96 text-lg">
              {show ? (
                <div  className="flex gap-20 p-3">
                  <div data-aos='fade-right'>
                    <p className="py-2 text-xl font-semibold">Frontend</p>

                    <ul  className="flex flex-col gap-1">
                      {props?.frontend?.map((item) => (
                        <li>
                          <div className="flex gap-2 w-6 h-6 ">
                            <img
                              src={`/icons/${item?.icon}`}
                              alt="icon"
                              className="bg-cover"
                            />
                            <p>{item?.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div data-aos='fade-right'>
                    <p className="py-2 text-xl font-semibold">Backend</p>

                    {props?.backend?.length !== 0 ? (
                      <ul className="flex flex-col gap-1">
                        {props?.backend?.map((item) => (
                          <li>
                            <div className="flex gap-2 w-6 h-6 ">
                              <img
                                src={`/icons/${item?.icon}`}
                                alt="icon"
                                className="bg-cover"
                              />
                              <p>{item?.name}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex flex-col items-center gap-2 w-auto h-6 text-md ">
                        <p>No Backend</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-full h-44 overflow-y-auto hide-scrollbar">
                  <p data-aos='fade-right' className=" text-lg text-justify ">{props?.content}</p>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <div className="w-1/4 flex justify-center  bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]">
                <button>
                  <Link to={'/'}>See More</Link>
                </button>
              </div>
              <div className="w-1/4 flex justify-center  bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]">
                {show ? (
                  <button onClick={() => setShow(false)}>Detail</button>
                ) : (
                  <button onClick={() => setShow(true)}>Tech Stack</button>
                )}
              </div>
            </div>
          </div>
          <img
            data-aos="fade-left"
            src={`img/${props?.img}`}
            alt="circle"
            className="w-[45%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
