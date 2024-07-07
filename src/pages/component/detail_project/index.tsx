import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../mock/project.json';

interface Stack {
  name: string;
}
interface Project {
  id: number;
  img: string;
  title: string;
  frontend?: Stack[];
  backend?: Stack[]; 
  content: string;
}

export const DetailProject = () => {
  const [item, setItem] = React.useState<Project | null>(null);
  const { id } = useParams();

  React.useEffect(() => {
    if (id != undefined) {
      const index = parseInt(id);
      setItem(data[index - 1]);
    }
  }, []);

  console.log(id);
  return (
    <div className="w-screen h-auto flex flex-col items-center pt-[85px]">
      <div className='py-10 px-14 '>
        <p className="text-4xl font-bold">{item?.title}</p>
      </div>

      <div className='w-[80%] flex flex-col items-center gap-20 p-5'>
        <img src={`/img/${item?.img}`} alt="gamabr" className="w-2/3 rounded-lg" />

        <div className='w-[60%]'>
          <p className='text-center text-xl'>{item?.content}</p>
        </div>

        <div className='w-[70%] flex justify-between '>
            <div className='w-[40%] flex flex-col items-center gap-2'>
              <p className='text-center text-2xl font-semibold'>Frontend</p>
              <ul>
                {item?.frontend?.map((items, index) => (
                  <li key={index} className='text-lg'>{items.name}</li>
                ))}
              </ul>
            </div>
            <div className='w-[40%] flex flex-col items-center gap-2'>
              <p className='text-center text-2xl font-semibold'>Backend</p>
              <ul>
                {item?.backend?.map((items, index) => (
                  <li key={index} className='text-lg'>{items.name}</li>
                ))}
              </ul>
            </div>
            
        </div>
      </div>
    </div>
  );
};