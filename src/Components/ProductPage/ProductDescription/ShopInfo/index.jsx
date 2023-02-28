import React from 'react';
import Rating from '../../../../assets/img/rating.svg';
import { SecondaryButton, SmallBtn } from '../../../../Common/Buttons';

export default function ShopInfo() {
  return (
    <div className="flex flex-col gap-2.5">
      {/* top */}
      <div className="flex gap-[18px] justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-xs">Sold by</h1>
          <p className="text-base font-thin">
            Shop name lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
          <div className="flex gap-2.5 items-center">
            <img src={Rating['src']} className=" group-hover/item:flex md:w-[80px]" />
            <span className="text-disabled text-xs">(141)</span>
            <SmallBtn>
              <img src="/assets/star.svg" />
              <span>Star seller</span>
            </SmallBtn>
          </div>
        </div>
        <div>
          <img src="/assets/featured/thumbnail/2.png" width={90} />
        </div>
      </div>
      {/* bottom */}
      <div className="flex gap-4 xs:flex-row flex-col  items-center justify-between">
        <div className="cursor-pointer flex w-full justify-center py-1.5 border border-black rounded-md items-center text-xs hover:border-white hover:shadow-shadow1">
          <img src="/assets/cart/message.svg" className="mt-0.5 mr-1" />
          <span>Message Shop</span>
        </div>
        <div className="flex items-center cursor-pointer text-xs xs:w-[110px] justify-center hover:shadow-shadow1 rounded-full py-2 w-full ">
          <img src="/assets/cart/heart.svg" className="mr-1" />
          <span>Follow</span>
        </div>
      </div>
    </div>
  );
}
