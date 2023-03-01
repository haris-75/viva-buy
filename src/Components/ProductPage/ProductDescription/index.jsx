import React, { useState } from 'react';
import { PrimaryButton, RoundSvgButton } from '../../../Common/Buttons';
import { InputCheckbox, InputDropDown } from '../../../Common/Inputs';
import ProductInfoDropDown from './ProductInfoDropDown';
import QuantityButton from './QuantityButton';
import ShopInfo from './ShopInfo';

export default function ProductDescription() {
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [giftWrapChecked, setGiftWrapChecked] = useState(false);
  const [showProductDescription, setShowProductDescription] = useState(false);
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
  const [showShopPolicy, setShowShopPolicy] = useState(false);
  const [valueDropDown1, setValueDropDown1] = useState('');
  const [valueDropDown2, setValueDropDown2] = useState('');
  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="font-thin md:text-2xl text-lg">
          <p>
            Product name lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            tempor incididunt
          </p>
        </div>
        <h1 className="md:text-2xl text-lg font-bold">10,000 Ks</h1>
      </div>

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
      <QuantityButton />
      <div className="flex items-center">
        <InputCheckbox
          checked={giftWrapChecked}
          onClick={() => setGiftWrapChecked(!giftWrapChecked)}
          onChange={() => {}}
        />
        <h1 className="font-bold">Gift wrap for</h1>&nbsp; <span>1,500Ks</span>
      </div>
      <div className="flex xs:flex-row flex-col   justify-between items-center gap-2.5">
        <PrimaryButton>Add to bag</PrimaryButton>

        <div className="flex  gap-2.5">
          <div>
            <RoundSvgButton className="p-3 text-base md:text-xl md:px-[8px] md:py-[9px]">
              <img
                src="/assets/cart/heart.svg"
                className="md:w-[35px] sm:w-[25px] xs-m:w-[25px] xs:w-[40px]"
              />
            </RoundSvgButton>
          </div>
          <div>
            <RoundSvgButton className="p-3 text-base md:text-xl md:p-[9px] ">
              <img
                src="/assets/cart/share.svg"
                className="md:w-[34px] sm:w-[24px] xs-m:w-[24px] xs:w-[39px]"
              />
            </RoundSvgButton>
          </div>
        </div>
      </div>
      <ShopInfo />
      <ProductInfoDropDown
        label="Product Description"
        textArray={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim,',
          'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
          'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
          'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ',
          'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ]}
        show={showProductDescription}
        toggle={() => setShowProductDescription(!showProductDescription)}
        delivery={false}
        subList={true}
      />
      <ProductInfoDropDown
        label="Delivery Information"
        textArray={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          'tempor incididunt ut labore et dolore magna aliqua. '
        ]}
        show={showDeliveryInfo}
        toggle={() => setShowDeliveryInfo(!showDeliveryInfo)}
        delivery={true}
        subList={false}
      />
      <ProductInfoDropDown
        label="Shop Policy"
        textArray={[
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
          'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim,',
          'quis nostrud exercitation. '
        ]}
        show={showShopPolicy}
        toggle={() => setShowShopPolicy(!showShopPolicy)}
        delivery={false}
        subList={false}
      />
    </div>
  );
}
