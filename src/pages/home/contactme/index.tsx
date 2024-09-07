import React from 'react';

export const ContactMe = () => {
  const [contact, setContact] = React.useState({ subject: '', content: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const goTo = `mailto:nikriaria@gmail.com?subject=${contact.subject}&body=${contact.content}`;
    window.location.href = goTo;
  };

  return (
    <div className="w-screen h-screen bg-[#161B21]">
      <div className="w-full h-full flex flex-col items-center pt-10  px-24 bg-gradient-to-br from-[#009071] to-[#6ee7b7] rounded-t-[120px]">
        <p className="text-4xl font-bold ">CONTACT</p>

        <div className="w-full h-full flex my-8">
          <div className="w-[50%] flex flex-col gap-6">
            <p className="text-2xl font-semibold">Drop Me a Message</p>

            <div>
              <p className="text-xl text-justify">
                I'm always open to new opportunities. Drop me a message, and
                let's start a conversation!
              </p>
            </div>

            <div className="flex items-center gap-6 text-2xl">
              <div className="w-16  p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img src="/img/call.png" alt="call" />
              </div>

              <p>+62 898 6969 322</p>
            </div>
            <div className="flex items-center gap-6 text-2xl">
              <div className="w-16  p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img src="/img/email.png" alt="email" />
              </div>

              <p>nikriaria@gmail.com</p>
            </div>
            <div className="flex items-center gap-6 text-2xl">
              <div className="w-[90px] p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img
                  src="/img/location1.png"
                  alt="location"
                  className="w-full"
                />
              </div>

              <p>
                Jl. Setapak No.11, Sasak Panjang, Kec. Tajur Halang, Kabupaten
                Bogor, Jawa Barat 16320
              </p>
            </div>
          </div>

          <div className="w-[50%] flex flex-col justify-center items-center gap-6">
            <form
              action="post"
              className="w-3/4 flex flex-col justify-center items-center p-4 gap-4 rounded-xl bg-gradient-to-br from-[#6ee7b7] to-[#009071]"
              onSubmit={handleSubmit}
            >
              <div className="w-full h-auto grid gap-2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject"
                  className="w-full h-12 rounded-md p-4 bg-[#161B21]"
                  value={contact.subject}
                  onChange={(e) =>
                    setContact({ ...contact, subject: e.target.value })
                  }
                />
              </div>
              <div className="w-full h-auto grid gap-2">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Content"
                  className="w-full h-36 rounded-md p-4 bg-[#161B21]"
                  value={contact.content}
                  onChange={(e) =>
                    setContact({ ...contact, content: e.target.value })
                  }
                />
              </div>

              <div className="w-full h-auto flex ">
                <button
                  type="submit"
                  className="w-[40%] h-10 rounded-md bg-[#161B21] my-6 hover:bg-white hover:text-black font-medium"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[100%] flex p-4 mt-6 border-t-4 justify-between">
          <div className="w-[20%] h-auto">
            <img src="/img/logoNW.png" alt="N" className="w-[100px]" />
          </div>
          <div className="w-[60%] h-full flex justify-between items-center">
            <div>
              <p>2023 - Nikri, All Rights Reserverd</p>
            </div>
            <div className='flex gap-2'>
              <div className="w-16 p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img
                  src="/img/facebook.png"
                  alt="location"
                  className=""
                />
              </div>
              <div className="w-16 p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img
                  src="/img/instagram.png"
                  alt="location"
                  className=""
                />
              </div>
              <div className="w-16 p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img
                  src="/img/linkedin.png"
                  alt="location"
                  className=""
                />
              </div>
              <div className="w-16 p-2 bg-gradient-to-br from-[#6ee7b7] to-[#009071] rounded-lg">
                <img
                  src="/img/github1.png"
                  alt="location"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
