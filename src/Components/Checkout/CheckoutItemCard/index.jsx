import React from 'react';

export default function CheckoutItemCard({ price, discountedPrice, count }) {
  return (
    <div className="flex justify-between p-4 bg-white border-[0.5px] border-disabled rounded-[5px]">
      <div className="relative">
        <img src="/assets/shop-3.png" width={90} />
        <span className="bg-primary py-1 px-2 rounded-full text-[10px] absolute w-[22px]  text-center  -top-1 -right-1">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-2.5  md-lg:text-sm md:text-xs sm:text-sm xs:text-xs px-3">
        <div className="font-normal">
          <p className="xl:max-w-[250px] lg:max-w-[150px]  md:max-w-[100px] sm:max-w-[250px]  xs:max-w-[50px]   truncate">
            Product name lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore
          </p>
        </div>
        <p className="font-extralight">Shop name lorem ipsum dolor sit amet...</p>
      </div>
      <div>
        <p className="md-lg:xl md:text-lg sm:xl xs:text-lg font-black">{`${discountedPrice}Ks`}</p>

        <div className="md-lg:text-sm md:text-xs sm:text-sm xs:text-xs font-thin">
          <span className="line-through">{`${price}Ks`}</span>&nbsp;
          <span className="text-[#258635]">{'(20%  off)'}</span>
        </div>
      </div>
    </div>
  );
}
