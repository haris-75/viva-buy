import React, { useState } from 'react';
import { close } from '../../Components/Svg';
import { PrimaryButton } from '../Buttons';
import { InputRadio } from '../Inputs';

export default function SelectAddressModal({ closeModal, showEditAddressModal, setEditOption }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="flex flex-col gap-4 z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-auto sm:max-h-[800px] sm:max-w-[520px] sm:rounded-[30px]">
        {/*header */}
        <div className=" relative flex items-center justify-between font-sans">
          <h2 className="font-sans text-3xl font-bold leading-10 text-black">Select address</h2>
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
            onClick={showEditAddressModal}
          >
            <div>
              <img src="/assets/cart/add.svg" width={20} />
            </div>
            <p className="ml-2">Add a new addres</p>
          </div>
        </div>

        {/* form */}
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="my-auto">
                <InputRadio
                  checked={paymentMethod === 'address-1'}
                  onClick={() => setPaymentMethod('address-1')}
                />
              </div>
              <div className="flex flex-col items center font-normal">
                <p>Full Name</p>
                <div className="my-1">
                  <p>Address Line 1</p>
                  <p>{'Address Line 2 (optional)'}</p>
                  <p>City,Township</p>
                </div>
                <p>091234234</p>
                <div>
                  <p className="w-fit mt-[5px] font-bold bg-gray rounded-full py-[5px] px-2.5">
                    Default address
                  </p>
                </div>
              </div>
            </div>
            <div className="flex font-light gap-4">
              <span
                className="cursor-pointer"
                onClick={() => {
                  showEditAddressModal();
                  setEditOption(true);
                }}
              >
                Edit
              </span>
              <span>Remove</span>
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="flex">
              <div className="my-auto">
                <InputRadio
                  checked={paymentMethod === 'address-2'}
                  onClick={() => setPaymentMethod('address-2')}
                />
              </div>
              <div className="flex flex-col items center font-normal">
                <p>Full Name</p>
                <div className="my-1">
                  <p>Address lorem ipsum dolor sit amet</p>
                  <p>City,Township</p>
                </div>
                <p>091234234</p>
              </div>
            </div>
            <div className="flex font-light gap-4">
              <span className="cursor-pointer" onClick={showEditAddressModal}>
                Edit
              </span>
              <span>Remove</span>
            </div>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="flex">
              <div className="my-auto">
                <InputRadio
                  checked={paymentMethod === 'address-3'}
                  onClick={() => setPaymentMethod('address-3')}
                />
              </div>
              <div className="flex flex-col items center font-normal">
                <p>Full Name</p>
                <div className="my-1">
                  <p>Address lorem ipsum dolor sit amet</p>
                  <p>City,Township</p>
                </div>
                <p>091234234</p>
              </div>
            </div>
            <div className="flex font-light gap-4">
              <span className="cursor-pointer" onClick={showEditAddressModal}>
                Edit
              </span>
              <span>Remove</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="my-5 flex justify-center">
          <PrimaryButton onClick={closeModal}>Deliver to this address</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
