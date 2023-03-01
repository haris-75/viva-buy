import React, { useState } from 'react';
import { close } from '../../Components/Svg';
import { PrimaryButton } from '../Buttons';
import { InputDropDown } from '../Inputs';

export default function EditItemModal({ closeModal }) {
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [valueDropDown1, setValueDropDown1] = useState('');
  const [valueDropDown2, setValueDropDown2] = useState('');
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="flex flex-col gap-4 z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-screen sm:max-h-screen sm:max-w-[480px] sm:rounded-[30px]">
        {/*header */}
        <div className=" relative flex items-center justify-between font-sans">
          <h2 className="font-sans text-3xl font-bold leading-10 text-black">Edit item</h2>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
            onClick={closeModal}
          >
            {close}
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col gap-8">
          <InputDropDown
            labelText={'Variant'}
            id={'abcd'}
            show={showDropDown1}
            toggleDropDown={() => setShowDropDown1(!showDropDown1)}
            value={valueDropDown1}
            setValue={(state) => {
              setValueDropDown1(state);
              setShowDropDown1(false);
            }}
          />
          <InputDropDown
            labelText={'Variant'}
            id={'efgh'}
            show={showDropDown2}
            toggleDropDown={() => setShowDropDown2(!showDropDown2)}
            value={valueDropDown2}
            setValue={(state) => {
              setValueDropDown2(state);
              setShowDropDown2(false);
            }}
          />
        </div>

        {/* Confirm Button */}
        <div className="my-5 flex justify-center cursor-pointer gap-2.5">
          <PrimaryButton onClick={closeModal}>Save changes</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
