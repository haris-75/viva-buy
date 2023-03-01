import { useRouter } from 'next/router';
import React from 'react';
import { navigateToPage } from '../../../utils/navigation';
import { HeartOutlinedIcon } from '../../Svg/index';

{
  /* Single shop card  */
}
export default function SingleShop() {
  const route = useRouter();

  return (
    <div
      onClick={() => navigateToPage(route, 'shop')}
      className="flex  flex-col flex-nowrap rounded-[5px] p-[5px] transition-all hover:shadow-shadow1 lg:w-1/4 sm:w-1/3 w-[35%] lg:rounded-[5px] lg:p-[10px] "
    >
      <div className="cursor-pointer rounded-[5px] lg:rounded-[5px] relative group/item">
        <div className="absolute border-2 rounded-full p-1 bg-white  right-2.5 top-2.5 hover:shadow-shadow1 hover:border-white group-hover/item:block hidden">
          <HeartOutlinedIcon className="fill-black hover:fill-[#FF0000]" />
        </div>
        <div className="overflow-hidden rounded-[5px]  lg:rounded-[5px]">
          <img src="/assets/shop-list-single.png" className="lg:w-full md:w-[150px] xs:w-[250px]" />
        </div>
        <div className="mt-[5px]">
          <p className="  font-sans text-sm leading-5 text-black line-clamp-1 md:text-base md:leading-4">
            Product name lorem ipsum dolor sit amet
          </p>
        </div>

        <div className="mt-[5px]">
          <p className="font-sans text-sm font-bold leading-5 text-black md:text-base md:leading-4">
            10,000 K
          </p>
        </div>
        <div>
          <p className="font-sans text-sm leading-5 text-black md:text-sm md:leading-7">
            Shop name
          </p>
        </div>
      </div>
    </div>
  );
}
