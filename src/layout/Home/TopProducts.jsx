import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
export function TopProducts(props) {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <h2 className="font-sans text-lg font-bold text-black sm:text-2xl md:text-3xl lg:text-4xl">
          <span>Shops we think you’ll love </span>
          <span className="font-sans font-light text-black">
            {" "}
            - based on your activity
          </span>
        </h2>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row">
        <ProductPair index={0} />
        <ProductPair index={1} />
        <ProductPair index={2} />
        {isMobile ? null : <ProductPair index={3} />}
      </div>
    </div>
  );
}

const ProductPair = (props) => {
  return (
    <div
      className={`flex flex-row  sm:w-1/3 lg:w-1/4 ${
        props.index % 2 == 0 ? "sm:flex-col-reverse" : "sm:flex-col"
      }`}
    >
      <div className="h-[145px] w-full p-[5px] sm:h-[280px] lg:h-[360px] lg:p-[10px]">
        <div className="h-full w-full rounded-[5px] bg-gray md:rounded-[20px]"></div>
      </div>
      <div className="h-[145px] w-full p-[5px] sm:h-[180px] lg:h-[220px] lg:p-[10px]">
        <div className="h-full w-full rounded-[5px] bg-gray md:rounded-[20px]"></div>
      </div>
    </div>
  );
};

export default TopProducts;
