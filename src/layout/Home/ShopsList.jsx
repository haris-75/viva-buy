import React from "react";
import FeaturedProductCard from "../../components/FeaturedProductCard";
import ShopCard from "../../components/ShopCard";
import { useMediaQuery } from "react-responsive";

{
  /* shops list */
}
export default function ShopsList(props) {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <h2 className="font-sans text-lg font-bold text-black sm:text-2xl md:text-3xl lg:text-4xl">
          <span>Shops we think you’ll love </span>
          <span className="font-sans font-light text-black">
            - based on your activity
          </span>
        </h2>
      </div>
      <div className="-mt-[5px] -ml-[5px] flex flex-row flex-nowrap gap-y-12 lg:-mt-[10px] lg:-ml-[10px]">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        {isMobile ? null : (
          <>
            <ShopCard />
            <ShopCard />
          </>
        )}
      </div>
    </div>
  );
}
