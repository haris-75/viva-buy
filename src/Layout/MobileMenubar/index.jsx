import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { KeyboardDownIcon } from '../../Components/Svg';
export default function MobileMenu(props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  });
  return isMobile && props.open ? (
    <div className="fixed top-0 bottom-0 left-0 z-10 h-full w-full bg-transparent">
      <div className="relative flex h-full w-[300px] flex-col gap-[20px] overflow-auto bg-white px-[20px] py-[60px] shadow-lg">
        <SellOnMarket />
        <OurPolicies />
        <About />
        <div
          className="absolute right-[10px] top-[10px] flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full border-[1px] "
          onClick={props.close}
        >
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8267 12.9723L7.20797 9.35357L3.67244 12.8891L0.989592 10.2063L4.52513 6.67072L0.927201 3.0728L3.46447 0.535534L7.06239 4.13346L10.5979 0.597925L13.2808 3.28077L9.74524 6.8163L13.364 10.435L10.8267 12.9723Z"
              fill="black"
            />
          </svg>
        </div>
        <ContactUs />
      </div>
    </div>
  ) : null;
}

function WrapperLink(props) {
  return (
    <Link href={props.href} className="font-sans text-sm font-medium leading-6 text-black">
      {props.children}
    </Link>
  );
}

function SellOnMarket(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between "
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-black ">
          Sell on Marketplace{' '}
        </h3>
        <span
          className={`flex h-[20px] w-[20px] items-center justify-center ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon fill="black" />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block">
          <ul className="flex flex-col gap-2 ">
            <li>
              <WrapperLink href="">Become a seller</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">Policies</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">FAQs</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">Support</WrapperLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function OurPolicies(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between "
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-black ">Our policies</h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon fill="black" />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block">
          <ul className="flex flex-col gap-2 ">
            <li>
              <WrapperLink href="">Payment information</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">Delivery information</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">Exchanges and returns</WrapperLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function About(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between "
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-black ">About</h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center  ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon fill="black" />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block">
          <ul className="flex flex-col gap-2 ">
            <li>
              <WrapperLink href="">About us</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">Terms and conditions</WrapperLink>
            </li>
            <li>
              <WrapperLink href="">Privacy policy</WrapperLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ContactUs(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between "
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-black ">Contact us</h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon fill="balck" />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block ">
          <ul className="flex flex-col gap-2 ">
            <li>
              <WrapperLink href="">Contact information</WrapperLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
