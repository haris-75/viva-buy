import React from "react";
import Rating from "../assets/img/rating.svg";

{
  /* shop card */
}
export default function ShopCard(props) {
  return (
    <div className="w-1/4 cursor-pointer p-[5px] px-[5px] lg:w-1/5 lg:p-[10px] xl:w-1/6">
      <div className="group/item flex flex-col flex-nowrap items-center">
        <div className="max-h-[140px] max-w-[140px] overflow-hidden rounded-full bg-gray transition-all group-hover/item:shadow-shadow1 xl:h-[180px] xl:w-[180px] 2xl:h-[220px] 2xl:w-[220px]">
          <img
            src="https://i.etsystatic.com/5738620/c/1666/1666/417/0/il/ba9c20/3222461714/il_300x300.3222461714_bymb.jpg"
            className="w-full "
          />
        </div>
        <div className="mt-[5px] lg:mt-[20px]">
          <p className="text-center font-sans text-sm font-light leading-4 text-black line-clamp-1 group-hover/item:font-bold md:text-base lg:leading-4">
            shop name
          </p>

          <p className="text-center font-sans text-sm font-light leading-4 text-black line-clamp-1 group-hover/item:font-bold md:text-base  lg:leading-4">
            lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="mt-[10px] flex h-[30px] w-[50px] items-center justify-center  lg:w-[100px]">
          <img
            src={Rating["src"]}
            className="hidden w-full group-hover/item:flex md:w-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
