import React from 'react';
import ItemCard from './ItemCard';
import OrderForm from './OrderForm';

export default function CartPage() {
  return (
    <div className="flex xs:flex-col md:flex-row gap-10 justify-between">
      <div className="flex  flex-col gap-5">
        <ItemCard itemsArray={[8000]} fee="2,000 Ks" date="23/Feb/2023" shipsFrom="Yangon" />
        <ItemCard
          itemsArray={[1200, 3000, 4000, 589]}
          fee="Free"
          date="21/Feb/2023"
          shipsFrom="Mandaly"
        />
      </div>
      <div>
        <OrderForm />
      </div>
    </div>
  );
}
