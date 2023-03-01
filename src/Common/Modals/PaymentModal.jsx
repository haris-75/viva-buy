import React, { useState } from 'react';
import { close } from '../../Components/Svg';
import { InputRadio } from '../Inputs';
import { PrimaryButton } from '../Buttons';

export default function PaymentModal({ showAddCardModal, closeModal }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="flex flex-col gap-4 z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-auto sm:max-h-[800px] sm:max-w-[520px] sm:rounded-[30px]">
        {/*header */}
        <div className=" relative flex items-center justify-between font-sans">
          <h2 className="font-sans text-3xl font-bold leading-10 text-black">
            Select payment method
          </h2>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
            onClick={closeModal}
          >
            {close}
          </div>
        </div>

        {/* Add New Card Button */}
        <div className="flex justify-end mb-2.5 ">
          <div
            className="flex py-2.5 px-4 border-2 rounded-full items-center cursor-pointer hover:shadow-shadow1"
            onClick={showAddCardModal}
          >
            <div>
              <img src="/assets/cart/add.svg" width={20} />
            </div>
            <p className="ml-2">Add credit or debit card</p>
          </div>
        </div>

        {/* form */}
        <div>
          <div className="flex">
            <div className="my-auto">
              <InputRadio
                checked={paymentMethod === 'cashOnDeliver'}
                onClick={() => setPaymentMethod('cashOnDeliver')}
              />
            </div>
            <div className="flex items center gap-3">
              <img src="/assets/card-logo.svg" />

              <span className="mt-[2px]">Cash on Delivery</span>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="my-auto">
              <InputRadio
                checked={paymentMethod === 'visa'}
                onClick={() => setPaymentMethod('visa')}
              />
            </div>
            <div className="flex items center gap-3">
              <img src="/assets/cards/visa.svg" />

              <img src="/assets/card-number.svg" />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="my-auto">
              <InputRadio
                checked={paymentMethod === 'master'}
                onClick={() => setPaymentMethod('master')}
              />
            </div>
            <div className="flex items center gap-3">
              <img src="/assets/cards/master.svg" />

              <img src="/assets/card-number.svg" />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="my-auto">
              <InputRadio
                checked={paymentMethod === 'jcb'}
                onClick={() => setPaymentMethod('jcb')}
              />
            </div>
            <div className="flex items center gap-3">
              <img src="/assets/cards/jcb.svg" />

              <img src="/assets/card-number.svg" />
            </div>
          </div>
          <div className="flex mt-5">
            <div className="my-auto">
              <InputRadio
                checked={paymentMethod === 'kbz'}
                onClick={() => setPaymentMethod('kbz')}
              />
            </div>
            <div className="flex items center gap-3">
              <img src="/assets/cards/kbz.svg" />

              <span className="mt-[2px]">KBZ Pay</span>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="my-auto">
              <InputRadio
                checked={paymentMethod === 'wave'}
                onClick={() => setPaymentMethod('wave')}
              />
            </div>
            <div className="flex items center gap-3">
              <img src="/assets/cards/wave.svg" />

              <span className="mt-[2px]">Wave Pay</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="my-5 flex justify-center">
          <PrimaryButton
            className="h-[40px] w-full max-w-[400px] rounded-[35px] bg-primary sm:px-9 sm:py-[4px] px-4 py-[2px]  text-center font-sans text-base font-bold leading-6 text-black transition-all duration-200 hover:shadow-shadow1"
            onClick={closeModal}
          >
            Confirm payment method
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
