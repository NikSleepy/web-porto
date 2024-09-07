import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react';
// import { Link } from 'react-router-dom';
import { ProjectCard } from './components/ProjectCard';
import Data from '../../../mock/project.json';

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
          {Data.map((item, index)=> (
            <ProjectCard key={index} props={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
