import React from 'react';
import CheckoutFooter from './Footer/CheckoutFooter';
import CheckoutHeader from './Header/CheckoutHeader';

export default function CheckoutLayout({ children }) {
  return (
    <div className="w-full ">
      <div className="mx-auto box-content">
        <CheckoutHeader />
        <main>{children}</main>
      </div>

      <CheckoutFooter />
    </div>
  );
}
