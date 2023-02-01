import React from "react";
import { H2 } from "../../components/typography";
import FeaturedProductCard from "../../components/FeaturedProductCard";

{
  /* featured products list */
}
export default function FeaturedProducts() {
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <H2>
          <span>Featured products </span>
          <span className="font-sans font-light text-black">
            {" "}
            - sponsored by marketplace sellers
          </span>
        </H2>
      </div>
      <div className="-mt-[5px] -ml-[5px] flex flex-row flex-wrap lg:-mt-[10px] lg:-ml-[10px]">
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
        <FeaturedProductCard />
      </div>
    </div>
  );
}
