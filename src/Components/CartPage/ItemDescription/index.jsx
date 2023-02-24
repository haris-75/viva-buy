import React from 'react';
import QuantityButton from '../../ProductPage/ProductDescription/QuantityButton';

export default function ItemDescription() {
  return (
    <div className="flex ">
      <div>
        <img src="/assets/shop-3.png" width={175} />
      </div>
      <div>
        <p className="text-lg">
          Product name lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
        </p>
        <div className="text-sm text-disabled">
          <span>Variant 1: Variant 1</span>&nbsp;|&nbsp;
          <span>Variant 2: Variant 2</span>
        </div>
        <QuantityButton initialValue={1} />
        <div className="text-sm flex gap-4">
          <span>Edit</span>
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
}
