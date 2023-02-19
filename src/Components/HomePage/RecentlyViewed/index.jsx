import React from 'react';
import RecentViewedCard from './RecentViewedCard';
import { H2 } from '../../../Common/Typography';
import { useMediaQuery } from 'react-responsive';
{
  /*  recently viewed list */
}
export default function RecentlyViewed({ label, description }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <H2>
          <span className="font-black">{label}</span>
          {description ? (
            <span className="font-sans font-light text-black">- {description}</span>
          ) : (
            ''
          )}
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
