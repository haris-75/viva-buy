import React from "react";
import RecentViewedCard from "../../components/RecentViewedCard";
import { useMediaQuery } from "react-responsive";
{
  /*  recently viewed list */
}
export default function RecentlyViewed() {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <h2 className="font-sans text-lg font-bold text-black sm:text-2xl md:text-3xl lg:text-4xl">
          <span>Recently viewed </span>
          <span className="font-sans font-light text-black">
            {" "}
            - based on your activity
          </span>
        </h2>
      </div>
      <div className="-mt-[5px] -ml-[5px] flex flex-row flex-nowrap lg:-mt-[10px] lg:-ml-[10px]">
        <RecentViewedCard />
        <RecentViewedCard />
        <RecentViewedCard />
        <RecentViewedCard />

        {isMobile ? null : (
          <>
            <RecentViewedCard />
            <RecentViewedCard />
          </>
        )}
      </div>
    </div>
  );
}
