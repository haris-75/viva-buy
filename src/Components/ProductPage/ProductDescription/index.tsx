import React, { useState } from 'react';
import { Btn1, Btn2, RoundSvgButton } from '../../../Common/Buttons';
import { InputCheckbox, InputDropDown } from '../../../Common/Inputs';
import QuantityButton from '../QuantityButton';
import ShopInfo from '../ShopInfo';

export default function ProductDescription() {
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [giftWrapChecked, setGiftWrapChecked] = useState(false);
  return (
    <div>
      <div>
        <div className="font-thin text-2xl">
          <p>Product name lorem ipsum dolor sit amet</p>
          <p>consectetur adipiscing elit sed do </p>
          <p>eiusmod tempor incididunt</p>
        </div>
        <h1 className="text-2xl font-bold">10,000 Ks</h1>
      </div>

      <InputDropDown
        labelText={'Variant'}
        id={'abcd'}
        show={showDropDown1}
        toggleDropDown={() => setShowDropDown1(!showDropDown1)}
      />
      <InputDropDown
        labelText={'Variant'}
        id={'efgh'}
        show={showDropDown2}
        toggleDropDown={() => setShowDropDown2(!showDropDown2)}
      />
      <QuantityButton />
      <div className="flex">
        <InputCheckbox
          checked={giftWrapChecked}
          onClick={() => setGiftWrapChecked(!giftWrapChecked)}
        />
        <h1 className="font-bold">Gift wrap for</h1>&nbsp; <span>1,500Ks</span>
      </div>
      <div className="flex">
        <Btn1>Add to cart</Btn1>
        <RoundSvgButton>
          <img src="/assets/cart/heart.svg" />
        </RoundSvgButton>
        <RoundSvgButton>
          <img src="/assets/cart/share.svg" />
        </RoundSvgButton>
      </div>
      <ShopInfo />
    </div>
  );
}
