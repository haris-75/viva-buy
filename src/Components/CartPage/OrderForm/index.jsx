import React from 'react';
import { PrimaryButton } from '../../../Common/Buttons';

export default function OrderForm() {
  return (
    <div className="flex flex-col gap-7  md-lg:p-7 md:p-4 sm:p-7 xs:p-4 border-[1px] rounded-[10px]">
      <h1 className="text-xl font-bold">Order Summary</h1>
      <div className="flex flex-col gap-[5px]">
        <div className="flex justify-between text-base ">
          <span>{'Item(s) total'}</span>
          <span>48,000 Ks</span>
        </div>
        <div className="flex justify-between text-base pb-[5px] border-b-[1px]">
          <span>{'Shop discount'}</span>
          <span>-4,000 Ks</span>
        </div>
        <div className="flex justify-between text-base">
          <span>{'Sub total (5 items)'}</span>
          <span>44,000 Ks</span>
        </div>
        <div className="flex justify-between text-base">
          <span>{'Delivery  fee'}</span>
          <span>2,000 Ks</span>
        </div>
        <div className="flex justify-between text-sm pb-[5px] border-b-[1px]">
          <span className="flex">
            <img src="/assets/cart/delivery.svg" /> &nbsp;
            <span>Yangon, Yankin Township</span>
          </span>
          <span className="text-disabled">Change</span>
        </div>
        <div className="flex justify-between text-base font-bold">
          <span>{'Total (5 items)'}</span>
          <span>46,000 Ks</span>
        </div>
      </div>
      <div className="flex relative">
        <img
          src="/assets/coupon.svg"
          className="absolute"
          style={{
            top: '35%',
            marginLeft: '10px'
          }}
        />
        <input
          placeholder="Enter coupon code"
          className="w-full border-[1px] border-black py-2.5 px-4 rounded-l-md pl-8"
        />
        <button className="bg-black border-0 py-[5] px-2.5 text-white rounded-r-md">Apply</button>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <PrimaryButton>Proceed to checkout</PrimaryButton>
        <p>Continue Shopping</p>
      </div>
    </div>
  );
}