import React from 'react';
import RecentlyViewed from '../HomePage/RecentlyViewed';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';
import ShopReview from './ShopReview';

export default function ProductPage() {
  return (
    <div>
      <div className="w-full flex gap-8">
        <div className="grid grid-rows-2">
          <ProductCarousel />
          <ShopReview />
        </div>
        <div>
          <ProductDescription />
        </div>
      </div>
      <div>
        <RecentlyViewed label="More From This Shop" description="" />
        <RecentlyViewed label="You May Also Like" description="" />
      </div>
    </div>
  );
}
