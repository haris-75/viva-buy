import React from 'react';

export default function RatingDropDown({ value, setValue, toggle, show }) {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className="cursor-pointer flex text-sm items-center px-4 py-2.5 hover:bg-gray rounded-full"
        onClick={toggle}
      >
        <h1 className="font-black">Sort by:</h1>
        <span className=" flex gap-0.5 w-[150px] items-center">
          <span className="ml-1 mr-1 ">{value}</span>
          <img width={6} src="/assets/dropdown2.svg" />
        </span>
      </div>
      <div className="px-2.5   shadow-shadow1 mt-1 rounded-[5px] absolute  top-10 bg-white">
        {['Relevance', 'Recent', 'Rating: High to Low', 'Rating: Low to High'].map((ele) => (
          <p
            className={`text-sm hover:bg-gray cursor-pointer rounded-[5px] px-2.5 my-2.5 ${
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
