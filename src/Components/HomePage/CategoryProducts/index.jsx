import React from 'react';
import { H2 } from '../../../common/Typographys';
import CategoryProductsCard from './CategoryProductsCard';
import { useMediaQuery } from 'react-responsive';

{
  /* category products list */
}
export default function CategoryProducts() {
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  });
  return (
    <div className="mt-5 md:mt-20">
      <div className="mb-[10px] md:mb-5">
        <H2>
          <span className="">Browse by category </span>
          <span className="font-sans font-light text-black"> - our top picks</span>
        </H2>
      </div>
      <div className="-mt-[5px] -ml-[5px] flex flex-row flex-wrap lg:-mt-[10px] lg:-ml-[10px]">
        <CategoryProductsCard />
        <CategoryProductsCard />
        <CategoryProductsCard />
        <CategoryProductsCard />

        {isMobile ? null : (
          <>
            <CategoryProductsCard />
            <CategoryProductsCard />
          </>
        )}
      </div>
    </div>
  );
}
