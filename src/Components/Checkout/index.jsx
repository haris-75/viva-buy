import React, { useState } from 'react';
import { PrimaryButton } from '../../Common/Buttons';
import BillingInfo from './BillingInfo';
import CheckoutItemCard from './CheckoutItemCard';
import ShowAlertModal from '../../Common/Modals/ShowAlertModal';

export default function CheckoutPage() {
  const [showAlertModal, setShowAlertModal] = useState(false);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div className="flex flex-col md-lg:p-10 md:p-5 sm:p-10 p-3 gap-4">
        <h1 className="font-bold text-2xl">Please confirm and submit your order</h1>
        <BillingInfo />
      </div>
      <div className="bg-white-secondary flex flex-col md-lg:p-10 md:p-5 sm:p-10 p-3  gap-8">
        <div className="flex flex-col gap-2.5">
          <CheckoutItemCard price={10000} discountedPrice={8000} count={1} />
          <CheckoutItemCard price={40000} discountedPrice={32000} count={4} />
        </div>
        <div>
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between border-t-[1px] pt-1 md-lg:text-base md:text-sm sm:text-base text-xs">
              <span>{'Sub total (5 items)'}</span>
              <span>44,000 Ks</span>
            </div>
            <div className="flex justify-between md-lg:text-base md:text-sm sm:text-base text-xs">
              <span>{'Delivery  fee'}</span>
              <span>2,000 Ks</span>
            </div>
            <div className="flex justify-between font-bold border-t-[1px] pt-1 md-lg:text-base md:text-sm sm:text-base text-xs">
              <span>{'Total (5 items)'}</span>
              <span>46,000 Ks</span>
            </div>
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
        <div>
          <PrimaryButton
            className="h-[40px] w-full rounded-[35px] bg-primary px-9 py-[4px] text-center font-sans text-base font-bold leading-6 text-black transition-all duration-200 hover:shadow-shadow1 cursor-pointer"
            onClick={() => setShowAlertModal(true)}
          >
            Place order
          </PrimaryButton>
        </div>
      </div>

      {showAlertModal ? <ShowAlertModal closeModal={() => setShowAlertModal(false)} /> : ''}
    </div>
  );
}
