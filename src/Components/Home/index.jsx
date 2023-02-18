import React from 'react';
import CategoryProducts from './CategoryProducts';
import FeaturedProducts from './FeaturedProducts';
import HeroBanner from './HeroBanner';
import RecentlyViewed from './RecentlyViewed';
import ShopsList from './ShopList';
import TopProducts from './TopProducts';

export default function Home() {
  return (
    <div className="w-full">
      <HeroBanner />
      <TopProducts />
      <ShopsList size="100%" />
      <FeaturedProducts />
      <CategoryProducts />
      <RecentlyViewed />
    </div>
  );
}
