import React from "react";
import Rating from "../assets/img/rating.svg";

{
  /* shop card */
}
export default function ShopCard(props) {
  return (
    <div className="w-1/4 p-[5px] px-[5px] lg:w-1/5 lg:p-[10px] xl:w-1/6">
      <div className="flex flex-col flex-nowrap items-center">
        <div className="max-h-[220px] max-w-[220px] overflow-hidden rounded-full bg-gray xl:h-[180px] xl:w-[180px] 2xl:h-[220px] 2xl:w-[220px]">
          <img
            src="https://i.etsystatic.com/5738620/c/1666/1666/417/0/il/ba9c20/3222461714/il_300x300.3222461714_bymb.jpg"
            className="w-full "
          />
        </div>
        <div className="mt-[5px] lg:mt-[20px]">
          <p className="text-center font-sans text-xs font-bold leading-4 text-black line-clamp-1 sm:text-base md:text-[18px] lg:text-[22px] lg:leading-7">
            shop name
          </p>

          <p className="text-center font-sans text-xs font-bold leading-4 text-black line-clamp-1 sm:text-base md:text-[18px] lg:text-[22px] lg:leading-7">
            lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="mt-[10px] flex w-[50px] items-center justify-center md:w-[80px] lg:w-[100px]">
          <img src={Rating["src"]} className="w-full" />
        </div>
      </div>
    </div>
  );
}
