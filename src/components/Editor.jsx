import { FaExpand } from 'react-icons/fa';

const Editor = ({ text, setText, toggleExpand, toggled }) => {
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className={`border-2 border-black shadow-2xl lg:w-96 mb-10 flex flex-col mt-7 ${
        toggled && 'h-screen'
      }`}
    >
      <div
        id='header'
        className='border-b-2 border-black shadow-2xl bg-cyan-900 flex justify-between p-2'
      >
        <h1 className='font-bold'>Editor </h1>
        <button onClick={toggleExpand}>
          <FaExpand />
        </button>
      </div>
      <textarea
        id='editor'
        value={text}
        onChange={handleChange}
        className='min-w-64 h-full min-h-40 bg-cyan-600 focus:outline-none p-2 text-xs lg:text-base'
      ></textarea>
    </div>
  );
};

export default Editor;
