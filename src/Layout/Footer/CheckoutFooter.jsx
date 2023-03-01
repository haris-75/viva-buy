import React from 'react';
import Logo from '../Logo';
import { FacebookIcon, GlobalIcon, InstagramIcon } from '../../Components/Svg';
export default function CheckoutFooter() {
  return (
    <div className=" w-full bg-black">
      <div className="flex h-auto w-full items-center bg-primary py-6 px-8 md:py-10 md:px-14 lg:h-[100px]">
        <div className="mx-auto flex w-full max-w-page-mx flex-col items-center justify-between gap-3 xs-m:flex-row">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Logo />
            <p className=" font-sans text-xs font-light text-[#757575] md:text-sm">
              @ Marketplace Ltd. 2022
            </p>
          </div>
          <div className="flex flex-col-reverse items-center gap-3 xs:flex-row lg:gap-[50px]">
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
                <p className="font-sans text-base font-medium text-black md:text-sm ">MMK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
