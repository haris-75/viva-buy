import React, { useState } from 'react';
import PaymentModal from '../../../Common/Modals/PaymenModal';
import AddCardModal from '../../../Common/Modals/AddCardModal';

export default function BillingInfo() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  return (
    <>
      <div className="border-[1px] rounded-[5px] p-5 flex flex-col gap-6">
        <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
          <div className="flex items-center gap-1">
            <div>
              <img src="/assets/checkout/contact.svg" />
            </div>
            <span className="font-bold">Contact</span>
          </div>
          <p className="font-thin">emailaddress@gmail.com</p>
          <p className="text-disabled font-thin">Change</p>
        </div>

        <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
          <div className="flex gap-1">
            <div>
              <img src="/assets/cart/delivery.svg" className="mt-[2px]" />
            </div>
            <span className="font-bold">Deliver to</span>
          </div>
          <div>
            <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs">
              <p className="font-thin">Full Name</p>
              <div className="my-4">
                <p>Address Line 1</p>
                <p>{'Address Line 2 (optional)'}</p>
                <p>City, Township</p>
              </div>
            </div>
            <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs">0912341234</div>
          </div>
          <p className="text-disabled font-thin">Change</p>
        </div>

        <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
          <div className="flex items-center gap-1">
            <div>
              <img src="/assets/checkout/payment.svg" />
            </div>
            <span className="font-bold">Payment</span>
          </div>
          <div className="font-thin flex gap-1 items-center">
            <div>
              <img src="/assets/cards/visa.svg" />
            </div>
            <div>
              <img src="/assets/card-number.svg" />
            </div>
          </div>
          <p
            className="text-disabled font-thin cursor-pointer"
            onClick={() => setShowPaymentModal(true)}
          >
            Change
          </p>
        </div>

        <div className="md-lg:text-base md:text-sm sm:text-base xs:text-xs flex justify-between">
          <div className="flex items-center gap-1">
            <div>
              <img src="/assets/checkout/billing.svg" />
            </div>
            <span className="font-bold">Billing Address</span>
          </div>
          <p className="font-thin">Same as shipping address</p>
          <p className="text-disabled font-thin">Change</p>
        </div>
      </div>

      {showPaymentModal ? (
        <PaymentModal
          showAddCardModal={() => {
            setShowPaymentModal(false);
            setShowAddCardModal(true);
          }}
          closeModal={() => setShowPaymentModal(false)}
        />
      ) : (
        ''
      )}
      {showAddCardModal ? <AddCardModal closeModal={() => setShowAddCardModal(false)} /> : ''}
    </>
  );
}
