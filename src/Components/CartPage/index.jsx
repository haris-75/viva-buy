import React from 'react';
import ItemCard from './ItemCard';
import OrderForm from './OrderForm';

export default function CartPage() {
  return (
    // flex  flex-col md:flex-row gap-10 justify-between
    <div className=" grid grid-cols-1 lg-xl:grid-cols-10 md:grid-cols-12 md-lg:gap-10 md:gap-5 gap-10">
      {/* flex flex-col gap-5 */}
      <div className="flex flex-col gap-10 col-span-1 lg-xl:col-span-7 md:col-span-8">
        <ItemCard
          itemsArray={[
            {
              text: 'Product name lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
              price: '8,000'
            }
          ]}
          fee="2,000 Ks"
          date="23/Feb/2023"
          shipsFrom="Yangon"
        />
        <ItemCard
          itemsArray={[
            {
              text: 'Product name lorem ipsum dolor sit amet ',
              price: '8,000'
            },
            {
              text: 'Product name lorem ipsum dolor sit amet, consectetur adipiscing elit ',
              price: '12,000'
            },
            {
              text: 'Product name lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ',
              price: '3,000'
            },
            {
              text: 'Product name lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ',
              price: '572'
            }
          ]}
          fee="Free"
          date="21/Feb/2023"
          shipsFrom="Mandaly"
        />
      </div>
      <div className="col-span-1 lg-xl:col-span-3 md:col-span-4">
        <OrderForm />
      </div>
    </div>
  );
}
