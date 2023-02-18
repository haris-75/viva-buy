import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo';
import TopNavbar from '../TopNavbar';
import MobileMenubar from '../MobileMenubar';

import { ToteIcon, UserIcon, MenuIcon } from '../../Components/Svg';

export default function Header(props) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const isLaptop = useMediaQuery({
    query: '(max-width: 1024px)'
  });

  return (
    <div className="pb-[12px] pt-[12px] lg:pb-[50px] lg:pt-9">
      <div className="grid h-[40px] grid-cols-[1fr_max-content] justify-between gap-3 sm:gap-9 lg:h-[40px]">
        <div className="flex flex-row items-center gap-5">
          {/* logo */}
          <Logo />

          {/* search area for large devices that are greater than 1024px*/}
          {isLaptop ? null : (
            <div className="h-[40px] w-full">
              <input
                className="h-full w-full rounded-full border-0 bg-[#E8E7E7] px-6 font-sans text-base text-[#757575] outline-0 "
                placeholder="What are you looking for?"
              />
            </div>
          )}
        </div>

        {/* icons */}
        <div className="flex h-full flex-row items-center gap-0 sm:gap-5">
          <div className="trnasition-all flex h-[30px] w-[30px] cursor-pointer items-center rounded-full p-[6px] duration-200 hover:bg-hoverColor hover:shadow-shadow1">
            <ToteIcon />
          </div>
          <div
            className="trnasition-all ml-6 flex h-[30px] w-[30px] cursor-pointer items-center rounded-full p-[6px] duration-200 hover:bg-hoverColor hover:shadow-shadow1 sm:m-0"
            onClick={() => props.setRegisterModal(true)}
          >
            <UserIcon />
          </div>
          <div className="h-full">
            <button className="hidden h-full rounded-full border-2 border-solid border-black bg-transparent px-6 font-sans text-sm font-bold text-black transition-all duration-200 hover:border-secondary hover:bg-secondary hover:shadow-shadow1 sm:block lg:h-full xl:px-5 xl:text-base">
              Sell on marketplace
            </button>
          </div>
        </div>
      </div>

      {/* toggle the menubar for both mobiles and desktop*/}
      {isLaptop ? (
        <div className="mt-5 flex h-[40px] flex-row items-center justify-between">
          <div className="h-[32px] w-[32px] cursor-pointer" onClick={() => setMobileMenu(true)}>
            <MenuIcon />
          </div>

          <MobileMenubar open={mobileMenu} close={() => setMobileMenu(false)} />
          <div className="ml-5 h-full w-full max-w-[400px]">
            <input
              className="h-full w-full rounded-full border-0 bg-[#E8E7E7] px-9 font-sans text-xs text-[#757575] outline-0 "
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
