import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';

export default function ProductPage() {
  return (
    <div className="w-full flex gap-8">
      <div className="grid grid-rows-2">
        <ProductCarousel />
        <p>Shop Reviews</p>
      </div>
      <div>
        <ProductDescription />
      </div>
    </div>
  );
}
