import React from 'react';
import Rating from '../../../assets/img/rating.svg';
import { Btn2, SmallBtn } from '../../../Common/Buttons';

export default function ShopInfo() {
  return (
    <div className="flex flex-col">
      {/* top */}
      <div className="flex">
        <div>
          <h1>Sold by</h1>
          <p>Shop name lorem ipsum dolor sit amet consectetur</p>
          <p>adipiscing elit</p>
          <div className="flex">
            <img src={Rating['src']} className=" w-full group-hover/item:flex md:w-[80px]" />
            <span className="text-disabled">(141)</span>
            <SmallBtn>
              <img src="/assets/star.svg" />
              <span>Star seller</span>
            </SmallBtn>
          </div>
        </div>

        <img src="/assets/featured/thumbnail/2.png" width={90} />
      </div>
      {/* bottom */}
      <div className="flex">
        <div className="flex w-full justify-center py-1.5 border border-black rounded-md items-center text-xs">
          <img src="/assets/cart/message.svg" className="mt-0.5 mr-1" />
          <span>Message Shop</span>
        </div>
        <div className="flex items-center text-xs">
          <img src="/assets/cart/heart.svg" className="mr-1" />
          <span>Follow</span>
        </div>
      </div>
    </div>
  );
}
