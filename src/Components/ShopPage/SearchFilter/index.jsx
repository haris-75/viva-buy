import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function SearchFilter() {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });
  const [filterValue, setFilterValue] = useState('All(100)');
  const [showFilterDropDown, setShowFilterDropDown] = useState(false);
  const fakeFilters = [
    {
      text: 'All items',
      value: 100
    },
    {
      text: 'Category Lorem ipsum',
      value: 91
    },
    {
      text: 'Category Lorem ipsum',
      value: 12
    },
    {
      text: 'Category Lore',
      value: 34
    },
    {
      text: 'Category Lore',
      value: 62
    },
    {
      text: 'Category Lore',
      value: 9
    },
    {
      text: 'Category Lore',
      value: 29
    },
    {
      text: 'Category Lore',
      value: 44
    },
    {
      text: 'Category Lore',
      value: 7
    }
  ];
  return (
    <div className="flex flex-col gap-2 md-lg:col-span-1 md:col-span-2 xs:col-span-1">
      <h1 className="text-base font-black">Filter by category</h1>
      <div className="h-[40px] w-full relative my-2">
        <input
          className="h-full w-full rounded-full border-0 bg-[#E8E7E7] px-6 font-sans text-base text-[#757575] outline-0 "
          placeholder="Search items?"
        />
        <img className="absolute right-6 top-3.5" src="/assets/search-icon.svg" />
      </div>

      {isMobile ? (
        <div className="flex gap-2.5 relative">
          <button
            className=" flex justify-between items-center w-full rounded-full border-2 border-solid border-black bg-transparent px-5 py-2.5 font-sans text-sm font-thin text-black transition-all duration-200  hover:shadow-shadow1 "
            onClick={() => setShowFilterDropDown(!showFilterDropDown)}
          >
            {filterValue}
            <img src="/assets/dropdown.svg" />
          </button>
          <img
            className="hover:bg-hoverColor px-2.5 rounded-full"
            src="/assets/filter-icon.svg"
            onClick={() => setShowFilterDropDown(!showFilterDropDown)}
          />
          <div className="px-2.5 w-full shadow-shadow1 mt-4  z-10 rounded-[5px] absolute  top-10 bg-white">
            {[1, 2, 3, 4, 5, 6].map((ele) => (
              <p
                className={`text-sm hover:bg-gray cursor-pointer rounded-full px-2.5 py-1 my-2.5 ${
                  showFilterDropDown ? '' : 'hidden'
                }`}
                key={ele}
                onClick={() => {
                  setFilterValue('Category lorem ipsum (12)');
                  setShowFilterDropDown(false);
                }}
              >
                {'Category lorem ipsum (12)'}
              </p>
            ))}
          </div>
        </div>
      ) : (
        fakeFilters?.map(({ text, value }) => (
          <div key={text + value} className="flex  justify-between">
            <p>{text}</p>
            <span>{value}</span>
          </div>
        ))
      )}
    </div>
  );
}
