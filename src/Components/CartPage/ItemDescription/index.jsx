import React, { useState } from 'react';
import EditItemModal from '../../../Common/Modals/EditItemModal';

export default function ItemDescription({ price, text }) {
  const [quantity, setQuantity] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
  return (
    <div className="flex gap-4 flex-col xs-m:grid xs-m:grid-cols-6">
      <div className="xs-m:col-span-2">
        <img src="/assets/shop-3.png" width={175} />
      </div>
      <div className="flex flex-col gap-3.5 xs-m:col-span-4">
        <div className="flex  justify-between md:gap-8 sm:gap-4 gap-2">
          <p className="text-lg w-full line-clamp-2 max-w-[400px]">{text}</p>
          <div>
            <p className="text-xl font-black text-end">{`${price}Ks`}</p>
            {price === '8,000' ? (
              <div className="text-xs font-thin">
                <span className="line-through">10,000Ks</span>&nbsp;
                <span className="text-[#258635] whitespace-pre">{'(20%  off)'}</span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="text-sm text-disabled">
          <span>Variant 1: Variant 1</span>&nbsp;|&nbsp;
          <span>Variant 2: Variant 2</span>
        </div>
        <div className="flex">
          <button
            className={`rounded-l-md px-2.5 py-1  bg-white-secondary ${
              quantity < 1 ? 'pointer-events-none cursor-default' : 'hover:shadow-shadow1'
            }`}
            onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          >
            <img src={`./assets/cart/minus${quantity < 1 ? '-disabled' : ''}.svg`} />
          </button>
          <span className="px-2.5 py-1 w-8 text-center text-sm border-[1px] border-white hover:border-[1px] hover:border-black">
            {quantity}
          </span>
          <button
            className="rounded-r-md px-2.5 py-1 bg-white-secondary hover:shadow-shadow1"
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          >
            <img src={'./assets/cart/add.svg'} />
          </button>
        </div>
        <div className="text-sm flex gap-6">
          <span className="cursor-pointer" onClick={() => setShowEditModal(true)}>
            Edit
          </span>
          <span>Remove</span>
        </div>
      </div>
      {showEditModal ? <EditItemModal closeModal={() => setShowEditModal(false)} /> : ''}
    </div>
  );
}
