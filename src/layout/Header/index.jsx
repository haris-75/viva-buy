import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Logo from "../../components/Logo";
import TopNavbar from "../TopNavbar";
import MobileMenubar from "../MobileMenubar";

import { ToteIcon, UserIcon, MenuIcon } from "../../components/Svgs";

export default function Header(props) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const isLaptop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div className="pb-[12px] pt-[12px] lg:pb-[50px] lg:pt-9">
      <div className="grid h-[40px] grid-cols-[1fr_max-content] justify-between gap-3 sm:gap-9 lg:h-[60px]">
        <div className="flex flex-row gap-5">
          {/* logo */}
          <Logo />

          {/* search area for large devices that are greater than 1024px*/}
          {isLaptop ? null : (
            <div className="w-full">
              <input
                className="h-full w-full rounded-full border-0 bg-[#E8E7E7] px-9 font-sans text-xl text-[#757575] outline-0 "
                placeholder="What are you looking for?"
              />
            </div>
          )}
        </div>
        <div className="flex flex-row gap-0 sm:gap-9">
          <div className="flex w-[32px] cursor-pointer items-center">
            <ToteIcon />
          </div>
          <div className="ml-6 flex w-[32px] cursor-pointer items-center sm:m-0">
            <UserIcon />
          </div>
          <div>
            <button className="hidden h-full rounded-full bg-primary px-6 font-sans text-lg font-bold text-white sm:block lg:h-full xl:px-20 xl:text-2xl ">
              Sell on marketplace
            </button>
          </div>
        </div>
      </div>

      {/* toggle the menubar for both mobiles and desktop*/}
      {isLaptop ? (
        <div className="mt-5 flex h-[40px] flex-row items-center justify-between">
          <div
            className="h-[32px] w-[32px] cursor-pointer"
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon />
          </div>

          <MobileMenubar open={mobileMenu} close={() => setMobileMenu(false)} />
          <div className="ml-5 h-full w-full max-w-[400px]">
            <input
              className="h-full w-full rounded-full border-0 bg-[#E8E7E7] px-9 font-sans text-xs text-[#757575] outline-0 "
              w-full
              placeholder="What are you looking for?"
            />
          </div>
        </div>
      ) : (
        <div>
          <TopNavbar />
        </div>
      )}
    </div>
  );
}
