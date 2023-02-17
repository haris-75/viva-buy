import React from 'react';
import ShopsList from '../Components/Home/ShopsList';
import FeaturedProducts from '../Components/Home/FeaturedProducts';
import CategoryProducts from '../Components/Home/CategoryProducts';
import RecentlyViewed from '../Components/Home/RecentlyViewed';
import TopBanner from '../Components/Home/TopBanner';
import TopProducts from '../Components/Home/TopProducts';
export default function Home() {
  return (
    <div className="w-full">
      <TopBanner />
      <TopProducts />
      <ShopsList size="100%" />
      <FeaturedProducts />
      <CategoryProducts />
      <RecentlyViewed />
    </div>
  );
}
