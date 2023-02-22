import { useRouter } from 'next/router';
import React from 'react';
import { navigateToPage } from '../../../utils/navigation';

{
  /* Recent view card  */
}
export default function SingleShop(props) {
  const router = useRouter();
  return (
    <div
      onClick={() => navigateToPage(router, 'shop')}
      className="flex w-1/6 flex-col flex-nowrap rounded-[5px] p-[5px] transition-all hover:shadow-shadow1 lg:w-1/5 xs:w-1/3 lg:rounded-[5px] lg:p-[10px] xl:w-1/6"
    >
      <div className="cursor-pointer rounded-[5px] lg:rounded-[5px]">
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