import React from 'react';
import Rating from '../../../../assets/img/rating.svg';

export default function UserReview({ review }) {
  return (
    <div>
      <div className="flex text-sm gap-2 items-center">
        <div>
          <img src="/assets/user-ellipse.png" width={40} />
        </div>
        <p>Username123</p>
        <span className="text-disabled">16/Oct/2022</span>
      </div>
      <div className="flex text-sm gap-2">
        <p className="font-black">Purchased Item:</p>
        &nbsp;&nbsp;
        <span className="text-disabled">Product name lorem ispusm</span>
      </div>
      <div>
        <img src={Rating['src']} className=" w-full group-hover/item:flex md:w-[80px]" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </p>
      <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
      {review?.length > 0 ? (
        <div className="flex gap-1">
          {review.map((ele) => (
            <div key={ele + review}>
              <img src="/assets/review-img.png" width={60} />
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
