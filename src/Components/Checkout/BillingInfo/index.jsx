import React from 'react';

export default function BillingInfo() {
  return (
    <div className="border-[1px] rounded-[5px] p-5 flex flex-col gap-6">
      <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
        <div className="flex items-center gap-1">
          <div>
            <img src="/assets/checkout/contact.svg" />
          </div>
          <span className="font-bold">Contact</span>
        </div>
        <p className="font-thin">emailaddress@gmail.com</p>
        <p className="text-disabled font-thin">Change</p>
      </div>

      <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
        <div className="flex gap-1">
          <div>
            <img src="/assets/cart/delivery.svg" className="mt-[2px]" />
          </div>
          <span className="font-bold">Deliver to</span>
        </div>
        <div>
          <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs">
            <p className="font-thin">Full Name</p>
            <div className="my-4">
              <p>Address Line 1</p>
              <p>{'Address Line 2 (optional)'}</p>
              <p>City, Township</p>
            </div>
          </div>
          <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs">0912341234</div>
        </div>
        <p className="text-disabled font-thin">Change</p>
      </div>

      <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
        <div className="flex items-center gap-1">
          <div>
            <img src="/assets/checkout/payment.svg" />
          </div>
          <span className="font-bold">Payment</span>
        </div>
        <div className="font-thin flex gap-1">
          <div>
            <img src="/assets/cards/visa.svg" />
          </div>
          <span className="text-disabled">...123</span>
        </div>
        <p className="text-disabled font-thin">Change</p>
      </div>

      <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
        <div className="flex items-center gap-1">
          <div>
            <img src="/assets/checkout/billing.svg" />
          </div>
          <span className="font-bold">Billing Address</span>
        </div>
        <p className="font-thin">Same as shipping address</p>
        <p className="text-disabled font-thin">Change</p>
      </div>
    </div>
  );
}
