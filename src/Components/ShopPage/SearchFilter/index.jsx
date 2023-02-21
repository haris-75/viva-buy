import React from 'react';

export default function SearchFilter() {
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
    <div className="flex flex-col gap-2">
      <h1 className="text-base font-black">Filter by category</h1>
      <div className="h-[40px] w-full relative my-2">
        <input
          className="h-full w-full rounded-full border-0 bg-[#E8E7E7] px-6 font-sans text-base text-[#757575] outline-0 "
          placeholder="Search items?"
        />
        <img className="absolute right-6 top-3.5" src="/assets/search-icon.svg" />
      </div>

      {fakeFilters?.map(({ text, value }) => (
        <div key={text + value} className="flex  justify-between">
          <p>{text}</p>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}
