import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { FacebookIcon, GlobalIcon, KeyboardDownIcon, InstagramIcon } from '../../Components/Svg';
export default function Footer(props) {
  return (
    <div className="mt-5 w-full bg-black sm:mt-20">
      <div className="mx-auto flex max-w-page-mx flex-col flex-nowrap justify-between gap-8 py-6 px-7 sm:flex-row sm:flex-wrap sm:px-14 md:py-10">
        <SellOnMarket />
        <OurPolicies />
        <About />
        <ContactUs />
      </div>
      <div className="flex h-auto w-full items-center bg-secondary py-6 px-8 md:py-10 md:px-14 lg:h-[100px]">
        <div className="mx-auto flex w-full max-w-page-mx flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Logo />
            <p className=" font-sans text-xs font-light text-[#757575] md:text-sm">
              @ Marketplace Ltd. 2022
            </p>
          </div>
          <div className="flex flex-col-reverse items-center gap-3 sm:flex-row lg:gap-[50px]">
            <div className="flex items-center gap-4 lg:gap-7">
              <span className="w-[30px] cursor-pointer rounded-full p-[7px] hover:bg-hoverColor hover:shadow-shadow1">
                <FacebookIcon />
              </span>
              <span className="w-[30px] cursor-pointer rounded-full p-[7px] hover:bg-hoverColor hover:shadow-shadow1">
                <InstagramIcon />
              </span>
            </div>

            <div className="flex flex-row items-center gap-7 lg:gap-9">
              <div className="flex cursor-pointer flex-row items-center gap-3 rounded-[50px] py-[5px] px-[10px] transition-all duration-200 hover:bg-hoverColor">
                <p className="w-[20px] md:w-[18px]">
                  <GlobalIcon />
                </p>
                <p className="font-sans text-base font-medium text-black md:text-sm">English</p>
              </div>
              <div className="flex cursor-pointer flex-row items-center gap-3 rounded-[50px] py-[5px] px-[10px] transition-all duration-200 hover:bg-hoverColor">
                <p className="font-sans text-base font-medium text-black md:text-sm ">
                  Myanmar Kyats (MMK)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// sell on market
function SellOnMarket(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between sm:cursor-auto"
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-base font-bold leading-6 text-white md:text-lg lg:leading-8">
          Sell on Marketplace{' '}
        </h3>
        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-[15px] block sm:hidden">
          <ul className="flex flex-col">
            <li>
              <FooterLink href="">Become a seller</FooterLink>
            </li>
            <li>
              <FooterLink href="">Policies</FooterLink>
            </li>
            <li>
              <FooterLink href="">FAQs</FooterLink>
            </li>
            <li>
              <FooterLink href="">Support</FooterLink>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="mt-[15px] hidden sm:block">
        <ul className="flex flex-col">
          <li>
            <FooterLink href="">Become a seller</FooterLink>
          </li>
          <li>
            <FooterLink href="">Policies</FooterLink>
          </li>
          <li>
            <FooterLink href="">FAQs</FooterLink>
          </li>
          <li>
            <FooterLink href="">Support</FooterLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function OurPolicies(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between sm:cursor-auto"
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-base font-bold leading-6 text-white md:text-lg lg:leading-8">
          Our policies
        </h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-[15px] block sm:hidden">
          <ul className="flex flex-col">
            <li>
              <FooterLink href="">Payment information</FooterLink>
            </li>
            <li>
              <FooterLink href="">Delivery information</FooterLink>
            </li>
            <li>
              <FooterLink href="">Exchanges and returns</FooterLink>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="mt-[15px] hidden sm:block">
        <ul className="flex flex-col">
          <li>
            <FooterLink href="">Payment information</FooterLink>
          </li>
          <li>
            <FooterLink href="">Delivery information</FooterLink>
          </li>
          <li>
            <FooterLink href="">Exchanges and returns</FooterLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function About(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between sm:cursor-auto"
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-base font-bold leading-6 text-white md:text-lg lg:leading-8">
          About
        </h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className=" mt-[15px] block sm:hidden">
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li>
              <FooterLink href="">About us</FooterLink>
            </li>
            <li>
              <FooterLink href="">Terms and conditions</FooterLink>
            </li>
            <li>
              <FooterLink href="">Privacy policy</FooterLink>
            </li>
          </ul>
        </div>
      ) : null}

      <div className="mt-[15px] hidden sm:block">
        <ul className="flex flex-col">
          <li>
            <FooterLink href="">About us</FooterLink>
          </li>
          <li>
            <FooterLink href="">Terms and conditions</FooterLink>
          </li>
          <li>
            <FooterLink href="">Privacy policy</FooterLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ContactUs(props) {
  const [expandBlock, setExpandBlock] = useState(false);
  return (
    <div>
      <div
        className="flex cursor-pointer flex-row flex-nowrap items-center justify-between sm:cursor-auto"
        onClick={() => setExpandBlock(!expandBlock)}
      >
        <h3 className="w-max font-sans text-base font-bold leading-6 text-white md:text-lg lg:leading-8">
          Contact us
        </h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? 'rotate-180' : ''
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className=" mt-[15px] block sm:hidden">
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li>
              <FooterLink href="">Contact information</FooterLink>
            </li>
          </ul>
        </div>
      ) : null}

      <div className=" mt-[15px] hidden sm:block">
        <ul className="flex flex-col gap-2 lg:gap-4">
          <li>
            <FooterLink href="">Contact information</FooterLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

function FooterLink(props) {
  return (
    <Link
      href={props.href}
      className="font-sans text-sm font-medium leading-6 text-white transition-all duration-200 hover:underline lg:leading-8"
    >
      {props.children}
    </Link>
  );
}
