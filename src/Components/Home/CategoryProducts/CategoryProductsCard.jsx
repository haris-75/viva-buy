import { useRouter } from 'next/router';
import React from 'react';
import { navigateToPage } from '../../../utils/navigation';

{
  /* category product card */
}
export default function FeaturedProductCard() {
  const router = useRouter();
  return (
    <div
      onClick={() => navigateToPage(router, 'shop')}
      className="flex w-1/2 cursor-pointer flex-col flex-nowrap rounded-[5px]  p-[5px] sm:w-1/3 lg:rounded-[10px] lg:p-[10px]"
    >
      <div className="rounded-[5px] border-[0.2px] border-black p-2 pb-0 transition-all hover:border-transparent hover:shadow-shadow2 lg:rounded-[5px] lg:p-5  lg:pb-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          <div className="rounde-l-5 max-h-[180px] max-w-[180px] grow overflow-hidden rounded-tl-[5px] bg-gray lg:rounded-tl-[5px]">
            <img src="/assets/products/1.png" alt="category-product-img-1" />
          </div>
          <div className="rounde-l-5 max-h-[180px] max-w-[180px] grow overflow-hidden rounded-tr-[5px] bg-gray lg:rounded-tr-[5px]">
            <img src="/assets/products/2.png" alt="category-product-img-2" />
          </div>
          <div className="rounde-l-5 max-h-[180px] max-w-[180px] grow overflow-hidden rounded-bl-[5px] bg-gray lg:rounded-bl-[5px]">
            <img src="/assets/products/3.png" alt="category-product-img-3" />
          </div>
          <div className="rounde-l-5 max-h-[180px] max-w-[180px] grow overflow-hidden rounded-br-[5px] bg-gray lg:rounded-br-[5px]">
            <img src="/assets/products/4.png" alt="category-product-img-4" />
          </div>
        </div>
        <div className="flex items-center justify-center py-[5px] lg:py-[15px] xl:py-[20px]">
          <p className="text-center font-sans text-sm font-bold leading-7 text-black md:text-xl">
            Shop name
          </p>
        </div>
      </div>
    </div>
  );
}
