import React, { useState } from 'react';

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <span>Quantity</span>
      <div className="flex">
        <button
          className={`rounded-l-md px-4 py-2.5  bg-white-secondary ${
            quantity < 1 ? 'pointer-event-none cursor-default' : 'hover:shadow-shadow1'
          }`}
          onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
        >
          <img src={`./assets/cart/minus${quantity < 1 ? '-disabled' : ''}.svg`} />
        </button>
        <span className="px-4 py-2.5 w-12 text-center">{quantity}</span>
        <button
          className="rounded-r-md px-4 py-2.5 bg-white-secondary hover:shadow-shadow1"
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        >
          <img src={'./assets/cart/add.svg'} />
        </button>
      </div>
    </>
  );
}
