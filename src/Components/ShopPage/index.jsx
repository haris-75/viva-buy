import React from 'react';
import ShopReview from '../ProductPage/ShopReview';
import SearchFilter from './SearchFilter';
import ShopHeader from './ShopHeader';
import ShopList from './ShopList';

export default function ShopPage() {
  return (
    <div>
      <ShopHeader />
      <div className="grid md-lg:grid-cols-4 md:grid-cols-6 xs:grid-cols-1  gap-8 mt-10">
        <SearchFilter />
        <ShopList />
      </div>
      <ShopReview singleLine />
      <div>
        <div>
          <h1 className="text-2xl font-black my-4 border-gray border-b">Shop Policy</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <ul className="list-disc pl-5 mt-4">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </div>
  );
}
