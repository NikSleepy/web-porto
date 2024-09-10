import { FaDownload } from 'react-icons/fa';
import '../../../assets/css/ImgShadow.css';

export const Head = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/CV_NikriAria.pdf';
    link.download = 'CV_NikriAria.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="header"
      className="w-screen h-auto md:h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover overflow-hidden"
    >
      <div className="w-[80%] h-auto md:h-[60%]  p-6 rounded-md flex flex-col md:flex-row justify-between items-center text-white">
        <div
          className="md:hidden w-full md:w-[45%] flex flex-col justify-center items-center mt-6 mb-[-60px] "
          data-aos="fade-left"
        >
          <img src="img/proflie1.png" alt="hero" className="img-shadow" />
        </div>
        <div
          className="w-full md:w-[45%] flex flex-col items-center md:items-start gap-4 py-10 "
          data-aos="fade-right"
        >
          <p className="text-md lg:text-lg xl:text-xl ">
            {' '}
            Hello, <text className=" text-[#00B68F]"> I'm</text>
          </p>
          <p className="text-2xl lg:text-4xl font-bold text-[#00B68F] ">
            Nikri Aria Pratama
          </p>
          <p className="hidden md:flex text-md lg:text-xl font-semibold">
            Web Developer || Fullstack Developer
          </p>
          <div className="w-full md:hidden flex flex-col items-center  ">
            <p className=" lg:flex text-md lg:text-xl font-semibold">
              Web Developer
            </p>
            <p className=" lg:flex text-md lg:text-xl font-semibold">
              Fullstack Developer
            </p>
          </div>

          <p className="text-justify text-md lg:text-lg">
            A passionate and creative web developer. With over 1 year of
            experience in the industry, I have honed my skills in frontend, and
            always strive to deliver high-quality work that not only meets, but
            exceeds client expectations.
          </p>

          <div className="w-full flex flex-col  md:flex-row items-center md:gap-4 ">
            <button
              className="w-full md:w-2/4 bg-[#00B68F] text-white font-semibold rounded-md p-2 my-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]"
              onClick={() =>
                (window.location.href = 'https://wa.me/628986969322')
              }
            >
              Let's Talk
            </button>

            <button
              className="w-full md:w-2/4 flex justify-center items-center gap-2 bg-[#00B68F] text-white font-semibold rounded-md py-2 my-4 px-4 drop-shadow-[0_2px_10px_rgba(0,182,143)] hover:drop-shadow-[0_4px_10px_rgba(0,182,143)] hover:bg-white hover:text-[#00B68F]"
              onClick={handleDownload}
            >
              Download CV
              <FaDownload size={20} />
            </button>
          </div>
        </div>
        <div
          className="hidden w-[45%] md:flex flex-col justify-center items-center "
          data-aos="fade-left"
        >
          <img src="img/proflie1.png" alt="hero" className="img-shadow" />
        </div>
      </div>
    </div>
  );
};
