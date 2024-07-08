import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react';
import { Link } from 'react-router-dom';

export const HorizontalScroll = () => {
  const sectionRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[300vw] flex relative ">
          <div className=" w-[100vw] h-screen flex justify-center items-center">
            <div className="w-[80%] ">
              <div className="flex h-72 rounded-lg justify-between">
                <div className="w-[45%] flex flex-col ">
                  <p className="text-3xl font-semibold text-[#00B68F]">
                    Circle Apss
                  </p>
                  <p className="py-6 text-lg text-justify">
                    An app inspired by the social media platform Twitter,
                    designed to facilitate interaction and communication within
                    a more focused and organized community. Its main features
                    include short message posting, multimedia content sharing,
                    and retweet and like mechanisms similar to Twitter. Circle
                    Apps aims to create an environment for sharing thoughts and
                    interacting with people who share similar interests.
                  </p>

                  <div className="w-1/4 flex justify-center  bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]">
                    <button>
                      <Link to={'/project/1'}>See More</Link>
                    </button>
                  </div>
                </div>
                <img
                  src="/img/circle_apps.png"
                  alt="circle"
                  className="w-[45%] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className=" w-[100vw] h-screen flex justify-center items-center">
            <div className="w-[80%] ">
              <div className="flex h-72 rounded-lg justify-between">
                <div className="w-[45%] flex flex-col ">
                  <p className="text-3xl font-semibold text-[#00B68F]">
                    Micro Logic
                  </p>
                  <p className="py-6 text-lg text-justify">
                    A website that has some simple but useful features, such as
                    calculating duration, converting currencies, and word
                    scrambling games. With an intuitive interface and diverse
                    functionality, Micro Logic helps users complete everyday
                    tasks more efficiently and enjoyably.
                  </p>

                  <div className="w-1/4 flex justify-center  bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]">
                    <button>
                      <Link to={'/project/2'}>See More</Link>
                    </button>
                  </div>
                </div>
                <img
                  src="/img/Micro.png"
                  alt="circle"
                  className="w-[45%] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className=" w-[100vw] h-screen flex justify-center items-center ">
            <div className="w-[80%] ">
              <div className="flex h-72 rounded-lg justify-between">
                <div className="w-[45%] flex flex-col ">
                  <p className="text-3xl font-semibold text-[#00B68F]">
                    Trivia Apps
                  </p>
                  <p className="py-6 text-lg text-justify">
                    A multiplayer application to guess a sound from categories
                    such as animals, musical instruments, nature sounds, and
                    everyday objects. Players select a category, listen to the
                    sound played, and choose the most appropriate answer from
                    several options provided. The app offers tiered difficulty
                    levels, a points system and leaderboards to increase
                    competition.
                  </p>
                  <div className="w-1/4 flex justify-center  bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]">
                    <button>
                      <Link to={'/project/3'}>See More</Link>
                    </button>
                  </div>
                </div>
                <div className=" w-[65%] flex justify-center  gap-4">
                  <img
                    src="/img/trivia.png"
                    alt="circle"
                    className="w-auto h-[80%] rounded-md"
                  />
                  <img
                    src="/img/trivia2.png"
                    alt="circle"
                    className="w-auto h-[80%] rounded-md"
                  />
                  <img
                    src="/img/trivia3.png"
                    alt="circle"
                    className="w-auto h-[80%] rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
