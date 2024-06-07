import { FaExpand } from 'react-icons/fa';
import { marked } from 'marked';

const Previewer = ({ text, toggleExpand, toggled }) => {
  return (
    <div className={`border-2 border-black shadow-2xl lg:w-[40rem] flex flex-col m-7 ${toggled && 'min-h-screen'}`}>
      <div
        id='header'
        className='border-b-2 border-black shadow-inner bg-cyan-900 flex justify-between p-2'
      >
        <h1 className='font-bold'>Previewer</h1>
        <button onClick={toggleExpand}>
          <FaExpand />
        </button>
      </div>
      <div
        id='preview'
        dangerouslySetInnerHTML={{ __html: marked(text) }}
        className='w-full min-h-32 min-w-72  h-full lg:min-h-40 bg-cyan-600 p-2 flex flex-col text-xs lg:text-base'
      ></div>
    </div>
  );
};

export default Previewer;
