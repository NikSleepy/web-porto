import React from 'react';

export const Contact = () => {
  const [contact, setContact] = React.useState({ subject: '', content: '' });

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const goTo = `mailto:nikriaria@gmail.com?subject=${contact.subject}&body=${contact.content}`;
    window.location.href = goTo;
  }

  return (
    <div className="w-screen h-screen py-10 px-14   text-white pt-[85px]">
      <div className="w-full py-10 px-14 flex flex-col items-center ">
        <div className="flex flex-col text-center gap-4 mb-20">
          <p className="text-4xl font-bold">Contact Me</p>
        </div>
        <form
          action="post"
          className="w-2/4 flex flex-col justify-center items-center gap-4 "
          onSubmit={handleSubmit}
        >
          <div className="w-[80%] h-auto grid gap-2">
            <label htmlFor="subject" className="text-2xl font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              className="w-full h-10 rounded-md p-4 bg-[#161B21]"
              value={contact.subject}
              onChange={(e) => setContact({ ...contact, subject: e.target.value })}
            />
          </div>
          <div className="w-[80%] h-auto grid gap-2">
            <label htmlFor="subject" className="text-2xl font-medium">
              Content
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Content"
              className="w-full h-36 rounded-md p-4 bg-[#161B21]"
              value={contact.content}
              onChange={(e)=> setContact({ ...contact, content: e.target.value})}
            />
          </div>

          <div className="w-[80%] h-auto flex justify-end">
            <button
              type="submit"
              className="w-[40%] h-10 rounded-md bg-[#00B68F] my-6 hover:bg-white hover:text-black font-medium"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
