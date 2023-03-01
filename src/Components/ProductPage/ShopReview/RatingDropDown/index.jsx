import React from 'react';

export default function RatingDropDown({ value, setValue, toggle, show }) {
  return (
    <div className="flex flex-col items-center relative sm:text-base text-xs">
      <div
        className="cursor-pointer flex xs:flex-row flex-col text-sm items-center px-4 py-2.5 hover:bg-gray rounded-full"
        onClick={toggle}
      >
        <h1 className="font-black  sm:text-base text-xs">Sort by:</h1>
        <span className=" flex gap-0.5 items-center justify-center xs:justify-start">
          <span className="ml-1 mr-1 sm:text-sm text-xs sm:w-[130px] xs:w-[110px] w-[110px]">
            {value}
          </span>
          <img width={10} src="/assets/dropdown2.svg" className={`${show ? 'rotate-180' : ''}`} />
        </span>
      </div>
      <div className="px-2.5 w-full shadow-shadow1 mt-0 sm:mt-2.5 rounded-[5px] absolute  top-10 bg-white z-1">
        {['Relevance', 'Recent', 'Rating: High to Low', 'Rating: Low to High'].map((ele) => (
          <p
            className={`sm:text-sm text-xs hover:bg-gray cursor-pointer rounded-[5px] px-2.5 py-1 my-2.5 ${
              show ? '' : 'hidden'
            }`}
            key={ele}
            onClick={() => {
              setValue(ele);
              toggle();
            }}
          >
            {ele}
          </p>
        ))}
      </div>
    </div>
  );
}
