import React from 'react';
import CheckoutPage from '../Components/Checkout';
import CheckoutLayout from '../Layout/CheckoutLayout';

export default function Checkout() {
  return (
    <CheckoutLayout>
      <CheckoutPage />
    </CheckoutLayout>
  );
}
