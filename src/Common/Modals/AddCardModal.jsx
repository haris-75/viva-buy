import React, { useState } from 'react';
import { close } from '../../Components/Svg';
import { InputCheckbox, InputField } from '../Inputs';
import { PrimaryButton } from '../Buttons';

export default function AddCardModal({ closeModal }) {
  const [saveInfoFlag, setSaveInfoFlag] = useState(false);
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="flex flex-col gap-4 z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-auto sm:max-h-[800px] sm:max-w-[520px] sm:rounded-[30px]">
        {/*header */}
        <div className=" relative flex items-center justify-between font-sans">
          <h2 className="font-sans text-3xl font-bold leading-10 text-black">
            Add credit/debit card
          </h2>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
            onClick={closeModal}
          >
            {close}
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col gap-2.5">
          <div className="relative">
            <p>Card Number</p>
            <InputField type="text" placeholder="0000 0000 0000 0000" />
            <img
              width={35}
              src="/assets/add-credit.svg"
              className="absolute top-[50%] right-[10px]"
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <p>MM/YY</p>
              <InputField type="text" placeholder="00/00" />
            </div>
            <div className="w-full">
              <p>CVC</p>
              <InputField type="text" placeholder="000" />
            </div>
          </div>
          <div>
            <p>Name of cardholder</p>
            <InputField type="text" />
            <div className="flex items-center mt-2">
              <InputCheckbox
                onClick={() => setSaveInfoFlag(!saveInfoFlag)}
                checked={saveInfoFlag}
              />
              <p>Save this card for next time</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="my-5 flex justify-center cursor-pointer">
          <PrimaryButton onClick={closeModal}>Save Details</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
