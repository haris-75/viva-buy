import React, { useState } from 'react';
import Pagination from '../../../Common/Pagination';
import RatingDropDown from './RatingDropDown';
import UserReview from './UserReview';

export default function ShopReview({ singleLine }) {
  const [ratingValue, setRatingValue] = useState('Rating: High to Low');
  const [showRating, setShowRating] = useState(false);

  return (
    <div>
      <div className="flex justify-between mb-10 border-gray border-b">
        <h1 className="text-xl">Shop reviews</h1>
        <RatingDropDown
          value={ratingValue}
          setValue={(value) => setRatingValue(value)}
          toggle={() => setShowRating(!showRating)}
          show={showRating}
        />
      </div>
      <div className="flex  flex-col gap-8">
        <UserReview review={[]} singleLine />
        <UserReview review={[1, 2, 3, 4]} singleLine />
        <UserReview review={[1]} singleLine />
        <UserReview review={[]} singleLine />
        <Pagination />
      </div>
    </div>
  );
}
