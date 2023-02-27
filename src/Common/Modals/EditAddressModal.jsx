import React, { useState } from 'react';
import { close } from '../../Components/Svg';
import { InputCheckbox, InputDropDownSecondary, InputField } from '../Inputs';
import { PrimaryButton } from '../Buttons';

export default function EditAddressModal({ closeModal, edit }) {
  const [saveInfoFlag, setSaveInfoFlag] = useState(false);
  const [showRegionDropDown, setShowRegionDropDown] = useState(false);
  const [showCityDropDown, setShowCityDropDown] = useState(false);
  const [showTownshipDropDown, setShowTownshipDropDown] = useState(false);
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [township, setTownship] = useState('');
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-1 flex h-full w-full items-center justify-center">
      <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
      <div className="flex flex-col gap-4 z-2 h-full w-full bg-white px-[40px]  pt-[30px] pb-[20px] shadow-shadow2 sm:h-auto sm:max-h-[800px] sm:max-w-[620px] sm:rounded-[30px]">
        {/*header */}
        <div className=" relative flex items-center justify-between font-sans">
          <h2 className="font-sans text-3xl font-bold leading-10 text-black">
            {`${edit ? 'Edit' : 'Add new'}`} address
          </h2>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center"
            onClick={closeModal}
          >
            {close}
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col gap-8">
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <p>Full Name*</p>
              <InputField type="text" />
            </div>
            <div className="w-full">
              <p>Phone Number*</p>
              <InputField type="text" />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-full">
              <InputDropDownSecondary
                show={showRegionDropDown}
                toggleDropDown={() => setShowRegionDropDown(!showRegionDropDown)}
                labelText={'Region'}
                id={'add-address-region'}
                value={region}
                setValue={setRegion}
              />
            </div>
            <div className="w-full">
              <InputDropDownSecondary
                show={showCityDropDown}
                toggleDropDown={() => setShowCityDropDown(!showCityDropDown)}
                labelText={'City'}
                id={'add-address-city'}
                value={city}
                setValue={setCity}
              />
            </div>
            <div className="w-full">
              <InputDropDownSecondary
                show={showTownshipDropDown}
                toggleDropDown={() => setShowTownshipDropDown(!showTownshipDropDown)}
                labelText={'Township'}
                id={'add-address-township'}
                value={township}
                setValue={setTownship}
              />
            </div>
          </div>
          <div>
            <p>{'Address Line 1'}</p>
            <InputField type="text" />
          </div>
          <div>
            <p>{'Address Line 2* (optional)'}</p>
            <InputField type="text" />
            <div className="flex items-center mt-2">
              <InputCheckbox
                onClick={() => setSaveInfoFlag(!saveInfoFlag)}
                checked={saveInfoFlag}
              />
              <p>Set this as your default address</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="my-5 flex justify-end cursor-pointer gap-2.5">
          <div>
            <PrimaryButton
              className="w-[166px] h-[40px] max-w-[400px] rounded-[35px] bg-white border-2 px-9 py-[4px] text-center font-sans text-base font-bold leading-6 text-black transition-all duration-200 hover:shadow-shadow1"
              onClick={closeModal}
            >
              Cancel
            </PrimaryButton>
          </div>
          <div>
            <PrimaryButton onClick={closeModal}>Save address</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
