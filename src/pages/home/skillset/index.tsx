import Data from '../../../mock/skillset.json';
export const Skillset = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center  bg-[#161B21]'>
        <p className='text-4xl font-bold text-[#00B68F] py-16'> Experience</p>

        <div className='w-[80%] h-[60%] flex flex-wrap justify-center items-center gap-2'>

            {Data?.map((items, index) => (
                
            <div key={index} className='w-[15%] h-60 flex flex-col justify-center items-center gap-3 ' >
                <img src={`/icons/${items?.icon}`} alt="icon" className='w-32 h-[50%]'/>

                <p className='text-2xl font-semibold'>{items?.name}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
