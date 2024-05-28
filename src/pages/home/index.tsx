import { Content } from '../component/content';
import { Head } from '../component/header';
import { HorizontalScroll } from '../component/horizontalscroll';
import { Navbar } from '../component/navbar';
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Head />
      <HorizontalScroll />
      <Content />
    </div>
  );
};
