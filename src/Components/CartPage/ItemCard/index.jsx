import React from 'react';
import ItemDescription from '../ItemDescription';

export default function ItemCard({ itemsArray, fee, date, shipsFrom }) {
  return (
    <div className="flex flex-col gap-4 p-4 shadow-shadow1 rounded-[10px]">
      <div className="flex gap-2.5 items-center">
        <img src="/assets/shop-1.png" width={40} />
        <p>Shop name lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p>
      </div>

      <div className="flex flex-col gap-4">
        {itemsArray.map((ele) => (
          <ItemDescription key={ele} price={ele} />
        ))}
      </div>

      <div className="flex justify-between gap-1">
        <input
          type="text"
          placeholder="Add a note to seller (optional)"
          className="sm:w-[65%] md-lg:w-[65%] xs:w-[45%] rounded-[5px] border-[1px] border-none shadow:shadow-1 bg-gray py-[4px] px-3 font-sans sm:text-sm xs:text-[10px]  font-[400] leading-6 text-disabled outline-none  sm:font-light sm:leading-6"
        />
        <div>
          <div className="font-bold">
            <span className="sm:text-base xs:text-[11px]">Deliver fee:</span>&nbsp;
            <span
              className={`sm:text-xl xs:text-[13px]l ${fee === 'Free' ? 'text-[#258635]' : ''}`}
            >
              {fee}
            </span>
          </div>
          <div>
            <div className="font-thin sm:text-sm xs:text-[10px]">
              <span>Earliest delivery:</span>&nbsp;
              <span>{date}</span>
            </div>
            <div className="font-thin sm:text-sm xs:text-[10px]">
              <span>Ships from:</span>&nbsp;
              <span>{shipsFrom}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
