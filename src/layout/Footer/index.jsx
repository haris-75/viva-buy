import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../../components/Logo";
import { useMediaQuery } from "react-responsive";
import {
  FacebookIcon,
  GlobalIcon,
  KeyboardDownIcon,
  InstagramIcon,
} from "../../components/Svgs";
export default function Footer(props) {
  return (
    <div className="mt-5 w-full bg-primary sm:mt-20">
      <div className="mx-auto flex max-w-page-mx flex-col flex-nowrap justify-between gap-8 py-6 px-14 sm:flex-row sm:flex-wrap md:py-10">
        <SellOnMarket />
        <OurPolicies />
        <About />
        <ContactUs />
      </div>
      <div className="flex h-auto w-full items-center bg-secondary py-6 px-8 md:py-10 md:px-14 lg:h-[100px]">
        <div className="mx-auto flex w-full max-w-page-mx flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Logo />
            <p className="color color-[#757575] font-sans text-lg md:text-xl lg:text-2xl">
              @ Marketplace Ltd. 2022
            </p>
          </div>
          <div className="flex flex-col-reverse items-center gap-3 sm:flex-row lg:gap-10">
            <div className="flex flex-row items-center gap-7 lg:gap-9">
              <div className="flex flex-row items-center gap-3">
                <p>
                  <GlobalIcon />
                </p>
                <p className="font-sans text-base font-medium text-black lg:text-xl">
                  English
                </p>
              </div>
              <div>
                <p className="font-sans text-base font-medium text-black lg:text-xl">
                  Myanmar Kyats (MMK)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-7">
              <span className="w-[20px] cursor-pointer md:w-[32px]">
                <FacebookIcon />
              </span>
              <span className="w-[20px] cursor-pointer md:w-[32px]">
                <InstagramIcon />
              </span>
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
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-white lg:text-3xl lg:leading-8">
          Sell on Marketplace{" "}
        </h3>
        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? "rotate-180" : ""
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block sm:mt-8 sm:hidden lg:mt-10">
          <ul className="flex flex-col gap-2 lg:gap-4">
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
      <div className="mt-6 hidden sm:mt-8 sm:block lg:mt-10">
        <ul className="flex flex-col gap-2 lg:gap-4">
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
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-white lg:text-3xl lg:leading-8">
          Our policies
        </h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? "rotate-180" : ""
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block sm:mt-8 sm:hidden lg:mt-10">
          <ul className="flex flex-col gap-2 lg:gap-4">
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
      <div className="mt-6 hidden sm:mt-8 sm:block lg:mt-10">
        <ul className="flex flex-col gap-2 lg:gap-4">
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
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-white lg:text-3xl lg:leading-8">
          About
        </h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? "rotate-180" : ""
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block sm:mt-8 sm:hidden lg:mt-10">
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

      <div className="mt-6 hidden sm:mt-8 sm:block lg:mt-10">
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
        <h3 className="w-max font-sans text-lg font-bold leading-6 text-white lg:text-3xl lg:leading-8">
          Contact us
        </h3>

        <span
          className={`flex h-[20px] w-[20px] items-center justify-center sm:hidden ${
            expandBlock ? "rotate-180" : ""
          }`}
        >
          <KeyboardDownIcon />
        </span>
      </div>

      {expandBlock ? (
        <div className="mt-6 block sm:mt-8  sm:hidden lg:mt-10">
          <ul className="flex flex-col gap-2 lg:gap-4">
            <li>
              <FooterLink href="">Contact information</FooterLink>
            </li>
          </ul>
        </div>
      ) : null}

      <div className="mt-6 hidden sm:mt-8 sm:block lg:mt-10">
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
      className="font-sans text-sm font-medium leading-6 text-white md:text-lg lg:text-xl lg:leading-8"
    >
      {props.children}
    </Link>
  );
}
