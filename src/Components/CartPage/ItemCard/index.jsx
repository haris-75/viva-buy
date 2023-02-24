import React from 'react';
import ItemDescription from '../ItemDescription';

export default function ItemCard() {
  return (
    <div>
      <div className="flex gap-2.5 items-center">
        <img src="/assets/shop-1.png" width={40} />
        <p>Shop name lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</p>
      </div>
      <div className="flex justify-between">
        <ItemDescription />
        <div>
          <p className="text-xl font-black">8,000Ks</p>
          <div className="text-xs font-thin">
            <span className="line-through">10,000Ks</span>&nbsp;
            <span className="text-[#258635]">{'(20%  off)'}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <textarea
          type="text"
          placeholder="Add a note to seller (optional)"
          className="w-[80%] rounded-[5px] border-[1px] border-none shadow:shadow-1 bg-gray py-[4px] px-3 font-sans text-sm font-[400] leading-6 text-disabled outline-none  sm:font-light sm:leading-6"
        />
        <div>
          <div className="font-bold">
            <span className="text-base">Deliver fee:</span>&nbsp;
            <span className="text-xl">2,000 Ks</span>
          </div>
          <div>
            <div className="font-thin text-sm">
              <span>Earliest delivery:</span>&nbsp;
              <span>21/Feb/2023</span>
            </div>
            <div className="font-thin text-sm">
              <span>Ships from:</span>&nbsp;
              <span>Yangon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
