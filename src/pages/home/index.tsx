import { MyService } from './my-service';
import { Head } from './header';
import { HorizontalScroll } from './horizontalscroll';
export const Home = () => {
  return (
    <div className="bg-[#1F252D] text-white w-screen overflow-hidden">
      <Head />
      <MyService />
      <div className="w-screen mt-10 flex flex-col items-center gap-4">
        <p className="text-2xl font-semibold">
          My <span className="text-[#00B68F]">Project</span>
        </p>
        <p className="text-4xl font-bold">What I Made</p>

      </div>
      <HorizontalScroll />
    </div>
  );
};
