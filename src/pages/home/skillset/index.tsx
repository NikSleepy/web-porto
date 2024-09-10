import Data from '../../../mock/skillset.json';
export const Skillset = () => {
  return (
    <div className='w-screen h-auto flex flex-col items-center  bg-[#161B21]'>
        <p className='text-4xl font-bold text-[#00B68F] py-16'> Experience</p>

        <div className='w-[80%] h-auto flex flex-wrap justify-center items-center gap-6 md:gap-2 pb-10'>

            {Data?.map((items, index) => (
                
            <div data-aos="fade-up" key={index} className='w-20 md:w-40 h-40  md:h-60 flex flex-col justify-center items-center gap-3 ' >
                <img src={`/icons/${items?.icon}`} alt="icon" className='w-32 h-[50%]'/>

                <p className='text-2xl font-semibold'>{items?.name}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
