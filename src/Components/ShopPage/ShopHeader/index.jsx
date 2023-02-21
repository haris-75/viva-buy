import React from 'react';
import Rating from '../../../assets/img/rating.svg';
import { SmallBtn } from '../../../Common/Buttons';
export default function ShopHeader() {
  return (
    <div className="flex flex-col gap-0">
      <img src="/assets/shop-cover.png" />
      <div className="grid grid-cols-4 bg-white-secondary ">
        <div className="px-8 flex flex-col gap-2.5 md:-translate-y-1/3">
          <img src="/assets/shop-logo.png" className=" -mb-2.5" />
          <div className="flex mt-2.5">
            <img src={Rating['src']} width={110} />
            <span className="text-disabled">{'(141)'}</span>
          </div>
          <div className="flex gap-1">
            <SmallBtn>
              <img src="/assets/star.svg" />
              <span>Star seller</span>
            </SmallBtn>
            <SmallBtn>
              <img src="/assets/star.svg" />
              <span>Star seller</span>
            </SmallBtn>
          </div>
          <div className="flex gap-3">
            <img src="/assets/cart/delivery.svg" />
            <span>Yangon</span>
          </div>
          <div className="flex gap-1 text-disabled">
            <p>Last active on</p>
            <p>16/Oct/2022</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-between p-4">
            <div>
              <div className="text-[26px]">
                <p>
                  Shop name lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex">
                  <h1 className="font-black">100</h1>
                  <p>Followers</p>
                </div>
                <div className="flex">
                  <h1 className="font-black">100</h1>
                  <p>Following</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-8">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <img src="/assets/cart/heart.svg" />
                  <p>Follow</p>
                </div>
                <div className="flex gap-1">
                  <img src="/assets/cart/share.svg" />
                  <p>Share</p>
                </div>
              </div>
              <div className="flex w-full justify-center py-1.5 px-10 border border-black rounded-md items-center text-xs bg bg-white">
                <img src="/assets/cart/message.svg" className="mt-0.5 mr-1" />
                <span>Message Shop</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-5 mt-2.5">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
