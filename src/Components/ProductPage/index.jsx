import React from 'react';
import { useMediaQuery } from 'react-responsive';
import RecentlyViewed from '../HomePage/RecentlyViewed';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';
import ShopReview from './ShopReview';

export default function ProductPage() {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });
  return (
    <div className={`${isMobile ? 'mt-4' : ''}`}>
      <div className="w-full flex gap-8 justify-center">
        <div className="flex flex-col gap-10">
          <ProductCarousel />
          {isMobile ? <ProductDescription /> : ''}
          <ShopReview />
        </div>
        {isMobile ? (
          ''
        ) : (
          <div>
            <ProductDescription />
          </div>
        )}
      </div>
      <div>
        <RecentlyViewed label="More From This Shop" description="" />
        <RecentlyViewed label="You May Also Like" description="" />
      </div>
    </div>
  );
}
