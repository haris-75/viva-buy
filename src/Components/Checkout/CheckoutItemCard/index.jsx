import React from 'react';

export default function CheckoutItemCard({ price, discountedPrice, count }) {
  return (
    <div className="grid sm:grid-cols-10 sm:gap-0 grid-cols-1 gap-2 justify-between p-4 bg-white border-[0.5px] border-disabled rounded-[5px]">
      <div className="col-span-2">
        <div className="relative w-fit">
          <img src="/assets/shop-3.png" width={90} />
          <span className="bg-primary py-1 px-2 rounded-full text-[10px] absolute w-[22px]  text-center  -top-1 -right-1">
            {count}
          </span>
        </div>
      </div>
      <div className="col-span-8 flex gap-2">
        <div className="flex flex-col gap-2.5  md-lg:text-sm md:text-xs sm:text-sm xs:text-xs sm:px-3">
          <div className="font-normal">
            <p className="w-fit line-clamp-2">
              Product name lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore
            </p>
          </div>
          <p className="font-extralight line-clamp-1">Shop name lorem ipsum dolor sit amet...</p>
        </div>
        <div>
          <p className="md-lg:xl md:text-lg sm:xl xs:text-lg font-black">{`${discountedPrice}Ks`}</p>

          <div className="md-lg:text-sm md:text-xs sm:text-sm xs:text-xs font-thin w-max">
            <span className="line-through">{`${price}Ks`}</span>&nbsp;
            <span className="text-[#258635]">{'(20%  off)'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
