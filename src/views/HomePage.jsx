import React from "react";
import ShopsList from "../layout/Home/ShopsList";
import FeaturedProducts from "../layout/Home/FeaturedProducts";
import CategoryProducts from "../layout/Home/CategoryProducts";
import RecentlyViewed from "../layout/Home/RecentlyViewed";
import TopBanner from "../layout/Home/TopBanner";
import TopProducts from "../layout/Home/TopProducts";
import RegisterModal from "../components/modals/RegisterModal";
export default function HomePage(props) {
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
