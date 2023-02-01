import React, { useState } from "react";

import DeliveryIcon from "../assets/icons/delivery-icon.svg";
import GiftIcon from "../assets/icons/gift-icon.svg";
import { HeartOutlinedIcon, HeartFilledIcon } from "./Svgs";

{
  /* featured product card */
}
export default function FeaturedProductCard(props) {
  const [favorite, setFavorite] = useState(true);
  return (
    <div className="group/item flex w-1/2 max-w-max cursor-pointer flex-col flex-nowrap rounded-[5px] p-[5px] transition-all hover:shadow-shadow1 lg:w-1/3 lg:rounded-[5px] lg:p-[10px] xl:w-1/4">
      <div className="rounded-[5px] lg:rounded-[5px]">
        <div className="relative max-h-[306px] max-w-[306px] overflow-hidden rounded-[5px] bg-gray lg:rounded-[5px]">
          <img src="/assets/featured/1.png" className="w-full" />

          {/* heart icon */}
          <div
            className="absolute right-2 top-2 hidden group-hover/item:block"
            onClick={() => setFavorite(!favorite)}
          >
            {
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-[1px] border-solid bg-white hover:border-0 hover:shadow-shadow1">
                {favorite ? (
                  <HeartFilledIcon className="fill-black hover:fill-[#FF0000]"></HeartFilledIcon>
                ) : (
                  <HeartOutlinedIcon className="fill-black hover:fill-[#FF0000]"></HeartOutlinedIcon>
                )}
              </span>
            }
          </div>
        </div>
        <div className="mt-[5px]">
          <p className="font-sans  text-sm font-light leading-5 text-black  line-clamp-1 md:text-base md:leading-7">
            Product name lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="mt-[5px]">
          <p className="font-sans text-sm font-bold leading-5 text-black md:text-base md:leading-7">
            10,000 K
          </p>
        </div>
        <div className="mt-[5px] flex flex-col gap-[5px] md:flex-row">
          <div className="flex w-max flex-row gap-1 rounded-[45px] bg-[#FFD076] px-[10px] py-[3px]">
            <span className="h-[16px] w-[16px]">
              <img src={DeliveryIcon["src"]} alt="" className="h-full w-full" />
            </span>
            <span className="text-[10px] sm:text-xs">Free delivery</span>
          </div>

          <div className="flex w-max flex-row gap-1 rounded-[45px] bg-[#FF71F9] px-[10px] py-[3px]">
            <span className="h-[16px] w-[16px]">
              <img src={GiftIcon["src"]} alt="" className="h-full w-full" />
            </span>
            <span className="text-[10px] sm:text-xs">
              Gift wrapping available
            </span>
          </div>
        </div>
        <div className="mt-[5px]">
          <p className="font-sans text-sm font-light leading-5 text-black md:leading-7 lg:text-sm">
            Shop name
          </p>
        </div>
      </div>
    </div>
  );
}
