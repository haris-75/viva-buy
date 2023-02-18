import React from 'react';
import { H2 } from '../../../Common/Typography';
import ShopCard from './ShopCard';
import { useMediaQuery } from 'react-responsive';

{
  /* shops list */
}
export default function ShopsList(props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <H2>
          <span>Shops we think you’ll love </span>
          <span className="font-sans font-light text-black">- based on your activity</span>
        </H2>
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
