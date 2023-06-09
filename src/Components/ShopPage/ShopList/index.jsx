import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import RatingDropDown from '../../ProductPage/ShopReview/RatingDropDown';
import SingleShop from './SingleShop';

export default function ShopList() {
  const [ratingValue, setRatingValue] = useState('Rating: High to Low');
  const [showRating, setShowRating] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 530px)'
  });
  return (
    <div className="md-lg:col-span-3 md:col-span-4 xs:col-span-1">
      <div className="flex justify-end mb-10 ">
        <RatingDropDown
          value={ratingValue}
          setValue={(value) => setRatingValue(value)}
          toggle={() => setShowRating(!showRating)}
          show={showRating}
        />
      </div>
      {[1, 2, 3, 4, 5]?.map((ele, index) => (
        <div
          key={`shop-list-${ele}-${index}`}
          className="-mt-[5px] -ml-[5px] flex flex-row flex-nowrap lg:-mt-[10px] lg:-ml-[10px]"
        >
          <SingleShop />
          <SingleShop />
          <SingleShop />
          {isMobile ? '' : <SingleShop />}
        </div>
      ))}
    </div>
  );
}
