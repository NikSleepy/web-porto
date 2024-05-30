import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React from 'react'


export const HorizontalScroll = () => {
    const sectionRef = React.useRef(null);
    const triggerRef = React.useRef(null);
    
    gsap.registerPlugin(ScrollTrigger);

    React.useEffect(() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: '-300vw',
            ease: 'none',
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top top',
                end: '2000 top',
                scrub: true,
                pin: true
            }
        })

        return () => {
            pin.kill()
        }

    }, []);

  return (
    <section className='overflow-hidden'>
        <div ref={triggerRef}>
            <div ref={sectionRef} className='h-screen w-[400vw] flex relative '>
                <div className='bg-red-500 w-[100vw] h-screen'>section 1</div>
                <div className='bg-green-500 w-[100vw] h-screen'>section 2</div>
                <div className='bg-blue-500 w-[100vw] h-screen'>section 3</div>
                <div className='bg-yellow-500 w-[100vw] h-screen'>section 4</div>
            </div>
        </div>
    </section>
  )
}
