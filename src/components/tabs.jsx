'use client';
import { useState, useEffect, useRef } from 'react';

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <>
    <div className='bg-transparent flex justify-center items-center py-12'>
      <div className=' flex flex-col gap-y-2 w-full border-b-2 border-gray-500 border-solid'>
      <div className="">
        <div className='bg-transparent flex mb-4 items-center gap-x-2 font-bold border-b border-gray-500 border-solid '>
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={` outline-none border-none w-max p-2 pl-0 hover:text-[#008080] focus:border-[#008080] focus:border-solid focus:border-b-2 focus:shadow-none focus:text-white text-left ${
                selectedTab === index ? 'focus:ring-0 focus:outline-none border-b border-gray-500 border-soild bg-transparent  hover:text-[#008080]' : ''
              } `}
            >
              {item.title}
            </button>
          ))}
          
        </div>
        <div className="flex gap-2 items-center w-[15rem] sm:w-[20rem] text-white border border-solid border-white p-2 py-0 rounded-full">
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9033 20.75C5.25332 20.75 0.65332 16.15 0.65332 10.5C0.65332 4.85 5.25332 0.25 10.9033 0.25C16.5533 0.25 21.1533 4.85 21.1533 10.5C21.1533 16.15 16.5533 20.75 10.9033 20.75ZM10.9033 1.75C6.07332 1.75 2.15332 5.68 2.15332 10.5C2.15332 15.32 6.07332 19.25 10.9033 19.25C15.7333 19.25 19.6533 15.32 19.6533 10.5C19.6533 5.68 15.7333 1.75 10.9033 1.75Z" fill="#A1A2AF"/>
<path d="M21.403 21.7499C21.213 21.7499 21.023 21.6799 20.873 21.5299L18.873 19.5299C18.7335 19.3888 18.6553 19.1984 18.6553 18.9999C18.6553 18.8015 18.7335 18.6111 18.873 18.4699C19.163 18.1799 19.643 18.1799 19.933 18.4699L21.933 20.4699C22.223 20.7599 22.223 21.2399 21.933 21.5299C21.783 21.6799 21.593 21.7499 21.403 21.7499Z" fill="#A1A2AF"/>
</svg>

        <input type="search" name="" id="" placeholder="search" className="bg-transparent outline-none border-none w-full"/>
    </div>
      </div>

        <div className='bg-transparent p-2 rounded-xl'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? '' : 'hidden'}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>      
    </div>
    
    </>
  );
};

export default TabsComponent;