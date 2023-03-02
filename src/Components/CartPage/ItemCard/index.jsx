import React from 'react';
import ItemDescription from '../ItemDescription';

export default function ItemCard({ itemsArray, fee, date, shipsFrom }) {
  return (
    <div className="flex flex-col gap-4 p-4 shadow-shadow1 rounded-[10px]">
      <div className="flex gap-2.5 items-center">
        <img src="/assets/shop-1.png" width={40} />
        <p className="line-clamp-2">
          Shop name lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {itemsArray.map(({ price, text }) => (
          <ItemDescription key={price + text} price={price} text={text} />
        ))}
      </div>

      <div className="flex justify-between gap-1 flex-col xs-m:flex-row">
        <textarea
          type="text"
          placeholder="Add a note to seller (optional)"
          className="xs-m:w-[65%] md-lg:w-[65%] w-[100%] rounded-[5px] border-[1px] border-none shadow:shadow-1 bg-gray py-[4px] px-3 font-sans sm:text-sm text-[10px]  font-[400] leading-6 text-disabled outline-none  sm:font-light sm:leading-6"
        />
        <div className="xs-m:p-0 pl-1">
          <div className="font-bold">
            <span className="text-base ">Deliver fee:</span>&nbsp;
            <span className={`text-xl ${fee === 'Free' ? 'text-[#258635]' : ''}`}>{fee}</span>
          </div>
          <div>
            <div className="font-thin text-sm ">
              <span>Earliest delivery:</span>&nbsp;
              <span>{date}</span>
            </div>
            <div className="font-thin text-sm ">
              <span>Ships from:</span>&nbsp;
              <span>{shipsFrom}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
