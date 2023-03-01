import React from 'react';
import Logo from '../Logo';

export default function Header() {
  return (
    <div className=" pt-[12px]   lg:pt-9">
      <div className="grid h-[40px] grid-cols-[1fr_max-content] justify-between gap-3 sm:gap-9 lg:h-[40px] border-b-2 border-gray">
        <div className="flex sm:pl-10 pl-5 flex-row items-center gap-5">
          {/* logo */}
          <Logo />
        </div>
      </div>
    </div>
  );
}
