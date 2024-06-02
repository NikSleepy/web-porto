import { MyService } from '../component/my-service';
import { Content } from '../component/content';
import { Head } from '../component/header';
import { HorizontalScroll } from '../component/horizontalscroll';
import { Navbar } from '../component/navbar';
export const Home = () => {
  return (
    <div className="bg-[#1F252D] text-white w-screen">
      <Navbar />
      <Head />
      <MyService />

      {/* <HorizontalScroll /> */}
      <Content />
    </div>
  );
};
