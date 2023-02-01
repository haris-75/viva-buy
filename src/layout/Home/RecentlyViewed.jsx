import React from "react";
import RecentViewedCard from "../../components/RecentViewedCard";
import { H2 } from "../../components/typography";
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
        <H2>
          <span className="">Recently viewed</span>
          <span className="font-sans font-light text-black">
            - based on your activity
          </span>
        </H2>
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
