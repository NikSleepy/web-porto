import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react';

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
                </div>
                <img
                  src="/img/circle_apps.png"
                  alt="circle"
                  className="w-[45%] rounded-md"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
