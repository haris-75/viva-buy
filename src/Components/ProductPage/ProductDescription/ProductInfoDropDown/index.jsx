import React from 'react';

export default function ProductInfoDropDown({ label, textArray, show, toggle, delivery, subList }) {
  return (
    <>
      <div>
        <div
          onClick={toggle}
          className="flex  justify-between hover:bg-gray rounded-full py-2.5 px-5"
        >
          <h1 className=" w-full font-black">{label}</h1>
          <img
            className={`cursor-pointer  ${show ? 'rotate-180' : ''}`}
            src="/assets/dropdown2.svg"
          />
        </div>
      </div>
      <div className={`py-2.5 pl-5 pr-2.5 text-[13px]  text-left ${show ? '' : 'hidden'}`}>
        {delivery ? (
          <div className="flex flex-col gap-2.5  mb-2.5">
            <div className="flex justify-between">
              <div className="flex md-lg:gap-2.5 md:gap-[5px] gap-2.5 items-center">
                <div>
                  <img src="/assets/cart/delivery.svg" />
                </div>
                <span className="font-black">Deliver to</span> &nbsp;&nbsp;
                <span className="font-thin">Yangon, Yankin Township</span>
              </div>
              <div className="text-disabled font-xxs">Change</div>
            </div>
            <div className="flex justify-between">
              <div className="flex md-lg:gap-2.5 md:gap-[5px] gap-2.5 items-center">
                <div>
                  <img src="/assets/cart/truck.svg" />
                </div>
                <span className="font-black w-fit">Standard Delivery</span> &nbsp;&nbsp;
                <span className="font-thin">2-3 days</span>
              </div>
              <div className="font-black font-xxs">4,000 Ks</div>
            </div>
          </div>
        ) : (
          ''
        )}
        <p>{textArray?.join(' ')}</p>
        {subList ? (
          <ul className="list-disc pl-5 mt-2.5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
