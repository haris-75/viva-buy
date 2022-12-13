import React from "react";
import ShopsList from "../layout/Home/ShopsList";
import FeaturedProducts from "../layout/Home/FeaturedProducts";
import CategoryProducts from "../layout/Home/CategoryProducts";
import RecentlyViewed from "../layout/Home/RecentlyViewed";
import TopBanner from "../layout/Home/TopBanner";

export default function HomePage(props) {
  return (
    <div className="w-full">
      <TopBanner />
      <ShopsList />
      <FeaturedProducts />
      <CategoryProducts />
      <RecentlyViewed />
    </div>
  );
}
