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
          <img className="cursor-pointer" src="/assets/dropdown2.svg" />
        </div>
      </div>
      <div className={`py-2.5 pl-5 pr-2.5 text-[13px]  text-left ${show ? '' : 'hidden'}`}>
        {delivery ? (
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <img src="/assets/cart/delivery.svg" />
                <span className="font-black">Deliver to</span> &nbsp;&nbsp;
                <span className="font-thin">Yangon, Yankin Township</span>
              </div>
              <div className="text-disabled font-xxs">Change</div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <img src="/assets/cart/truck.svg" />
                <span className="font-black">Standard Delivery</span> &nbsp;&nbsp;
                <span className="font-thin">2-3 days</span>
              </div>
              <div className="font-black font-xxs">4,000 Ks</div>
            </div>
          </div>
        ) : (
          ''
        )}
        {textArray?.map((ele) => (
          <p key={ele}>{ele}</p>
        ))}
        {subList ? (
          <ul className="list-disc pl-5">
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
