import React from 'react';
import { close } from '../../Components/Svg';
import { PrimaryButton } from '../Buttons';

export default function EditAddressModal({ closeModal }) {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="flex flex-col gap-4 z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-auto sm:max-h-[800px] sm:max-w-[520px] sm:rounded-[30px] items-center">
        {/*header */}
        <div className=" relative flex items-center justify-between font-sans">
          <p className="font-sans text-2xl font-normal leading-10 text-black">
            You haven’t finished checking out yet.
          </p>
        </div>

        {/* Confirm Button */}
        <div className="my-5 flex justify-end cursor-pointer gap-2.5">
          <div>
            <PrimaryButton
              className="xs-m:text-base text-xs  h-[40px] max-w-[400px] rounded-[35px] bg-white border-2 xs-m:px-9 px-4 xs-m:py-[4px] text-center font-sans font-bold leading-6 text-black transition-all duration-200 hover:shadow-shadow1"
              onClick={closeModal}
            >
              Return to cart
            </PrimaryButton>
          </div>
          <div>
            <PrimaryButton
              className="h-[40px] xs-m:text-base text-xs w-full max-w-[400px] rounded-[35px] bg-primary xs-m:px-9 px-4 xs-m:py-[4px] text-center font-sans font-bold leading-6 text-black transition-all duration-200 hover:shadow-shadow1"
              onClick={closeModal}
            >
              Keep checking out
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
